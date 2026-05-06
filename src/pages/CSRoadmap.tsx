import React, { useState } from 'react';
import { CheckCircle2, PlayCircle } from 'lucide-react';
import { Hexagon } from '../components/Hexagon';
import { TimelineCurve } from '../components/TimelineCurve';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { SubjectModal, SubjectDetails } from '../components/SubjectModal';

const subjectsData: Record<string, SubjectDetails> = {
  'CCC100': {
    code: 'CCC100',
    title: 'Fundamentals of Computing',
    description: 'An introduction to the fundamentals of algorithms, computer hardware, and the underlying concepts of computer science.',
    prerequisites: 'None',
    creditHours: '3 Units (2 hrs lec, 3 hrs lab)',
    instructor: 'Prof. Alan Turing',
    color: '#2563eb'
  },
  'CCC101': {
    code: 'CCC101',
    title: 'Computer Programming 1',
    description: 'Introductory C++ programming focusing on logic formulation, basic syntax, and procedural programming paradigms.',
    prerequisites: 'None',
    creditHours: '3 Units (2 hrs lec, 3 hrs lab)',
    instructor: 'Dr. Ada Lovelace',
    color: '#ef7e1a'
  },
  'MAT051': {
    code: 'MAT051',
    title: 'Calculus 1',
    description: 'A comprehensive study of limits, continuity, derivatives, and an introduction to integration techniques.',
    prerequisites: 'Pre-calculus',
    creditHours: '3 Units (3 hrs lec)',
    instructor: 'Dr. Isaac Newton',
    color: '#2563eb'
  }
};

export default function CSRoadmap({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-[#f6f3ff] via-[#f2f6ff] to-[#e1efff] font-sans text-slate-800 flex flex-col relative selection:bg-purple-200 w-full overflow-x-hidden">
      
      <RoadmapHeader onNavigate={onNavigate} />

      {/* Main Roadmap Area */}
      <main className="flex-grow flex flex-col items-center w-full max-w-5xl mx-auto px-4 z-10 relative pb-32">
        {/* Title */}
        <div className="mt-8 mb-20 md:mb-24 text-center z-10">
          <h1 
            className="text-5xl sm:text-6xl md:text-8xl font-black text-center text-[#9300d8] leading-[0.95]"
            style={{ textShadow: "5px 5px 0px #deafff" }}
          >
            <span className="block mb-2 md:mb-4">BS-COMPUTER</span>
            <span className="block">SCIENCE</span>
          </h1>
        </div>

        {/* Timeline Flow */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-y-16 lg:gap-y-12 pb-32 place-items-center">
          <TimelineCurve />

          {/* Fallback Timeline Line for mobile */}
          <div className="absolute top-[40px] bottom-[100px] left-1/2 -translate-x-1/2 w-[3px] border-l-[3px] border-dashed border-[#4f46e5]/40 md:hidden -z-10" />

          {/* First Semester Pill */}
          <div className="col-span-1 md:col-span-2 flex justify-center w-full z-10 mb-8 md:mb-12">
            <div className="bg-white px-8 py-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/50 hover:-translate-y-1 transition-transform">
              <span className="text-[#5145cd] text-xl sm:text-2xl font-bold tracking-tight">First Semester</span>
            </div>
          </div>

          {/* Node 1: Left */}
          <div className="col-span-1 flex justify-center md:justify-end w-full pr-0 md:pr-10 lg:pr-16 z-10">
            <div 
              className="flex flex-col md:flex-row items-center md:items-center gap-6 max-w-[280px] md:max-w-sm cursor-pointer group hover:opacity-90 transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedSubject('CCC100')}
            >
              <Hexagon bgCls="bg-[#2563eb]">
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
              </Hexagon>
              <div className="text-center md:text-left transition-transform duration-300">
                <div className="text-xs font-black tracking-widest text-slate-400 mb-1.5 uppercase group-hover:text-[#2563eb]">CCC100</div>
                <div className="text-lg sm:text-xl font-bold text-slate-800 leading-tight mb-2">Fundamentals of Computing</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden md:block" />

          {/* Node 2: Right */}
          <div className="col-span-1 hidden md:block" />
          <div className="col-span-1 flex justify-center md:justify-start w-full pl-0 md:pl-10 lg:pl-16 z-10 mt-0">
            <div 
              className="flex flex-col-reverse md:flex-row items-center md:items-center gap-6 max-w-[280px] md:max-w-sm cursor-pointer group hover:opacity-90 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              onClick={() => setSelectedSubject('CCC101')}
            >
              {/* Text structure switches for responsive reverse */}
              <div className="text-center md:text-right hidden md:block">
                <div className="text-xs font-black tracking-widest text-[#ef7e1a] mb-1.5 uppercase group-hover:text-[#cb640d]">CCC101</div>
                <div className="text-lg sm:text-xl font-bold text-slate-800 leading-tight mb-2">Computer Programming 1</div>
              </div>
              <Hexagon bgCls="bg-[#ef7e1a]">
                <PlayCircle className="w-10 h-10 text-white" strokeWidth={2.5} fill="currentColor" fillOpacity={0.15} />
              </Hexagon>
              {/* Mobile text version */}
              <div className="text-center block md:hidden">
                <div className="text-xs font-black tracking-widest text-[#ef7e1a] mb-1.5 uppercase group-hover:text-[#cb640d]">CCC101</div>
                <div className="text-lg sm:text-xl font-bold text-slate-800 leading-tight mb-2">Computer Programming 1</div>
              </div>
            </div>
          </div>

          {/* Node 3: Left */}
          <div className="col-span-1 flex justify-center md:justify-end w-full pr-0 md:pr-10 lg:pr-16 z-10 mt-0">
            <div 
              className="flex flex-col md:flex-row items-center md:items-center gap-6 max-w-[280px] md:max-w-sm cursor-pointer group hover:opacity-90 transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedSubject('MAT051')}
            >
              <Hexagon bgCls="bg-[#2563eb]">
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.5} />
              </Hexagon>
              <div className="text-center md:text-left transition-transform duration-300">
                <div className="text-xs font-black tracking-widest text-slate-400 mb-1.5 uppercase group-hover:text-[#2563eb]">MAT051</div>
                <div className="text-lg sm:text-xl font-bold text-slate-800 leading-tight mb-2">Calculus 1</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden md:block" />

          {/* Second Semester Pill */}
          <div className="col-span-1 md:col-span-2 flex justify-center w-full z-10 mt-16 md:mt-24">
            <div className="bg-white px-8 py-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/50 hover:-translate-y-1 transition-transform">
              <span className="text-[#5145cd] text-xl sm:text-2xl font-bold tracking-tight">Second Semester</span>
            </div>
          </div>
        </div>
      </main>

      {/* Subject Modal */}
      {selectedSubject && subjectsData[selectedSubject] && (
        <SubjectModal 
          subject={subjectsData[selectedSubject]} 
          onClose={() => setSelectedSubject(null)} 
        />
      )}
    </div>
  );
}
