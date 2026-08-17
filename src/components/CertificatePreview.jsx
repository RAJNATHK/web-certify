import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Printer, Copy, Check, Award, ShieldCheck, ExternalLink } from 'lucide-react';
import { downloadCertificatePDF, formatCertificateDate } from '../utils/certificate';

export default function CertificatePreview({
  studentName,
  certificationTitle,
  score,
  totalQuestions = 50,
  percentage,
  issueDate = new Date(),
  certificateId,
  codePrefix = 'CPP'
}) {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const formattedDate = formatCertificateDate(issueDate);

  const handleDownload = () => {
    setDownloading(true);
    try {
      downloadCertificatePDF({
        studentName,
        certificationTitle,
        score,
        totalQuestions,
        percentage,
        issueDate,
        certificateId,
        codePrefix
      });
    } catch (e) {
      console.error('Download error:', e);
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificateId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Certificate Frame (Landscape Preview) */}
      <div 
        id="certificate-print-area"
        className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border-[10px] border-navy-950 p-4 sm:p-8 relative overflow-hidden"
        style={{ aspectRatio: '1.414 / 1' }}
      >
        {/* Inner Gold & Navy Double Border Accent */}
        <div className="w-full h-full border-2 border-amber-500/80 rounded-xl p-4 sm:p-8 flex flex-col justify-between relative bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70">
          
          {/* Decorative Security Corner Accents */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-amber-500 rounded-full shadow-sm" />
          <div className="absolute top-2 right-2 w-3 h-3 bg-amber-500 rounded-full shadow-sm" />
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-amber-500 rounded-full shadow-sm" />
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-amber-500 rounded-full shadow-sm" />

          {/* Top Brand Header */}
          <div className="text-center pt-2">
            <div className="inline-flex items-center gap-2 justify-center text-navy-900 font-extrabold tracking-widest text-sm sm:text-base uppercase">
              <Award className="w-6 h-6 text-brand-600" />
              <span>CERTIFYCODE ACADEMY</span>
            </div>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
              Global Institute of Software Engineering
            </p>
            <div className="w-28 h-0.5 bg-amber-400 mx-auto mt-2" />
          </div>

          {/* Middle Content */}
          <div className="text-center my-auto py-2 space-y-2 sm:space-y-3">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-navy-900 uppercase">
              CERTIFICATE OF ACHIEVEMENT
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-500 italic">
              This digital credential is proudly conferred upon
            </p>

            {/* Recipient Name */}
            <div className="py-1">
              <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-navy-900 border-b-2 border-amber-500/60 pb-1 px-6 inline-block tracking-tight">
                {studentName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              for successfully completing the 2-Hour curriculum modules and achieving passing marks on the comprehensive examination in
            </p>

            <div className="text-base sm:text-xl md:text-2xl font-extrabold text-brand-600 tracking-tight">
              {certificationTitle}
            </div>

            {/* Performance Ribbon */}
            <div className="inline-flex items-center gap-4 sm:gap-8 px-4 sm:px-6 py-2 bg-slate-50 border border-slate-200 rounded-xl text-center mx-auto shadow-subtle">
              <div>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase block">Score Evaluation</span>
                <span className="text-xs sm:text-sm font-bold text-navy-900">{score} / {totalQuestions}</span>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-8">
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase block">Grade Level</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-600">{percentage}% (Passed)</span>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-8">
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase block">Verification Standard</span>
                <span className="text-xs sm:text-sm font-bold text-navy-900">Comprehensive Exam</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Signatures & Metadata */}
          <div className="pt-3 border-t border-slate-200 grid grid-cols-3 items-end text-left text-xs">
            
            {/* Left: Metadata */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Issuance Details</span>
              <p className="text-[11px] sm:text-xs font-medium text-slate-700">Issued: {formattedDate}</p>
              <p className="text-[11px] sm:text-xs font-mono font-bold text-navy-900">ID: {certificateId}</p>
            </div>

            {/* Center: Official Seal Emblem */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-amber-500 bg-amber-50 flex flex-col items-center justify-center p-1 shadow-md">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                <span className="text-[7px] font-bold uppercase text-amber-700 tracking-tighter">OFFICIAL SEAL</span>
              </div>
            </div>

            {/* Right: Authorized Signature */}
            <div className="text-right space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Academic Evaluation</span>
              <div className="inline-block border-b border-slate-400 pb-0.5 text-navy-900 font-serif italic text-xs sm:text-sm font-bold">
                Director of Technical Assessment
              </div>
              <p className="text-[10px] text-slate-500">CertifyCode Academic Board</p>
            </div>

          </div>

          {/* Verification Footer */}
          <div className="text-center pt-2 text-[9px] text-slate-400 font-mono">
            Verify authenticity at certifycode.org/verify?id={certificateId}
          </div>

        </div>
      </div>

      {/* Action Controls Bar */}
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-subtle">
        
        {/* Certificate ID Pill & Copy */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Certificate ID:</span>
          <code className="text-xs font-mono font-bold text-navy-900 bg-slate-100 px-2.5 py-1 rounded-lg">
            {certificateId}
          </code>
          <button
            onClick={handleCopyId}
            className="p-1.5 rounded-lg text-slate-500 hover:text-navy-900 hover:bg-slate-100 transition-colors"
            title="Copy Certificate ID"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Verification & Export Actions */}
        <div className="flex items-center gap-3">
          <Link
            to={`/verify?id=${certificateId}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            <span>Verify Online</span>
          </Link>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold transition-all shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? 'Generating PDF...' : 'Download PDF Certificate'}</span>
          </button>
        </div>

      </div>

    </div>
  );
}
