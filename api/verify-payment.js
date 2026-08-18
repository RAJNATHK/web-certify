// Vercel Serverless Function: /api/verify-payment
// Verifies HMAC signature sent by Razorpay after checkout and issues unlock token.

import crypto from 'crypto';

// keep in sync with src/utils/pricing.js
const FREE_CODE_PREFIXES = ['CPP'];

function isAllowedOrigin(origin) {
  if (!origin) return true;
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  const allowLocalhost = process.env.ALLOW_LOCALHOST === 'true';

  if (allowedOrigin && origin === allowedOrigin) return true;
  if (allowLocalhost && (/^https?:\/\/localhost(:\d+)?$/i.test(origin) || /^https?:\/\/127\.0\.0\.1(:\d+)?$/i.test(origin))) {
    return true;
  }
  return !allowedOrigin && !allowLocalhost;
}

export default async function handler(req, res) {
  // 1. Env var safety checks
  if (!process.env.RAZORPAY_KEY_SECRET) {
    console.error('Server error: RAZORPAY_KEY_SECRET missing');
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
  // Persistent rate limiting requires external KV store (e.g. Vercel KV or Upstash Redis).

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    certificateId,
  } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ error: 'Missing payment fields' });
  }

  if (certificateId) {
    const CERT_ID_REGEX = /^[A-Z]{2,10}-\d{4}-\d{4}$/;
    if (!CERT_ID_REGEX.test(certificateId)) {
      return res.status(400).json({ error: 'Invalid certificateId format' });
    }
  }

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  const isValid = expectedSignature === razorpay_signature;

  if (!isValid) {
    return res.status(400).json({ verified: false, error: 'Invalid signature' });
  }

  // Issue short-lived HMAC token for certificate download authorization
  const unlockToken = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_payment_id}:unlock`)
    .digest('hex')
    .slice(0, 24);

  return res.status(200).json({
    verified: true,
    certificateId: certificateId || null,
    paymentId: razorpay_payment_id,
    unlockToken
  });
}
