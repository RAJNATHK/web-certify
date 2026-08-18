// Vercel Serverless Function: /api/authorize-download
// Re-verifies payment authorization before PDF generation to prevent client-side DevTools bypasses.

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
  // 1. Env Var Guard
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
  // Persistent rate limiting requires external store like Vercel KV or Upstash Redis.

  const { certificateId, paymentId, unlockToken } = req.body || {};

  // 4. Format Validation
  if (!certificateId || typeof certificateId !== 'string') {
    return res.status(400).json({ error: 'certificateId is required' });
  }

  const CERT_ID_REGEX = /^[A-Z]{2,10}-\d{4}-\d{4}$/;
  if (!CERT_ID_REGEX.test(certificateId)) {
    return res.status(400).json({ error: 'Invalid certificateId format. Expected format: PREFIX-1234-5678' });
  }

  // Derive codePrefix server-side from validated string
  const codePrefix = certificateId.split('-')[0];

  // 5. Free Track Bypass Authorization
  if (FREE_CODE_PREFIXES.includes(codePrefix)) {
    return res.status(200).json({ authorized: true, reason: 'free_track' });
  }

  // 6. Paid Track Token Authorization Re-Check
  if (!paymentId || !unlockToken) {
    return res.status(200).json({ authorized: false, error: 'Missing payment parameters for paid track' });
  }

  const expectedToken = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${paymentId}:unlock`)
    .digest('hex')
    .slice(0, 24);

  if (expectedToken === unlockToken) {
    return res.status(200).json({ authorized: true, reason: 'paid_verified' });
  }

  return res.status(200).json({ authorized: false, error: 'Invalid unlock token' });
}
