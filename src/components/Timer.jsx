import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { formatSecondsToTime } from '../utils/scoring';

export default function Timer({ remainingSeconds }) {
  const isUrgent = remainingSeconds <= 300; // Under 5 minutes
  const isCritical = remainingSeconds <= 60; // Under 1 minute

  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border font-mono text-sm font-semibold transition-colors ${
      isCritical
        ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
        : isUrgent
        ? 'bg-amber-50 border-amber-300 text-amber-800'
        : 'bg-slate-100 border-slate-200 text-navy-900'
    }`}>
      {isUrgent ? (
        <AlertTriangle className="w-4 h-4 text-amber-600" />
      ) : (
        <Clock className="w-4 h-4 text-slate-500" />
      )}
      <span>{formatSecondsToTime(remainingSeconds)}</span>
      <span className="text-[11px] font-sans font-normal text-slate-500 hidden sm:inline">remaining</span>
    </div>
  );
}
