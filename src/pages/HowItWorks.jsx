import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck
} from 'lucide-react';
import { AdBanner } from '../components/AdPlaceholder';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Certification Track',
      description: 'Select from our catalog of programming tracks, such as C++ Programming Fundamentals. Review the syllabus, prerequisites, and key competencies covered in the assessment.'
    },
    {
      num: '02',
      title: 'Enter Candidate Full Name',
      description: 'Provide your name as you would like it to appear on your formal certificate. Your name is stored securely in your local browser session for instant certificate generation.'
    },
    {
      num: '03',
      title: 'Complete the 50-Question Assessment',
      description: 'Take the timed 45-minute examination. The assessment tests syntax, memory handling, object-oriented design, and algorithms across 20 Easy, 20 Medium, and 10 Moderate questions.'
    },
    {
      num: '04',
      title: 'Score 70% or Higher (35/50)',
      description: 'Upon submission, your responses are scored immediately in your browser. If you score 35 or above, you immediately unlock certificate generation.'
    },
    {
      num: '05',
      title: 'Download & Share Your PDF Certificate',
      description: 'Download your high-resolution, vector-drawn Landscape A4 PDF certificate complete with a unique Certificate ID, issue date, and performance grade to add to your resume and LinkedIn profile.'
    },
    {
      num: '06',
      title: 'Review In-Depth Explanations or Retake',
      description: 'Inspect our question-by-question answer review with comprehensive conceptual explanations. If you did not pass, you can retake the assessment as many times as needed.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Platform Overview</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          How CertifyCode Works
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Our mission is to provide transparent, accessible, and merit-based programming assessments for self-taught developers, students, and engineers worldwide.
        </p>
      </div>

      {/* Step by Step Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-subtle p-6 space-y-3 relative">
            <span className="text-xs font-extrabold text-brand-600 tracking-wider">
              STEP {step.num}
            </span>
            <h3 className="text-lg font-bold text-navy-900">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Assessment Integrity & Transparency Banner */}
      <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-brand-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Honest Credential Disclosure</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Clear, Credible Credentials
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Certificates issued by CertifyCode certify that you completed our rigorous 50-question online technical assessment. They are not accredited degrees from universities or governmental institutions, and we do not make inflated marketing claims. They serve as authentic, verifiable proof of your foundational programming competence.
          </p>

          <div className="pt-2">
            <Link
              to="/certifications/cpp-fundamentals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors shadow-md"
            >
              <span>Take the C++ Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Clean Ad Placement */}
      <AdBanner slotId="how-it-works-banner" />

    </div>
  );
}
