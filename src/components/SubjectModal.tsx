import React from 'react';
import { X, Clock, BookOpen, UserCircle2 } from 'lucide-react';

export interface SubjectDetails {
  code: string;
  title: string;
  description: string;
  prerequisites: string;
  creditHours: string;
  instructor: string;
  color: string;
}

interface SubjectModalProps {
  subject: SubjectDetails;
  onClose: () => void;
}

export function SubjectModal({ subject, onClose }: SubjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-3xl w-full max-w-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden animate-in fade-in zoom-in-95 duration-200 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="px-6 py-8 sm:px-8 sm:py-10 text-white relative"
          style={{ backgroundColor: subject.color }}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-white/80 font-black tracking-widest text-sm mb-2 uppercase">{subject.code}</div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight">{subject.title}</h2>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <p className="text-slate-600 text-base leading-relaxed">
            {subject.description}
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-100/80 shrink-0 text-slate-500">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Prerequisites</div>
                <div className="text-slate-700 font-medium">{subject.prerequisites}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-100/80 shrink-0 text-slate-500">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Credit Hours</div>
                <div className="text-slate-700 font-medium">{subject.creditHours}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-slate-100/80 shrink-0 text-slate-500">
                <UserCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Instructor</div>
                <div className="text-slate-700 font-medium">{subject.instructor}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
