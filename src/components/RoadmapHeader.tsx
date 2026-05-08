import React from 'react';
import { Bell, User, ArrowLeft } from 'lucide-react';

export const RoadmapHeader = ({ onNavigate, currentView = 'roadmap' }: { onNavigate: (view: string) => void, currentView?: string }) => (
  <header className="w-full flex justify-between items-center px-6 lg:px-12 py-8 shrink-0 relative z-20">
    <div className="flex items-center gap-8 lg:gap-12">
      <button 
        onClick={() => onNavigate('home')} 
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors bg-white/50 px-4 py-2 rounded-full border border-slate-200 shadow-sm cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>
      <nav className="hidden md:flex gap-8 lg:gap-10 font-semibold text-sm lg:text-base">
        <button 
          onClick={() => onNavigate('roadmap')}
          className={`cursor-pointer ${currentView === 'roadmap' ? "text-[#2563eb]" : "text-slate-500 hover:text-slate-800 transition-colors"}`}
        >
          Roadmap
        </button>
        <button 
          onClick={() => onNavigate('cssubjects')}
          className={`cursor-pointer ${currentView === 'cssubjects' ? "text-[#2563eb]" : "text-slate-500 hover:text-slate-800 transition-colors"}`}
        >
          Subjects
        </button>
        <button 
          onClick={() => onNavigate('cstutorials')}
          className={`cursor-pointer ${currentView === 'cstutorials' ? "text-[#2563eb]" : "text-slate-500 hover:text-slate-800 transition-colors"}`}
        >
          Tutorials
        </button>
      </nav>
    </div>
    <div className="flex items-center gap-5 lg:gap-8 text-slate-600">
      <button className="hover:text-slate-900 transition-colors cursor-pointer"><Bell className="w-5 h-5 lg:w-6 lg:h-6" /></button>
      <button className="hover:text-slate-900 transition-colors cursor-pointer"><User className="w-5 h-5 lg:w-6 lg:h-6" /></button>
    </div>
  </header>
);
