import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getCertificateRecordById } from '../utils/storage';
import { ShieldCheck, Search, Award, CheckCircle2, XCircle, ArrowRight, Calendar, User, FileText } from 'lucide-react';

export default function Verify() {
  const [searchParams] = useSearchParams();
  const initialId = searchParams.get('id') || '';
  const [certificateId, setCertificateId] = useState(initialId);
  const [searchedRecord, setSearchedRecord] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = useCallback((idToSearch) => {
    const target = idToSearch || certificateId;
    if (!target.trim()) return;

    const record = getCertificateRecordById(target.trim());
    setSearchedRecord(record);
    setHasSearched(true);
  }, [certificateId]);

  useEffect(() => {
    if (initialId) {
      handleVerify(initialId);
    }
  }, [initialId, handleVerify]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerify(certificateId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-brand-600" />
          <span>Official Credential Registry</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Verify a Certificate
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Enter the unique Certificate ID to validate candidate completion status, issue date, and score records.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-6 sm:p-8 space-y-4 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              placeholder="e.g. CPP-9182-4029"
              className="w-full pl-11 pr-4 py-3 text-sm font-mono bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-navy-900 transition-all uppercase placeholder:normal-case placeholder:font-sans"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm shadow-md transition-all flex-shrink-0"
          >
            <span>Verify Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-xs text-slate-500 text-center">
          Certificate IDs are displayed on the bottom corner of all issued PDF credentials.
        </p>
      </div>

      {/* Results Display */}
      {hasSearched && (
        <div className="max-w-2xl mx-auto animate-fadeIn">
          {searchedRecord ? (
            <div className="bg-white rounded-2xl border border-emerald-200 shadow-card p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0 opacity-50" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      Authentic Credential Verified
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 mt-1">
                      {searchedRecord.certificationTitle}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                    <span className="text-slate-500 font-medium flex items-center gap-1.5">
                      <User className="w-4 h-4 text-brand-600" />
                      Candidate Name:
                    </span>
                    <span className="font-bold text-navy-900 text-base block">{searchedRecord.studentName}</span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                    <span className="text-slate-500 font-medium flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-brand-600" />
                      Score Achieved:
                    </span>
                    <span className="font-bold text-emerald-600 text-base block">
                      {searchedRecord.score}/50 ({searchedRecord.percentage}%)
                    </span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                    <span className="text-slate-500 font-medium flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-600" />
                      Issue Date:
                    </span>
                    <span className="font-semibold text-navy-900 block">
                      {new Date(searchedRecord.issueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                    <span className="text-slate-500 font-medium flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-brand-600" />
                      Certificate ID:
                    </span>
                    <code className="font-mono font-bold text-navy-900 block">{searchedRecord.certificateId}</code>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    to="/certificate"
                    state={searchedRecord}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                  >
                    <span>View Digital Certificate Preview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900">Credential Not Found</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                No certificate record was found matching ID "<strong>{certificateId}</strong>". Please check the ID for typos and try again.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
