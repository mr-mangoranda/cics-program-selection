import React from 'react';
import { Bell, User, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export const RoadmapHeader = ({ onNavigate, currentView = 'roadmap' }: { onNavigate: (view: string) => void, currentView?: string }) => (
  <motion.div 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    className="w-full flex flex-col shrink-0 relative z-20 backdrop-blur-md border-b border-white/40"
  >
    <header className="w-full flex justify-between items-center px-6 lg:px-12 py-4 lg:py-6">
      <div className="flex items-center gap-4 lg:gap-12">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors bg-white/70 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-slate-200/50 shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </motion.button>
        <nav className="hidden md:flex gap-8 lg:gap-10 font-semibold text-sm lg:text-base">
          <button 
            onClick={() => onNavigate('roadmap')}
            className={`cursor-pointer transition-all duration-300 ${currentView === 'roadmap' ? "text-[#2563eb] text-shadow-sm glow" : "text-slate-500 hover:text-slate-800"}`}
          >
            Roadmap
          </button>
          <button 
            onClick={() => onNavigate('cssubjects')}
            className={`cursor-pointer transition-all duration-300 ${currentView === 'cssubjects' ? "text-[#2563eb] text-shadow-sm glow" : "text-slate-500 hover:text-slate-800"}`}
          >
            Subjects
          </button>
          <button 
            onClick={() => onNavigate('cstutorials')}
            className={`cursor-pointer transition-all duration-300 ${currentView === 'cstutorials' ? "text-[#2563eb] text-shadow-sm glow" : "text-slate-500 hover:text-slate-800"}`}
          >
            Tutorials
          </button>
        </nav>
      </div>
      <div className="flex items-center gap-4 sm:gap-5 lg:gap-8 text-slate-600">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hover:text-blue-600 transition-colors cursor-pointer"><Bell className="w-5 h-5 lg:w-6 lg:h-6" /></motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hover:text-blue-600 transition-colors cursor-pointer"><User className="w-5 h-5 lg:w-6 lg:h-6" /></motion.button>
      </div>
    </header>
    
    {/* Mobile Navigation */}
    <nav className="md:hidden flex gap-6 overflow-x-auto px-6 hide-scrollbar pb-3 font-semibold text-sm mb-1 whitespace-nowrap">
      <button 
        onClick={() => onNavigate('roadmap')}
        className={`cursor-pointer pb-2 transition-all duration-300 relative ${currentView === 'roadmap' ? "text-[#2563eb]" : "text-slate-500 hover:text-slate-800"}`}
      >
        Roadmap
        {currentView === 'roadmap' && (
          <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563eb] rounded-full" />
        )}
      </button>
      <button 
        onClick={() => onNavigate('cssubjects')}
        className={`cursor-pointer pb-2 transition-all duration-300 relative ${currentView === 'cssubjects' ? "text-[#2563eb]" : "text-slate-500 hover:text-slate-800"}`}
      >
        Subjects
        {currentView === 'cssubjects' && (
          <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563eb] rounded-full" />
        )}
      </button>
      <button 
        onClick={() => onNavigate('cstutorials')}
        className={`cursor-pointer pb-2 transition-all duration-300 relative ${currentView === 'cstutorials' ? "text-[#2563eb]" : "text-slate-500 hover:text-slate-800"}`}
      >
        Tutorials
        {currentView === 'cstutorials' && (
          <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2563eb] rounded-full" />
        )}
      </button>
    </nav>
  </motion.div>
);