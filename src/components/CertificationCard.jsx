import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, BookOpen } from 'lucide-react';

export default function CertificationCard({ cert }) {
  const isActive = cert.status === 'active';

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-subtle transition-all duration-200 hover:shadow-card-hover hover:border-brand-300">
      
      <div>
        {/* Top Header: Category Badge & Rating */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-brand-600 transition-colors">
              {cert.badge}
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              {cert.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{cert.rating || '4.9'}</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-lg font-bold text-navy-900 tracking-tight mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
          {cert.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-5">
          {cert.shortDescription}
        </p>

        {/* Metadata Grid (Duration, Modules, Enrolled) */}
        <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 mb-5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
            <span className="truncate font-medium">{cert.courseDuration || '2 Hours'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
            <span className="truncate font-medium">{cert.modules ? `${cert.modules.length} Modules` : '5 Modules'}</span>
          </div>
        </div>

        {/* Skills Covered Tags */}
        {cert.topics && cert.topics.length > 0 && (
          <div className="mb-6">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Skills You'll Master
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cert.topics.slice(0, 3).map((t, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                >
                  {typeof t === 'string' ? t : t.title}
                </span>
              ))}
              {cert.topics.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-500 font-medium">
                  +{cert.topics.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action CTA & Official Validation Code */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200/80">
          ID: CC-2026-{cert.codePrefix || 'CERT'}
        </span>

        {isActive ? (
          <Link
            to={`/certifications/${cert.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 transition-all shadow-sm"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <Link
            to={`/certifications/${cert.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </Link>
        )}
      </div>

    </div>
  );
}
