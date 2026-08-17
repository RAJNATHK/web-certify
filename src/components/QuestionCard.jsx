import React from 'react';
import { Check, Flag } from 'lucide-react';

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  isFlagged,
  onToggleFlag
}) {
  const difficultyColors = {
    Easy: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Medium: 'bg-blue-50 text-blue-700 border-blue-200',
    Moderate: 'bg-amber-50 text-amber-700 border-amber-200'
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-subtle p-6 sm:p-8">
      
      {/* Header Row: Question Counter, Topic, Difficulty & Flag Action */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
        
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          
          <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
            {question.topic}
          </span>

          <span className={`text-xs font-semibold px-2.5 py-1 rounded border ${
            difficultyColors[question.difficulty] || 'bg-slate-100 text-slate-700 border-slate-200'
          }`}>
            {question.difficulty}
          </span>
        </div>

        {/* Mark for Review Button */}
        <button
          type="button"
          onClick={onToggleFlag}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            isFlagged
              ? 'bg-amber-100 text-amber-800 border border-amber-300 font-semibold'
              : 'text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
          title="Flag this question to review before submitting"
        >
          <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : 'text-slate-500'}`} />
          <span>{isFlagged ? 'Flagged for Review' : 'Mark for Review'}</span>
        </button>

      </div>

      {/* Question Text */}
      <div className="py-6">
        <h2 className="text-base sm:text-lg font-semibold text-navy-900 leading-relaxed whitespace-pre-line">
          {question.question}
        </h2>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {question.options.map((optionText, idx) => {
          const isSelected = selectedOption === idx;
          const letter = optionLetters[idx];

          return (
            <label
              key={idx}
              className={`group flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-brand-50/70 border-brand-600 shadow-sm ring-1 ring-brand-600'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60'
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={idx}
                checked={isSelected}
                onChange={() => onSelectOption(idx)}
                className="sr-only"
              />

              {/* Letter Pill */}
              <div className={`w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                isSelected
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
              }`}>
                {letter}
              </div>

              {/* Option Text */}
              <div className="flex-1 pt-0.5">
                <span className={`text-sm sm:text-base leading-relaxed ${
                  isSelected ? 'font-semibold text-navy-900' : 'text-slate-800'
                }`}>
                  {optionText}
                </span>
              </div>

              {/* Checkmark icon on select */}
              {isSelected && (
                <div className="flex-shrink-0 text-brand-600 pt-1">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </label>
          );
        })}
      </div>

    </div>
  );
}
