import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ArrowRight, 
  ShieldCheck, 
  Check,
  Star,
  BookOpen,
  Search,
  CheckCircle2,
  Globe,
  FileCheck,
  Users
} from 'lucide-react';
import { certifications } from '../data/certifications';
import { articles } from '../data/articles';
import CertificationCard from '../components/CertificationCard';

export default function Home() {
  const activeCert = certifications.find(c => c.id === 'cpp-fundamentals');

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Professional Software Engineering Academy</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Validate Your Skills with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-300">
                  Industry-Grade Certifications
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Advance your software career with structured 2-hour course tracks. Master core systems concepts and demonstrate your expertise through rigorous technical evaluation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/certifications"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-brand-600 rounded-xl shadow-lg hover:bg-brand-500 active:bg-brand-700 transition-all"
                >
                  <span>Explore Course Tracks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/verify"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-navy-800/80 border border-navy-700 rounded-xl hover:bg-navy-700 transition-all"
                >
                  <Search className="w-4 h-4 text-slate-400" />
                  <span>Verify a Credential</span>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-6 text-xs text-slate-400 font-medium border-t border-navy-800">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-white font-bold">4.9 / 5.0</span>
                  <span>Average Rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-brand-400" />
                  <span>Over 85,000+ Certified Graduates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  <span>Shareable Digital PDF Credentials</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Authentic Certificate Demo Preview */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Glowing Background Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-brand-500/30 to-indigo-500/30 rounded-3xl blur-xl opacity-40" />

                {/* Main Certificate Demo Card */}
                <div className="relative rounded-3xl bg-white text-navy-900 border-2 border-amber-500/70 shadow-2xl p-6 sm:p-7 space-y-4 overflow-hidden">
                  
                  {/* Decorative Security Corner Badges */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-amber-500 rounded-full shadow-sm" />

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center text-amber-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-extrabold text-xs text-navy-900 block leading-tight uppercase tracking-wider">CertifyCode Academy</span>
                        <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest block">Software Engineering Institute</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verifiable Credential</span>
                    </span>
                  </div>

                  {/* Certificate Demo Banner */}
                  <div className="text-center py-2 space-y-2 bg-gradient-to-b from-slate-50 to-white rounded-xl p-4 border border-slate-200/80">
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                      Official Certificate Demo
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-navy-900 uppercase tracking-tight">
                      Certificate of Achievement
                    </h3>
                    <p className="text-[11px] text-slate-500 italic">
                      Conferred upon candidate completion of the 2-hour software engineering curriculum and evaluation
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-bold text-brand-700 block">
                        C++ Systems Programming & Memory Architecture
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-2 border-t border-slate-200">
                      <span>Verification Registry Status: Active</span>
                      <span>Public Registry Lookup</span>
                    </div>
                  </div>

                  {/* Official Credential Validation Box */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2 font-mono text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-bold uppercase text-[10px]">Credential Validation No.</span>
                      <span className="font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-subtle">
                        CC-2026-CPP-91824
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-sans pt-1 border-t border-slate-200/80">
                      <span className="text-slate-500">Registry Authentication:</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Verifiable Digital Record</span>
                      </span>
                    </div>
                  </div>

                  {/* Quick Start Link */}
                  {activeCert && (
                    <Link
                      to={`/certifications/${activeCert.id}`}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white text-xs font-bold transition-all shadow-md"
                    >
                      <span>Enroll in C++ Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ACADEMY BENCHMARKS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-navy-900">2-Hour Structured Tracks</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Focused modules covering language syntax, memory management, and OOP.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-navy-900">Verifiable Credentials</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Unique Certificate ID verified instantly through our global registry.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-navy-900">Hands-on Evaluation</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Rigorous 50-question comprehensive exam evaluating real technical skills.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-navy-900">Career-Ready Proof</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                High-resolution Landscape A4 certificates suitable for resume & LinkedIn.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FEATURED CERTIFICATION COURSES CATALOG */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Featured Certification Tracks
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Select a software engineering course to review curriculum modules and take the examination.
            </p>
          </div>
          <Link
            to="/certifications"
            className="text-sm font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
          >
            <span>Browse All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* CERTIFICATE VERIFICATION SEARCH BAR ON HOME */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-brand-300 text-xs font-semibold">
              <Globe className="w-4 h-4 text-brand-400" />
              <span>Public Verification Portal</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Verify an Issued Certificate
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Employers, recruiters, and academic institutions can verify any CertifyCode credential instantly by entering the Certificate ID found on the digital document.
            </p>

            <div className="pt-2">
              <Link
                to="/verify"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold shadow-lg transition-all"
              >
                <Search className="w-4 h-4" />
                <span>Go to Verification Registry</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARTICLES & LEARNING GUIDES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
              Engineering Guides & Resources
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Curated study materials and architecture roadmaps to assist in exam preparation.
            </p>
          </div>
          <Link
            to="/articles"
            className="text-sm font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
          >
            <span>Explore All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-subtle p-6 flex flex-col justify-between hover:shadow-card-hover transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-base font-bold text-navy-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{article.publishedDate}</span>
                <Link
                  to={`/articles/${article.slug}`}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
