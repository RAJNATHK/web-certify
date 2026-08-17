import React from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

export default function SubmitModal({
  isOpen,
  onClose,
  onSubmit,
  totalQuestions,
  answeredCount,
  flaggedCount
}) {
  if (!isOpen) return null;

  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">
              Submit Assessment?
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Stats */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            Please review your assessment completion summary before finalizing. Once submitted, answers cannot be edited.
          </p>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2.5">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">Total Questions:</span>
              <span className="font-bold text-navy-900">{totalQuestions}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Answered Questions:
              </span>
              <span className="font-bold text-emerald-700">{answeredCount}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-amber-800 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Unanswered Questions:
              </span>
              <span className="font-bold text-amber-800">{unansweredCount}</span>
            </div>
            {flaggedCount > 0 && (
              <div className="flex justify-between items-center text-sm pt-1 border-t border-slate-200">
                <span className="text-slate-500">Flagged for review:</span>
                <span className="font-semibold text-slate-700">{flaggedCount}</span>
              </div>
            )}
          </div>

          {unansweredCount > 0 && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
              <strong>Notice:</strong> You still have {unansweredCount} unanswered questions. Unanswered questions will be scored as 0.
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-white transition-colors"
          >
            Return to Assessment
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            Confirm & Submit
          </button>
        </div>

      </div>
    </div>
  );
}
