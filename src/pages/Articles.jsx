import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';

export default function Articles() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Knowledge Base & Study Guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Programming Articles & Exam Guides
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive study guides, syntax roadmaps, and technical interview questions to help you prepare for assessments and advance your coding fundamentals.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-xl border border-slate-200 shadow-subtle p-6 flex flex-col justify-between hover:shadow-card-hover transition-all"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <span className="font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-navy-900 mb-2 leading-snug">
                <Link to={`/articles/${article.slug}`} className="hover:text-brand-600 transition-colors">
                  {article.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                {article.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {article.publishedDate}
              </span>
              <Link
                to={`/articles/${article.slug}`}
                className="font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
              >
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
