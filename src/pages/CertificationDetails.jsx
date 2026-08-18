import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  getCertificationById 
} from '../data/certifications';
import { isFreeTrack } from '../utils/pricing';
import { 
  getStoredUserName, 
  saveStoredUserName 
} from '../utils/storage';
import { 
  Award, 
  BookOpen, 
  AlertCircle, 
  ShieldCheck, 
  User,
  ArrowRight,
  ArrowLeft,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function CertificationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cert = getCertificationById(id);

  const [fullName, setFullName] = useState('');
  const [nameError, setNameError] = useState('');
  const [openModuleId, setOpenModuleId] = useState(1);

  useEffect(() => {
    const saved = getStoredUserName();
    if (saved) setFullName(saved);
  }, []);

  if (!cert) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-navy-900">Certification Track Not Found</h2>
        <p className="text-slate-600 text-sm">The course track you requested does not exist or has been updated.</p>
        <Link to="/certifications" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Courses</span>
        </Link>
      </div>
    );
  }

  const isActive = cert.status === 'active';

  const handleStartExam = (e) => {
    e?.preventDefault();
    const trimmed = fullName.trim();

    if (!trimmed) {
      setNameError('Please enter your candidate full name before launching the examination.');
      return;
    }

    if (trimmed.length < 2) {
      setNameError('Full name must be at least 2 characters long.');
      return;
    }

    setNameError('');
    saveStoredUserName(trimmed);
    navigate(`/assessment/${cert.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Link to="/certifications" className="hover:text-brand-600 transition-colors">
          Courses & Certifications
        </Link>
        <span>/</span>
        <span className="text-navy-900 font-medium">{cert.title}</span>
      </div>

      {/* Hero Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Course Overview */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              {cert.difficulty} Track
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{cert.rating || '4.9'} ({cert.reviewsCount || '3,420 reviews'})</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {cert.enrolledCount || '18,500+ Certified Graduates'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            {cert.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {cert.fullDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle">
              <span className="text-xs text-slate-500 font-medium block">Total Duration</span>
              <span className="text-base font-bold text-navy-900 mt-0.5 block">{cert.courseDuration || '2 Hours'}</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle">
              <span className="text-xs text-slate-500 font-medium block">Curriculum</span>
              <span className="text-base font-bold text-navy-900 mt-0.5 block">{cert.modules ? `${cert.modules.length} Modules` : '5 Modules'}</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle">
              <span className="text-xs text-slate-500 font-medium block">Certificate Fee</span>
              <span className={`text-base font-bold mt-0.5 block ${isFreeTrack(cert.codePrefix) ? 'text-emerald-600' : 'text-brand-600'}`}>
                {isFreeTrack(cert.codePrefix) ? 'Free' : '₹49'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle">
              <span className="text-xs text-slate-500 font-medium block">Credential</span>
              <span className="text-base font-bold text-emerald-600 mt-0.5 block">Verifiable PDF</span>
            </div>

          </div>

        </div>

        {/* Right Column: Enrollment Card */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 space-y-5">
            
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-navy-900">Enroll & Begin Exam</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    isFreeTrack(cert.codePrefix) ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {isFreeTrack(cert.codePrefix) ? 'Free Track' : '₹49 Fee'}
                  </span>
                </div>
                <span className="text-xs text-slate-500 block">Official Certification Portal</span>
              </div>
            </div>

            {isActive ? (
              <form onSubmit={handleStartExam} className="space-y-4">
                
                {/* Candidate Name Input Field */}
                <div>
                  <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Candidate Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="studentName"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (nameError) setNameError('');
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 focus:bg-white text-navy-900 transition-all ${
                        nameError 
                          ? 'border-rose-300 focus:ring-rose-400 bg-rose-50/40' 
                          : 'border-slate-300 focus:ring-brand-500'
                      }`}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-normal">
                    This name will appear on your official certificate of achievement.
                  </p>
                  {nameError && (
                    <p className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{nameError}</span>
                    </p>
                  )}
                </div>

                {/* Official Credential Validation & Registry Specifications */}
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2 font-mono text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-bold uppercase text-[10px]">Credential Validation Format</span>
                    <span className="font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                      CC-2026-{cert.codePrefix || 'CERT'}-XXXX
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-sans pt-1 border-t border-slate-200/80">
                    <span className="text-slate-500">Registry Status:</span>
                    <span className="font-bold text-emerald-600">Publicly Verifiable</span>
                  </div>
                </div>

                {/* Start Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 transition-all shadow-md"
                >
                  <span>Start Certification Examination</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            ) : (
              <div className="space-y-4 text-center py-4">
                <p className="text-sm text-slate-600">
                  This track is currently enrolling for the next cohort. You can launch the C++ Systems Programming track today.
                </p>
                <Link
                  to="/certifications/cpp-fundamentals"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition-colors w-full"
                >
                  <span>Take C++ Certification Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Credibility Note */}
            <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
              <span>Official evaluation engine with anti-tamper verification hashing.</span>
            </div>

          </div>
        </div>

      </div>

      {/* Course Curriculum & Syllabus Accordion */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
            Course Curriculum & Syllabus
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Review the 2-hour structured modules covered in this software engineering certification track:
          </p>
        </div>

        {cert.modules && cert.modules.length > 0 && (
          <div className="space-y-3 max-w-4xl">
            {cert.modules.map((mod) => {
              const isOpen = openModuleId === mod.id;
              return (
                <div 
                  key={mod.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-subtle transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenModuleId(isOpen ? null : mod.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-xs">
                        {mod.id}
                      </div>
                      <h3 className="font-bold text-sm text-navy-900">
                        {mod.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline">{mod.duration}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                      {mod.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Skills You Will Master Grid */}
      <section className="space-y-6 pt-6 border-t border-slate-200">
        <div>
          <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
            Key Engineering Competencies
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Skills evaluated in the comprehensive examination:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cert.topics.map((topic, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-sm text-navy-900">
                  {typeof topic === 'string' ? topic : topic.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-8">
                {typeof topic === 'object' && topic.description ? topic.description : 'Core concepts, syntax rules, and problem-solving patterns.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Prerequisites & Audience */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
          <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-brand-600" />
            <span>Course Prerequisites</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            {cert.prerequisites.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-subtle space-y-3">
          <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
            <User className="w-4 h-4 text-brand-600" />
            <span>Target Audience</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {cert.audience}
          </p>
        </div>

      </section>

    </div>
  );
}
