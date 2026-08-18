// Vercel Serverless Function: /api/create-order
// Creates a Razorpay order for paid certificate download tracks.

import Razorpay from 'razorpay';

// keep in sync with src/utils/pricing.js
const FREE_CODE_PREFIXES = ['CPP'];

const CERTIFICATE_PRICE_PAISE = 4900; // ₹49.00 — hardcoded server-side

/**
 * CORS Validator Helper
 */
function isAllowedOrigin(origin) {
  if (!origin) return true; // same-origin or non-browser request
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  const allowLocalhost = process.env.ALLOW_LOCALHOST === 'true';

  if (allowedOrigin && origin === allowedOrigin) return true;
  if (allowLocalhost && (/^https?:\/\/localhost(:\d+)?$/i.test(origin) || /^https?:\/\/127\.0\.0\.1(:\d+)?$/i.test(origin))) {
    return true;
  }
  return !allowedOrigin && !allowLocalhost; // Default permissive if no CORS rules configured
}

export default async function handler(req, res) {
  // 1. Env var safety checks
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.error('Server error: RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET missing');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  // 2. CORS Lockdown Check
  const origin = req.headers.origin;
  if (!isAllowedOrigin(origin)) {
    return res.status(403).json({ error: 'CORS policy disallowed this origin' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 3. Rate Limiting Note:
  // Vercel serverless functions are stateless per invocation. Production rate-limiting
  // (e.g., max 5 attempts per certificateId per 10 mins) requires an external store like Vercel KV or Upstash Redis.

  const { certificateId } = req.body || {};

  // 4. Server-Side Anti-Tamper & Format Validation
  if (!certificateId || typeof certificateId !== 'string') {
    return res.status(400).json({ error: 'certificateId is required' });
  }

  const CERT_ID_REGEX = /^[A-Z]{2,10}-\d{4}-\d{4}$/;
  if (!CERT_ID_REGEX.test(certificateId)) {
    return res.status(400).json({ error: 'Invalid certificateId format. Expected format: PREFIX-1234-5678' });
  }

  // Derive codePrefix server-side from validated certificateId
  const codePrefix = certificateId.split('-')[0];

  // 5. Server-Side Pricing Enforcement
  if (FREE_CODE_PREFIXES.includes(codePrefix)) {
    return res.status(400).json({ error: 'The C++ track is free of charge. No payment order is needed.' });
  }

  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: CERTIFICATE_PRICE_PAISE,
      currency: 'INR',
      receipt: `cert_${certificateId}`,
      notes: { certificateId, codePrefix },
    });

    return res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error('create-order error:', err);
    return res.status(500).json({ error: 'Could not create payment order' });
  }
}
