import React from 'react';

/**
 * AdContainer Wrapper
 * Base container for ad placement with transparent label
 */
export function AdContainer({ children, className = '' }) {
  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400 mb-1.5">
        Advertisement
      </span>
      {children}
    </div>
  );
}

/**
 * AdBanner Component (e.g. 728x90 Leaderboard / Responsive Horizontal Banner)
 */
export function AdBanner({ slotId = 'default-banner', className = '' }) {
  return (
    <AdContainer className={className}>
      <div 
        id={`ad-banner-${slotId}`}
        className="w-full max-w-4xl h-24 sm:h-28 bg-slate-100/80 border border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center p-4 text-center text-slate-400 transition-colors hover:border-slate-400"
      >
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect width="18" height="14" x="3" y="5" rx="2" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="M7 15h10M7 9h6" />
          </svg>
          <span>Responsive Display Banner Slot</span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1">
          Standard 728×90 / Responsive Ad Unit (Adsterra / Monetag ready)
        </p>
      </div>
    </AdContainer>
  );
}

/**
 * AdRectangle Component (e.g. 300x250 Medium Rectangle / Sidebar)
 */
export function AdRectangle({ slotId = 'default-rect', className = '' }) {
  return (
    <AdContainer className={className}>
      <div 
        id={`ad-rect-${slotId}`}
        className="w-full max-w-[320px] h-[260px] bg-slate-100/80 border border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center p-6 text-center text-slate-400 transition-colors hover:border-slate-400"
      >
        <div className="flex flex-col items-center gap-2 text-xs text-slate-500 font-medium">
          <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect width="16" height="16" x="4" y="4" rx="2" strokeWidth="2" />
            <path strokeLinecap="round" strokeWidth="2" d="M9 12h6M9 9h3" />
          </svg>
          <span>Medium Rectangle Slot (300×250)</span>
        </div>
        <p className="text-[11px] text-slate-400 mt-2">
          Sidebar & Content Placement Unit
        </p>
      </div>
    </AdContainer>
  );
}
