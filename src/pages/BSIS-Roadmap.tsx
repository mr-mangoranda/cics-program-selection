import React, { useState, useMemo } from 'react';
import { Search, X, ArrowLeft, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { itsysSubjectsData as subjectsData, itsysTimelineData as timelineData } from '../data/BSIS-Subjects';

const HEX_COLORS = ['#4F6BF5', '#F5A623', '#E040FB', '#00C4A7', '#FF5C7A', '#43C759'];

const getUnits = (creditStr: string) => {
  const match = creditStr.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

const Hexagon = ({ color, text, onClick }: {color: string, text: string, onClick?: ()=>void}) => (
  <div 
    className="relative w-9 h-[42px] flex flex-col items-center justify-center flex-shrink-0 cursor-pointer hover:scale-105 transition-transform" 
    onClick={onClick}
  >
    <svg viewBox="0 0 24 28" fill={color} className="absolute inset-0 w-full h-full drop-shadow-sm">
      <path d="M12 0L24 7V21L12 28L0 21V7L12 0Z" />
    </svg>
    <span className="relative z-10 text-[10px] font-bold text-white leading-none mt-0.5">{text}</span>
  </div>
);

export default function ITSystemRoadmap({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'Roadmap'|'Catalog'|'Progress'>('Roadmap');
  const [expandedSemesters, setExpandedSemesters] = useState<Set<string>>(new Set());
  const [selectedSubjectCode, setSelectedSubjectCode] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState<string>('All');

  // --- Derived State ---
  const allSubjects = useMemo(() => timelineData.flatMap(s => s.subjects), []);
  
  const getSubjectColor = (code: string) => {
    const idx = allSubjects.indexOf(code);
    return HEX_COLORS[idx >= 0 ? idx % HEX_COLORS.length : 0];
  };

  const TOTAL_UNITS = 151; // As per PDF
  const doneUnits = useMemo(() => Array.from(completed).reduce((sum, code) => sum + getUnits(subjectsData[code]?.creditHours || '0'), 0), [completed]);
  const leftUnits = TOTAL_UNITS - doneUnits;
  
  const currentSemIndex = timelineData.findIndex(sem => !sem.subjects.every(sc => completed.has(sc)));
  const progressPercent = Math.min(100, Math.round((doneUnits / TOTAL_UNITS) * 100));

  const getSemShortCode = (name: string) => {
    if (name.includes('First Year, First')) return 'Y1S1';
    if (name.includes('First Year, Second')) return 'Y1S2';
    if (name.includes('Second Year, First')) return 'Y2S1';
    if (name.includes('Second Year, Second')) return 'Y2S2';
    if (name.includes('Third Year, First')) return 'Y3S1';
    if (name.includes('Third Year, Second')) return 'Y3S2';
    if (name.includes('Fourth Year, First')) return 'Y4S1';
    if (name.includes('Fourth Year, Second')) return 'Y4S2';
    return '-';
  };

  const activeSemShort = currentSemIndex >= 0 ? getSemShortCode(timelineData[currentSemIndex].semesterName) : 'DONE';

  const toggleSemesterExpansion = (semName: string) => {
    setExpandedSemesters(prev => {
      const next = new Set(prev);
      if (next.has(semName)) next.delete(semName);
      else next.add(semName);
      return next;
    });
  };

  const toggleSubjectCompletion = (code: string) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  };

  // --- Handlers ---
  const handleSubjectClick = (code: string) => setSelectedSubjectCode(code);

  const selectedSubjectData = selectedSubjectCode ? subjectsData[selectedSubjectCode] : null;

  // --- Catalog logic ---
  const catalogList = Object.values(subjectsData).filter(sub => {
    const q = searchQuery.toLowerCase();
    const matchName = sub.title.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q);
    
    let matchYear = true;
    if (filterYear !== 'All') {
      const semObj = timelineData.find(s => s.subjects.includes(sub.code));
      if (semObj) {
         if (filterYear === 'Year 1' && !semObj.semesterName.includes('First Year')) matchYear = false;
         if (filterYear === 'Year 2' && !semObj.semesterName.includes('Second Year')) matchYear = false;
         if (filterYear === 'Year 3' && !semObj.semesterName.includes('Third Year')) matchYear = false;
         if (filterYear === 'Year 4' && !semObj.semesterName.includes('Fourth Year')) matchYear = false;
      }
    }
    return matchName && matchYear;
  });

  return (
    <div className="min-h-[100dvh] bg-[#F4F6FD] font-sans text-[#1A2040] flex justify-center pb-0 md:pb-12 selection:bg-[#4F6BF5] selection:text-white">
      <div className="w-full bg-[#F4F6FD] min-h-screen relative shadow-[0_0_40px_rgba(0,0,0,0.05)] flex flex-col items-center">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-40 bg-[#F4F6FD] px-5 pt-5 pb-0 border-b border-[#E4E8F8] w-full flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <button 
            onClick={() => onNavigate('home')} 
            className="text-[#7A829E] text-xs font-bold mb-4 flex items-center gap-1 hover:text-[#4F6BF5] transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2.5} /> Back to Home
          </button>
          
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F6BF5] to-[#7B5CF5] text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
              BSIS
            </div>
            <div>
              <h1 className="text-[#1A2040] font-bold text-[19px] leading-tight mb-1 tracking-tight">BS Information Systems</h1>
              <p className="text-[#7A829E] text-[11px] font-medium">CICS · 2018 Curriculum</p>
            </div>
          </div>

          <div className="flex justify-between text-[11px] font-bold text-[#7A829E] mb-1.5">
            <span>Overall progress</span>
            <span className="text-[#4F6BF5]">{doneUnits} / 151 units</span>
          </div>
          <div className="w-full h-1.5 bg-[#E4E8F8] rounded-full overflow-hidden mb-5">
            <motion.div 
              className="h-full bg-[#4F6BF5] rounded-full" 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-2 mb-5">
            <div className="bg-white rounded-xl py-2 flex flex-col items-center justify-center shadow-sm border border-[#E4E8F8]">
              <span className="text-[#4F6BF5] font-bold text-sm tracking-tight">{doneUnits}</span>
              <span className="text-[9px] text-[#7A829E] font-medium uppercase mt-0.5">Done</span>
            </div>
            <div className="bg-white rounded-xl py-2 flex flex-col items-center justify-center shadow-sm border border-[#E4E8F8]">
              <span className="text-[#F5A623] font-bold text-sm tracking-tight">{leftUnits}</span>
              <span className="text-[9px] text-[#7A829E] font-medium uppercase mt-0.5">Left</span>
            </div>
            <div className="bg-white rounded-xl py-2 flex flex-col items-center justify-center shadow-sm border border-[#E4E8F8]">
              <span className="text-[#00C4A7] font-bold text-sm tracking-tight">{completed.size}</span>
              <span className="text-[9px] text-[#7A829E] font-medium uppercase mt-0.5">Subjs</span>
            </div>
            <div className="bg-white rounded-xl py-2 flex flex-col items-center justify-center shadow-sm border border-[#E4E8F8]">
              <span className="text-[#E040FB] font-bold text-sm tracking-tight">{activeSemShort}</span>
              <span className="text-[9px] text-[#7A829E] font-medium uppercase mt-0.5">Curr</span>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="flex w-full relative">
            <div className="absolute bottom-0 w-full h-[1px] bg-[#E4E8F8]" />
            {['Roadmap', 'Catalog', 'Progress'].map(tab => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  className={`flex-1 pb-3 text-xs md:text-sm font-bold transition-colors relative z-10 ${active ? 'text-[#4F6BF5]' : 'text-[#7A829E] hover:text-[#4F6BF5]/80'}`}
                  onClick={() => setActiveTab(tab as any)}
                >
                  {tab}
                  {active && <motion.div layoutId="activetab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4F6BF5]" />}
                </button>
              )
            })}
          </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 w-full relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            
            {/* ROADMAP TAB */}
            {activeTab === 'Roadmap' && (
              <motion.div 
                key="roadmap"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-6 pb-24 flex flex-col items-center w-full max-w-4xl"
              >
                {timelineData.map((sem, sIndex) => {
                  const isExpanded = expandedSemesters.has(sem.semesterName);
                  const isCompleted = sem.subjects.length > 0 && sem.subjects.every(sc => completed.has(sc));
                  const isCurrent = sIndex === currentSemIndex;
                  
                  let borderColor = '#E4E8F8';
                  let statusText = '■ LOCKED';
                  let statusColor = '#9099BA';
                  if (isCompleted) {
                    borderColor = '#43C759';
                    statusText = '✓ DONE';
                    statusColor = '#43C759';
                  } else if (isCurrent) {
                    borderColor = '#F5A623';
                    statusText = '● ACTIVE';
                    statusColor = '#F5A623';
                  }

                  const semDoneUnits = sem.subjects.filter(c => completed.has(c)).reduce((acc, c) => acc + getUnits(subjectsData[c].creditHours), 0);
                  const semTotalUnits = sem.subjects.reduce((acc, c) => acc + getUnits(subjectsData[c].creditHours), 0);

                  const yearPrefix = sem.semesterName.split(',')[0].toUpperCase();
                  const showYearDivider = sIndex === 0 || timelineData[sIndex - 1].semesterName.split(',')[0].toUpperCase() !== yearPrefix;

                  return (
                    <div key={sem.semesterName} className="w-full flex flex-col items-center">
                      {showYearDivider && (
                        <div className="bg-[#4F6BF5] text-white text-[11px] font-bold uppercase tracking-[0.1em] px-5 py-1.5 rounded-full my-6 shadow-sm">
                          {yearPrefix}
                        </div>
                      )}

                      <div className="relative flex flex-col items-center w-full my-3">
                        <div className="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-[#E4E8F8] z-0" />
                        
                        <div 
                          onClick={() => toggleSemesterExpansion(sem.semesterName)}
                          className="bg-white rounded-xl px-5 py-2.5 text-center cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.03)] z-10 transition-transform active:scale-95 border-2 relative select-none"
                          style={{ borderColor }}
                        >
                           <div className="text-[9px] font-bold tracking-widest mb-0.5" style={{ color: statusColor }}>{statusText}</div>
                           <div className="text-[13px] font-bold text-[#1A2040] leading-tight">{sem.semesterName.replace(yearPrefix.toLowerCase() + ',', '').trim() || sem.semesterName}</div>
                        </div>

                        <AnimatePresence>
                          {!isExpanded ? (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="relative w-full my-5 overflow-hidden"
                            >
                              {sem.subjects.map((subCode, i) => {
                                const sub = subjectsData[subCode];
                                const isLeft = i % 2 === 0;
                                return (
                                  <div key={subCode} className="w-full flex h-[60px] md:h-20 relative z-10" onClick={() => handleSubjectClick(subCode)}>
                                     <div className={`w-1/2 flex items-center relative ${isLeft ? 'justify-end pr-[22px] md:pr-10' : 'pl-[22px] md:pl-10 left-1/2'}`}>
                                        <div className={`absolute top-1/2 w-[22px] md:w-10 border-t-2 border-dashed border-[#E4E8F8] ${isLeft ? 'right-0' : 'left-0'}`} />
                                        
                                        <div className={`flex items-center gap-3 md:gap-4 w-max ${isLeft ? 'flex-row-reverse' : ''} cursor-pointer hover:opacity-80 transition-opacity`}>
                                            <div className="md:scale-110 origin-center transition-transform">
                                              <Hexagon color={getSubjectColor(subCode)} text={`${getUnits(sub.creditHours)}u`} />
                                            </div>
                                            <div className={`text-[11px] md:text-[13px] font-bold leading-tight ${completed.has(subCode) ? 'text-[#1A2040]' : 'text-[#7A829E]'} ${isLeft ? 'text-right' : 'text-left'} max-w-[100px] md:max-w-[160px] line-clamp-2 md:line-clamp-3`}>
                                              {sub.title}
                                            </div>
                                        </div>
                                     </div>
                                  </div>
                                )
                              })}
                            </motion.div>
                          ) : (
                            <motion.div 
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: 'auto', y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              className="w-[95%] max-w-[340px] md:max-w-[420px] bg-[#F7F9FF] border border-[#E4E8F8] rounded-xl shadow-sm z-20 mt-4 overflow-hidden"
                            >
                               <div className="bg-white p-3.5 border-b border-[#E4E8F8]">
                                  <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-xs font-bold text-[#1A2040]">{sem.semesterName}</h4>
                                    <span className="text-[9px] font-bold text-[#7A829E] uppercase tracking-wider">{semDoneUnits}/{semTotalUnits} Units</span>
                                  </div>
                                  <div className="text-[10px] text-[#7A829E] mb-2">{sem.subjects.length} subjects · {sem.subjects.filter(c => completed.has(c)).length}/{sem.subjects.length} done</div>
                                  <div className="w-full h-1 bg-[#E4E8F8] rounded-full overflow-hidden">
                                    <div className="h-full bg-[#43C759] rounded-full" style={{ width: `${(semDoneUnits / Math.max(semTotalUnits, 1)) * 100}%` }} />
                                  </div>
                               </div>
                               <div className="p-3 flex flex-col gap-1.5 relative z-10">
                                  {sem.subjects.map(subCode => {
                                    const sub = subjectsData[subCode];
                                    const isDone = completed.has(subCode);
                                    return (
                                      <div key={subCode} className="flex flex-col bg-white border border-[#E4E8F8]/60 p-2.5 rounded-lg active:scale-[0.98] transition-transform cursor-pointer shadow-sm hover:shadow-md" onClick={() => handleSubjectClick(subCode)}>
                                          <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                              <div className={`w-2.5 h-2.5 flex-shrink-0 rounded-full flex items-center justify-center transition-colors ${isDone ? 'bg-[#43C759]' : 'bg-[#E4E8F8]'}`}>
                                                 {isDone && <Check size={8} strokeWidth={4} className="text-white" />}
                                              </div>
                                              <span className="text-[10px] font-mono font-bold whitespace-nowrap" style={{ color: getSubjectColor(subCode) }}>{sub.code}</span>
                                              <span className="text-[11px] font-bold text-[#1A2040] truncate pr-2">{sub.title}</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-[#F5A623] ml-1 bg-[#FFF8ED] px-1.5 py-0.5 rounded">{getUnits(sub.creditHours)}u</span>
                                          </div>
                                      </div>
                                    )
                                  })}
                               </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )}

            {/* CATALOG TAB */}
            {activeTab === 'Catalog' && (
              <motion.div 
                key="catalog"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-6 pb-24 w-full max-w-5xl"
              >
                <div className="relative mb-5 max-w-2xl mx-auto">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#9099BA]" />
                  <input 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-[#F7F9FF] border border-[#E4E8F8] rounded-xl pl-10 pr-4 py-3 text-[13px] font-medium text-[#1A2040] placeholder-[#9099BA] outline-none focus:border-[#4F6BF5] focus:ring-2 focus:ring-[#4F6BF5]/20 transition-all shadow-sm" 
                     placeholder="Search by code or name..."
                  />
                </div>
                
                <div className="flex justify-start md:justify-center gap-2.5 overflow-x-auto mb-6 pb-1" style={{ scrollbarWidth: 'none' }}>
                  {['All', 'Year 1', 'Year 2', 'Year 3', 'Year 4'].map(year => (
                    <button 
                      key={year}
                      onClick={() => setFilterYear(year)}
                      className={`px-4 py-1.5 rounded-full text-[11px] md:text-xs font-bold transition-colors whitespace-nowrap border shrink-0 ${filterYear === year ? 'bg-[#4F6BF5] text-white border-[#4F6BF5] shadow-sm' : 'bg-white text-[#7A829E] border-[#E4E8F8] hover:bg-[#F7F9FF]'}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>

                <div className="text-[10px] md:text-xs font-bold text-[#7A829E] uppercase tracking-wider mb-3 px-1 md:text-center">{catalogList.length} subjects found</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 md:bg-transparent md:border-none md:shadow-none bg-white rounded-2xl border border-[#E4E8F8] shadow-sm overflow-hidden md:overflow-visible">
                  {catalogList.length === 0 ? (
                    <div className="p-8 text-center text-[#7A829E] text-xs col-span-full">No subjects match your filters.</div>
                  ) : (
                    catalogList.map((s, i) => (
                      <div 
                        key={s.code} 
                        className={`flex items-center justify-between p-4 cursor-pointer hover:bg-[#F7F9FF] transition-colors active:bg-[#E4E8F8] md:bg-white md:rounded-xl md:border md:border-[#E4E8F8] md:shadow-sm ${i !== catalogList.length - 1 ? 'border-b border-[#E4E8F8]/60 md:border-[#E4E8F8]' : ''}`} 
                        onClick={() => handleSubjectClick(s.code)}
                      >
                         <div className="flex items-center gap-3.5 min-w-0 pr-3">
                             <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0" style={{ backgroundColor: getSubjectColor(s.code) }} />
                             <div className="flex flex-col min-w-0">
                               <span className="text-[10px] md:text-[11px] font-mono font-bold leading-none mb-1" style={{ color: getSubjectColor(s.code) }}>{s.code}</span>
                               <span className="text-[13px] md:text-[14px] font-bold text-[#1A2040] leading-tight truncate">{s.title}</span>
                             </div>
                         </div>
                         <span className="text-[11px] md:text-xs font-bold text-[#F5A623] bg-[#FFF8ED] px-2 py-1 rounded shrink-0">{getUnits(s.creditHours)}u</span>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {/* PROGRESS TAB */}
            {activeTab === 'Progress' && (
              <motion.div 
                key="progress"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-6 pb-24 w-full max-w-6xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {['First Year', 'Second Year', 'Third Year', 'Fourth Year'].map((yearName, yIndex) => {
                    const semsInYear = timelineData.filter(s => s.semesterName.includes(yearName));
                    if (!semsInYear.length) return null;

                    return (
                      <div key={yearName} className="mb-0 flex flex-col">
                        <h3 className="text-[11px] md:text-xs font-bold text-[#4F6BF5] uppercase tracking-widest mb-4 px-1">{yearName.toUpperCase()}</h3>
                        <div className="flex flex-col gap-4 bg-white p-4 rounded-2xl border border-[#E4E8F8] shadow-sm flex-1">
                        {semsInYear.map((sem, sIndex) => {
                          const semTotalSubjects = sem.subjects.length;
                          const semDoneSubjects = sem.subjects.filter(c => completed.has(c)).length;
                          const semTotalUnits = sem.subjects.reduce((sum, c) => sum + getUnits(subjectsData[c].creditHours), 0);
                          const semDoneUnits = sem.subjects.filter(c => completed.has(c)).reduce((sum, c) => sum + getUnits(subjectsData[c].creditHours), 0);
                          
                          const progress = semTotalUnits > 0 ? (semDoneUnits / semTotalUnits) * 100 : 0;
                          const isDone = semTotalSubjects > 0 && semDoneSubjects === semTotalSubjects;
                          const isActive = semDoneSubjects > 0 && !isDone;

                          const dotClass = isDone ? 'bg-[#43C759] shadow-[0_0_8px_rgba(67,199,89,0.5)]' 
                                      : isActive ? 'bg-[#F5A623] shadow-[0_0_8px_rgba(245,166,35,0.5)]' 
                                      : 'bg-[#E4E8F8]';

                          return (
                            <div key={sem.semesterName} className="flex items-center gap-4 w-full">
                               <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${dotClass}`} />
                               <div className="flex-grow min-w-0">
                                  <div className="flex justify-between items-end mb-1.5 w-full">
                                      <span className="text-[13px] font-bold text-[#1A2040] truncate pr-2">{sem.semesterName.replace(yearName + ',', '').trim() || sem.semesterName}</span>
                                      <span className="text-[10px] font-bold text-[#7A829E] whitespace-nowrap">
                                        {semDoneSubjects}/{semTotalSubjects} · {Math.round(progress)}%
                                      </span>
                                  </div>
                                  <div className="w-full h-1.5 bg-[#F7F9FF] border border-[#E4E8F8] rounded-full overflow-hidden">
                                      <motion.div 
                                        className="h-full bg-[#4F6BF5] rounded-full" 
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.8 }}
                                      />
                                  </div>
                               </div>
                            </div>
                          )
                        })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM SHEET MODAL (Subject Detail) */}
        <AnimatePresence>
          {selectedSubjectData && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1A2040]/50 z-50 flex flex-col justify-end md:justify-center items-center w-full h-[100dvh] md:p-6"
              onClick={() => setSelectedSubjectCode(null)}
            >
               <motion.div 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 exit={{ y: "100%" }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 className="bg-white rounded-t-[28px] md:rounded-[28px] px-6 pt-3 md:pt-6 pb-8 md:pb-6 w-full max-w-md relative shadow-2xl border-t md:border border-[#E4E8F8] max-h-[85vh] md:max-h-[90vh] overflow-y-auto"
                 onClick={(e) => e.stopPropagation()}
               >
                  <div className="w-12 h-1.5 bg-[#E4E8F8] rounded-full mx-auto mb-6 md:hidden" />
                  <button 
                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-[#F4F6FD] hover:bg-[#E4E8F8] transition-colors rounded-full text-[#7A829E]" 
                    onClick={() => setSelectedSubjectCode(null)}
                  >
                    <X size={16} strokeWidth={2.5}/>
                  </button>
                  
                  <div className="text-[12px] font-mono font-bold mb-1.5 inline-block" style={{ color: getSubjectColor(selectedSubjectData.code) }}>
                    {selectedSubjectData.code}
                  </div>
                  <h2 className="text-2xl font-bold text-[#1A2040] leading-tight mb-2 opacity-90">{selectedSubjectData.title}</h2>
                  <p className="text-[13px] leading-relaxed text-[#7A829E] mb-6">{selectedSubjectData.description}</p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-6">
                     <div className="bg-[#F4F6FD] rounded-xl p-3.5 flex flex-col items-center justify-center border border-[#E4E8F8] shadow-sm">
                        <div className="text-[22px] font-black text-[#4F6BF5] mb-0.5 leading-none">{getUnits(selectedSubjectData.creditHours)}</div>
                        <div className="text-[9px] font-bold text-[#7A829E] uppercase tracking-wider">Units</div>
                     </div>
                     <div className="col-span-2 bg-[#F4F6FD] rounded-xl p-3.5 flex flex-col border border-[#E4E8F8] shadow-sm">
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#E4E8F8]">
                           <span className="text-[9px] font-bold text-[#7A829E] uppercase tracking-wider w-10">Pre:</span>
                           {selectedSubjectData.prerequisites === 'None' ? (
                             <span className="px-2 py-0.5 bg-white text-[#9099BA] border border-[#E4E8F8] rounded text-[10px] font-bold">None</span>
                           ) : (
                             <span className="px-2 py-0.5 bg-[#FFF8ED] text-[#F5A623] border border-[#FDEBCE] rounded text-[10px] font-mono font-bold leading-tight">{selectedSubjectData.prerequisites}</span>
                           )}
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-[9px] font-bold text-[#7A829E] uppercase tracking-wider w-10">Instr:</span>
                           <span className="text-[11px] font-bold text-[#1A2040] truncate">{selectedSubjectData.instructor}</span>
                        </div>
                     </div>
                  </div>
                  
                  <button 
                      onClick={() => toggleSubjectCompletion(selectedSubjectData.code)}
                      className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm ${
                         completed.has(selectedSubjectData.code) 
                          ? 'bg-[#43C759] text-white border-b-4 border-[#359d46] hover:bg-[#3db351]' 
                          : 'bg-[#4F6BF5] text-white border-b-4 border-[#3B54D1] hover:bg-[#4660eb]'
                      }`}
                  >
                     {completed.has(selectedSubjectData.code) ? (
                       <> <Check size={18} strokeWidth={3} /> Marked as completed </>
                     ) : (
                       'Mark as completed'
                     )}
                  </button>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
