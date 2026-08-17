import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="w-full">
      <div className="flex justify-between items-center text-xs font-medium text-slate-500 mb-1.5">
        <span>Progress ({current}/{total})</span>
        <span className="font-semibold text-brand-600">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <div
          className="h-full bg-brand-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
