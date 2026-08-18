// Vercel Serverless Function: /api/razorpay-webhook
// Verified webhook endpoint for Razorpay payment events (payment.captured).

import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Env Var Safety Check
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('Server error: RAZORPAY_WEBHOOK_SECRET environment variable is missing');
    return res.status(500).json({ error: 'Server misconfigured' });
  }

  const signature = req.headers['x-razorpay-signature'];
  if (!signature) {
    return res.status(400).json({ error: 'Missing X-Razorpay-Signature header' });
  }

  try {
    // 2. Compute HMAC SHA-256 signature against request body
    const bodyPayload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(bodyPayload)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.warn('Webhook signature mismatch detected');
      return res.status(400).json({ error: 'Invalid webhook signature' });
    }

    const event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // 3. Process & Log Verified Event
    // NOTE FOR PRODUCTION: A production deployment should persist this verified event
    // to a database (e.g., Vercel KV, Supabase, or MongoDB Atlas free tier) to maintain an
    // authoritative server-side record of paid certificates and prevent refund fraud.
    if (event.event === 'payment.captured') {
      const paymentEntity = event.payload?.payment?.entity;
      console.log('Verified Razorpay Payment Captured Event:', {
        paymentId: paymentEntity?.id,
        orderId: paymentEntity?.order_id,
        amount: paymentEntity?.amount,
        certificateId: paymentEntity?.notes?.certificateId,
        capturedAt: paymentEntity?.created_at,
      });
    }

    return res.status(200).json({ status: 'ok', received: true });
  } catch (err) {
    console.error('Webhook processing error:', err);
    return res.status(400).json({ error: 'Webhook processing failed' });
  }
}
