import React from 'react';

export const TimelineCurve = () => (
  <div className="absolute top-[80px] bottom-[100px] left-1/2 -translate-x-1/2 w-[280px] -z-10 pointer-events-none text-[#4f46e5]/90 flex justify-center opacity-80 hidden md:block overflow-hidden">
    <svg width="280" height="100%" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="snakeCurve" x="0" y="0" width="280" height="340" patternUnits="userSpaceOnUse">
          <path d="M 140 0 C 260 85, 260 85, 140 170 C 20 255, 20 255, 140 340" strokeWidth="4" fill="none" stroke="currentColor" strokeDasharray="12 16" strokeLinecap="round" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#snakeCurve)" stroke="none" />
    </svg>
  </div>
);
