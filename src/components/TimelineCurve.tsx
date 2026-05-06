import React from 'react';

export const TimelineCurve = () => (
  <div className="absolute top-[80px] bottom-[100px] left-1/2 -translate-x-1/2 w-[280px] -z-10 pointer-events-none stroke-[#4f46e5]/90 flex justify-center opacity-80 hidden md:block">
    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 1000">
      <path d="M 50 0
               C 100 80, 100 150, 50 250
               C 0 350, 0 450, 50 550
               C 100 650, 100 750, 50 850
               C 0 920, 0 980, 50 1000"
            strokeWidth="3" fill="none" strokeDasharray="10 14" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);
