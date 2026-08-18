import React, { useState } from 'react';

export default function Legal() {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
          Legal & Privacy Policies
        </h1>
        <p className="text-sm text-slate-500">
          Last updated: January 2026
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-4">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'privacy'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-navy-900'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab('terms')}
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'terms'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-navy-900'
          }`}
        >
          Terms of Use
        </button>
        <button
          onClick={() => setActiveTab('cookies')}
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'cookies'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-navy-900'
          }`}
        >
          Cookie Policy
        </button>
        <button
          onClick={() => setActiveTab('payments')}
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'payments'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-navy-900'
          }`}
        >
          Payments & Refunds
        </button>
      </div>

      {/* Content */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-subtle space-y-6 text-sm text-slate-700 leading-relaxed">
        
        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy-900">1. Privacy Overview</h2>
            <p>
              CertifyCode operates entirely on client-side technology for assessment scoring and PDF certificate generation. We do not store your name or assessment answers on any central server database in this version.
            </p>

            <h2 className="text-lg font-bold text-navy-900">2. Local Storage Usage</h2>
            <p>
              Your candidate full name and active assessment progress are temporarily cached in your web browser's <code>localStorage</code> solely to render your certificate and prevent progress loss during browser refreshes. You can clear this data at any time through your browser settings.
            </p>

            <h2 className="text-lg font-bold text-navy-900">3. Advertising & Analytics</h2>
            <p>
              To maintain the free availability of all assessments and certificates, our platform may display standard non-intrusive advertisements served by third-party advertising partners (such as Adsterra or Monetag). These partners may use cookies to deliver contextually relevant advertisements according to standard industry privacy practices.
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy-900">1. Nature of Certificates</h2>
            <p>
              Certificates issued by CertifyCode certify individual completion and performance on our 50-question online technical assessment. They are not accredited degrees or licenses from universities, government authorities, or third-party certifying organizations.
            </p>

            <h2 className="text-lg font-bold text-navy-900">2. Assessment Integrity</h2>
            <p>
              Candidates are encouraged to complete assessments independently under timed conditions to accurately gauge their individual technical competence.
            </p>

            <h2 className="text-lg font-bold text-navy-900">3. Limitation of Liability</h2>
            <p>
              The platform and all educational materials are provided "as is" without warranty of any kind. CertifyCode does not guarantee employment outcomes or third-party acceptance of credentials.
            </p>
          </div>
        )}

        {activeTab === 'cookies' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy-900">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by web browsers. CertifyCode uses minimal essential cookies and browser local storage for core functionality (e.g. tracking exam state and candidate name during the assessment).
            </p>

            <h2 className="text-lg font-bold text-navy-900">2. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Disabling cookies will not affect your ability to take assessments and download certificates.
            </p>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-navy-900">1. Pricing Model & Fees</h2>
            <p>
              The C++ Systems Programming & Memory Architecture track is currently offered free of charge; all other certification tracks require the ₹49 one-time download fee described above.
            </p>

            <h2 className="text-lg font-bold text-navy-900">2. Secure Checkout</h2>
            <p>
              All payments for paid certification tracks are securely processed through Razorpay. We do not store financial account credentials, credit card details, or UPI PINs on our servers.
            </p>

            <h2 className="text-lg font-bold text-navy-900">3. Refund Policy</h2>
            <p>
              If a transaction fails or money is deducted without issuing an unlock credential, Razorpay automatically initiates a refund to your original payment method within 5 to 7 business days. You can also contact support with your Payment ID for manual assistance.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
