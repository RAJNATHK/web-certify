import React, { useState, useEffect } from 'react';
import { Lock, IndianRupee, Loader2 } from 'lucide-react';

const RAZORPAY_SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT_SRC;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function unlockKey(certificateId) {
  return `cert_unlock_${certificateId}`;
}

/**
 * Wraps download/print actions behind a ₹49 Razorpay payment.
 * Once a certificateId is unlocked, the token is remembered in this browser
 * (localStorage) so the user isn't charged again to re-download the same cert.
 */
export default function PaymentGate({ certificateId, studentName, onUnlocked }) {
  const [unlocked, setUnlocked] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(unlockKey(certificateId));
    if (saved) {
      setUnlocked(true);
      onUnlocked?.();
    }
  }, [certificateId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePay = async () => {
    setError('');
    setPaying(true);
    try {
      const scriptOk = await loadRazorpayScript();
      if (!scriptOk) throw new Error('Could not load payment SDK. Check your connection.');

      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId }),
      });
      if (!orderRes.ok) throw new Error('Could not start payment. Please try again.');
      const order = await orderRes.json();

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: 'CertifyCode Academy', // <-- shown to the payer, not your personal name
        description: `Certificate Download — ${certificateId}`,
        prefill: { name: studentName },
        theme: { color: '#2563EB' },
        handler: async (response) => {
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...response, certificateId }),
            });
            const verifyData = await verifyRes.json();
            if (verifyData.verified) {
              const lockRecord = {
                certificateId,
                paymentId: verifyData.paymentId,
                unlockToken: verifyData.unlockToken
              };
              localStorage.setItem(unlockKey(certificateId), JSON.stringify(lockRecord));
              setUnlocked(true);
              onUnlocked?.();
            } else {
              setError('Payment could not be verified. If money was deducted, it will be auto-refunded within 5-7 days — contact support with your payment ID.');
            }
          } catch {
            setError('Payment succeeded but verification failed. Contact support with your payment ID: ' + response.razorpay_payment_id);
          }
        },
        modal: {
          ondismiss: () => setPaying(false),
        },
      });

      rzp.on('payment.failed', (resp) => {
        setError(resp.error?.description || 'Payment failed. Please try again.');
        setPaying(false);
      });

      rzp.open();
    } catch (e) {
      setError(e.message || 'Something went wrong.');
    } finally {
      setPaying(false);
    }
  };

  if (unlocked) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-subtle p-6 sm:p-8 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center mx-auto">
        <Lock className="w-5 h-5 text-brand-600" />
      </div>
      <h3 className="text-lg font-bold text-navy-900">Unlock Your Certificate</h3>
      <p className="text-sm text-slate-600 max-w-md mx-auto">
        Your assessment is scored and your credential is ready. Pay a one-time fee to download
        the official PDF and enable public verification.
      </p>
      <div className="flex items-center justify-center gap-1 text-2xl font-extrabold text-navy-900">
        <IndianRupee className="w-5 h-5" />
        <span>49</span>
      </div>
      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 max-w-md mx-auto">
          {error}
        </p>
      )}
      <button
        onClick={handlePay}
        disabled={paying}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold transition-all shadow-md disabled:opacity-60"
      >
        {paying ? <Loader2 className="w-4 h-4 animate-spin" /> : <IndianRupee className="w-4 h-4" />}
        <span>{paying ? 'Opening secure checkout...' : 'Pay ₹49 & Unlock'}</span>
      </button>
      <p className="text-[11px] text-slate-400">Secured by Razorpay · UPI, cards & netbanking accepted</p>
    </div>
  );
}
