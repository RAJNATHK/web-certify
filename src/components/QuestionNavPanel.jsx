import React from 'react';

export default function QuestionNavPanel({
  questions,
  currentIndex,
  userAnswers,
  flaggedQuestions,
  onSelectQuestion,
  onOpenSubmitModal
}) {
  const total = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const flaggedCount = Object.keys(flaggedQuestions).filter(k => flaggedQuestions[k]).length;
  const unansweredCount = total - answeredCount;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-subtle p-5">
      
      {/* Title & Stats */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
          Question Palette
        </h3>
        <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
          {answeredCount}/{total} Done
        </span>
      </div>

      {/* Status Legend */}
      <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded bg-brand-600"></span>
          <span>Answered ({answeredCount})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-300"></span>
          <span>Unanswered ({unansweredCount})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded bg-amber-400"></span>
          <span>Flagged ({flaggedCount})</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded border-2 border-brand-600 bg-white"></span>
          <span>Current</span>
        </div>
      </div>

      {/* 50 Question Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-5 gap-2 max-h-[340px] overflow-y-auto pr-1 py-1">
        {questions.map((q, idx) => {
          const isAnswered = userAnswers[q.id] !== undefined;
          const isCurrent = currentIndex === idx;
          const isFlagged = !!flaggedQuestions[q.id];

          let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';

          if (isAnswered) {
            btnClass = 'bg-brand-600 text-white hover:bg-brand-700 border-brand-600 font-semibold';
          }

          if (isFlagged) {
            btnClass = isAnswered 
              ? 'bg-brand-600 text-white ring-2 ring-amber-400 font-semibold' 
              : 'bg-amber-100 text-amber-900 border-amber-300 font-semibold';
          }

          if (isCurrent) {
            btnClass += ' ring-2 ring-offset-2 ring-brand-600';
          }

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelectQuestion(idx)}
              className={`relative h-9 rounded-lg text-xs flex items-center justify-center transition-all border ${btnClass}`}
              title={`Jump to Question ${idx + 1}`}
            >
              <span>{idx + 1}</span>
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Submit Button Trigger */}
      <div className="pt-5 mt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={onOpenSubmitModal}
          className="w-full py-2.5 px-4 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold transition-colors shadow-sm"
        >
          Submit Assessment
        </button>
      </div>

    </div>
  );
}
