import React from 'react';

export const Footer = () => (
  <footer className="w-full shrink-0 flex flex-col sm:flex-row justify-between items-center text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest relative z-20 px-8 py-4 lg:py-6 gap-4 bg-white/40 backdrop-blur-sm border-t border-white/50">
    <div className="flex items-center gap-3">
      <div className="w-2.5 h-2.5 rounded-full bg-[#0e5cdd]"></div>
      <span>Mindanao State University - Main Campus</span>
    </div>
    <div className="bg-slate-200/50 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200/50 text-[#596a83]">
      College of Information Computing Science (CICS)
    </div>
  </footer>
);
