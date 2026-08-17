import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Certify<span className="text-brand-400">Code</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Learn. Assess. Certify. Free, merit-based online programming assessments with verifiable certificates of achievement.
            </p>
            <div className="flex items-center gap-3 pt-1 text-slate-400">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center hover:text-white hover:bg-navy-700 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center hover:text-white hover:bg-navy-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/certifications" className="hover:text-white transition-colors">
                  All Certifications
                </Link>
              </li>
              <li>
                <Link to="/verify" className="hover:text-white transition-colors">
                  Verify Credential
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-white transition-colors">
                  Articles & Guides
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Platform
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Certifications
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/certifications/cpp-fundamentals" className="text-brand-400 font-medium hover:underline flex items-center gap-1.5">
                  <span>C++ Fundamentals</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300">Active</span>
                </Link>
              </li>
              <li className="text-slate-400 flex items-center justify-between">
                <span>Java Fundamentals</span>
                <span className="text-[10px] text-slate-400">Soon</span>
              </li>
              <li className="text-slate-400 flex items-center justify-between">
                <span>Python Fundamentals</span>
                <span className="text-[10px] text-slate-400">Soon</span>
              </li>
              <li className="text-slate-400 flex items-center justify-between">
                <span>SQL Fundamentals</span>
                <span className="text-[10px] text-slate-400">Soon</span>
              </li>
              <li className="text-slate-400 flex items-center justify-between">
                <span>JavaScript Fundamentals</span>
                <span className="text-[10px] text-slate-400">Soon</span>
              </li>
              <li className="text-slate-400 flex items-center justify-between">
                <span>HTML & CSS Fundamentals</span>
                <span className="text-[10px] text-slate-400">Soon</span>
              </li>
            </ul>
          </div>

          {/* Transparency & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Disclosure & Legal
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Certificates issued by CertifyCode validate assessment completion and knowledge demonstration. They are not accredited by universities or government bodies.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400 pt-1">
              <li>
                <Link to="/legal" className="hover:text-slate-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-slate-200 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-slate-200 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} CertifyCode. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Free Client-Side Assessments
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
