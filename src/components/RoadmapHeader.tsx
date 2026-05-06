import React from 'react';
import { Bell, User } from 'lucide-react';

export const RoadmapHeader = ({ onNavigate }: { onNavigate: (view: string) => void }) => (
  <header className="w-full flex justify-between items-center px-6 lg:px-12 py-8 shrink-0 relative z-20">
    <div className="flex items-center gap-8 lg:gap-12">
      <button onClick={() => onNavigate('home')} className="text-xl font-black text-[#2563eb] hover:text-[#1d4ed8] transition-colors">
        BS-CS
      </button>
      <nav className="hidden md:flex gap-8 lg:gap-10 font-semibold text-sm lg:text-base">
        <button className="text-[#2563eb]">Roadmap</button>
        <button className="text-slate-500 hover:text-slate-800 transition-colors">Subjects</button>
        <button className="text-slate-500 hover:text-slate-800 transition-colors">Tutorials</button>
      </nav>
    </div>
    <div className="flex items-center gap-5 lg:gap-8 text-slate-600">
      <button className="hover:text-slate-900 transition-colors"><Bell className="w-5 h-5 lg:w-6 lg:h-6" /></button>
      <button className="hover:text-slate-900 transition-colors"><User className="w-5 h-5 lg:w-6 lg:h-6" /></button>
    </div>
  </header>
);
