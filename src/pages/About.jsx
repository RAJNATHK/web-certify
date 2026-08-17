import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Code2
} from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
          <span>About CertifyCode Academy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Pioneering Software Engineering Standards
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          CertifyCode Academy delivers structured 2-hour software engineering certification tracks designed to evaluate technical mastery and issue verifiable digital credentials.
        </p>
      </div>

      {/* Mission & Purpose Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Code2 className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-navy-900">
            Our Academic Mission
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            CertifyCode Academy was founded to bridge the gap between academic theory and industry engineering standards. We provide self-paced, structured 2-hour software certification tracks where candidates master modular concepts and prove competence under timed evaluation.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every course syllabus and examination item is designed to reflect modern systems programming and architecture practices.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-subtle p-8 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-navy-900">
            Verifiable Digital Registry
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            All issued credentials include a unique Certificate ID registered in our public registry. Employers, recruiters, and engineering managers can verify candidate completion and score metrics at any time.
          </p>
        </div>

      </div>

      {/* Core Principles */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-navy-900 text-center">
          Our Educational Benchmarks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-navy-900">Modular Learning</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Course modules break complex software architectures into digestible 20-35 minute study blocks.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-navy-900">Comprehensive Feedback</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In-depth explanations accompany every examination item for complete conceptual mastery.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-navy-900">Shareable Digital PDF</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              High-resolution Landscape A4 certificates suitable for LinkedIn, resume attachment, and print.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Earn Your Credential?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Enroll in our C++ Systems Programming track today and validate your engineering skills.
        </p>
        <div className="pt-2">
          <Link
            to="/certifications/cpp-fundamentals"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold shadow-lg transition-all"
          >
            <span>Enroll in C++ Track</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
