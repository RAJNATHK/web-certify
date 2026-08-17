import React, { useState } from 'react';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';
import { Search, BookOpen } from 'lucide-react';

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');

  const filtered = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterLevel === 'all') return matchesSearch;
    if (filterLevel === 'active') return matchesSearch && cert.status === 'active';
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Academy Certification Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Software Engineering Course Tracks
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Select a 2-hour structured software engineering track below. Review the curriculum syllabus, master key competencies, and pass the evaluation examination to earn your verifiable credential.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-subtle">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search certification tracks (e.g. C++, Java, Python, SQL, JS)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-navy-900 placeholder:text-slate-400"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterLevel('all')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-colors ${
              filterLevel === 'all'
                ? 'bg-navy-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Tracks ({certifications.length})
          </button>
          
          <button
            onClick={() => setFilterLevel('active')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-colors ${
              filterLevel === 'active'
                ? 'bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Active & Available ({certifications.filter(c => c.status === 'active').length})
          </button>
        </div>

      </div>

      {/* Course Cards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cert => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <p className="text-slate-600 text-sm">No software engineering tracks matched your search "{searchTerm}".</p>
          <button
            onClick={() => { setSearchTerm(''); setFilterLevel('all'); }}
            className="text-xs font-bold text-brand-600 hover:underline"
          >
            Reset Catalog Search
          </button>
        </div>
      )}

    </div>
  );
}
