import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CertificatePreview from '../components/CertificatePreview';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText
} from 'lucide-react';

export default function CertificateView() {
  const location = useLocation();
  const state = location.state;

  if (!state || !state.certificateId) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-navy-900">No Certificate Selected</h2>
        <p className="text-slate-600 text-sm">Please complete an assessment with a passing score to view your certificate.</p>
        <Link to="/certifications" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline">
          <span>Browse Certifications</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const {
    studentName,
    certificationTitle,
    score,
    totalQuestions = 50,
    percentage,
    issueDate,
    certificateId,
    codePrefix = 'CPP'
  } = state;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Credential Successfully Issued</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
          Your Certificate Is Ready
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Congratulations on demonstrating your programming knowledge! You can download your official PDF copy or print it directly.
        </p>
      </div>

      {/* Interactive Certificate Preview Component */}
      <CertificatePreview
        studentName={studentName}
        certificationTitle={certificationTitle}
        score={score}
        totalQuestions={totalQuestions}
        percentage={percentage}
        issueDate={issueDate}
        certificateId={certificateId}
        codePrefix={codePrefix}
      />

      {/* Summary Metadata Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-subtle space-y-4">
        <h3 className="font-bold text-base text-navy-900 pb-3 border-b border-slate-100 flex items-center gap-2">
          <FileText className="w-4 h-4 text-brand-600" />
          <span>Credential Details</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-slate-500 font-medium block">Recipient Name:</span>
            <span className="font-bold text-navy-900 text-sm mt-0.5 block">{studentName}</span>
          </div>
          <div>
            <span className="text-slate-500 font-medium block">Certification Track:</span>
            <span className="font-bold text-navy-900 text-sm mt-0.5 block">{certificationTitle}</span>
          </div>
          <div>
            <span className="text-slate-500 font-medium block">Score / Grade:</span>
            <span className="font-bold text-emerald-600 text-sm mt-0.5 block">{score}/50 ({percentage}%)</span>
          </div>
          <div>
            <span className="text-slate-500 font-medium block">Certificate ID:</span>
            <code className="font-mono font-bold text-navy-900 text-sm mt-0.5 block">{certificateId}</code>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 max-w-xl">
            This digital credential represents successful completion of the 2-hour software engineering course modules and technical examination.
          </p>
          <Link
            to="/certifications"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <span>Take Another Certification</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

    </div>
  );
}
