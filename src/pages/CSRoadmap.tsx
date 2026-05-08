import React, { useState } from 'react';
import { BookOpen, Clock, UserCircle2, ChevronDown, Lock, Filter, X } from 'lucide-react';
import { Hexagon } from '../components/Hexagon';
import { TimelineCurve } from '../components/TimelineCurve';
import { RoadmapHeader } from '../components/RoadmapHeader';

import { subjectsData, timelineData } from '../data/subjects';

export interface SubjectDetails {
  code: string;
  title: string;
  description: string;
  prerequisites: string;
  creditHours: string;
  instructor: string;
  color: string;
}

export default function CSRoadmap({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);
  const [filterPrereq, setFilterPrereq] = useState('All');
  const [filterCredits, setFilterCredits] = useState('All');
  const [filterInstructor, setFilterInstructor] = useState('All');
  const [filterColor, setFilterColor] = useState('All');

  const uniqueCreditHours = Array.from(new Set(Object.values(subjectsData).map(s => s.creditHours))).sort();
  const uniqueInstructors = Array.from(new Set(Object.values(subjectsData).map(s => s.instructor))).sort();
  const uniqueColors = Array.from(new Set(Object.values(subjectsData).map(s => s.color)));

  const filteredTimeline = timelineData.map(sem => {
    const matchingSubjects = sem.subjects.filter(subjectKey => {
      const subject = subjectsData[subjectKey];
      
      if (filterPrereq === 'None' && subject.prerequisites !== 'None') return false;
      if (filterPrereq === 'Has Prereq' && subject.prerequisites === 'None') return false;
      
      if (filterCredits !== 'All' && subject.creditHours !== filterCredits) return false;
      if (filterInstructor !== 'All' && subject.instructor !== filterInstructor) return false;
      if (filterColor !== 'All' && subject.color !== filterColor) return false;
      if (selectedSemester !== 'All' && sem.semesterName !== selectedSemester) return false;
      
      return true;
    });
    return { ...sem, subjects: matchingSubjects };
  }).filter(sem => sem.subjects.length > 0);

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

        {/* Filter Details */}
        <div className="flex flex-col items-center mb-12 z-20 w-full px-4 relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors mb-2 text-slate-700 font-bold text-sm hover:shadow-md"
          >
            <Filter className="w-4 h-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {showFilters && (
            <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-top-4 fade-in duration-300 mt-4 relative">
              {/* Semester Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Semester</label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-[#4f46e5] focus:border-[#4f46e5] block w-full p-2.5 outline-none transition-all cursor-pointer"
                >
                  <option value="All">All Semesters</option>
                  {timelineData.map(sem => (
                    <option key={sem.semesterName} value={sem.semesterName}>{sem.semesterName}</option>
                  ))}
                </select>
              </div>

              {/* Prerequisite Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Prerequisite</label>
                <select
                  value={filterPrereq}
                  onChange={(e) => setFilterPrereq(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-[#4f46e5] focus:border-[#4f46e5] block w-full p-2.5 outline-none transition-all cursor-pointer"
                >
                  <option value="All">All Subjects</option>
                  <option value="None">No Prerequisites</option>
                  <option value="Has Prereq">Has Prerequisites</option>
                </select>
              </div>

              {/* Credit Hours Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Credit Hours</label>
                <select
                  value={filterCredits}
                  onChange={(e) => setFilterCredits(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-[#4f46e5] focus:border-[#4f46e5] block w-full p-2.5 outline-none transition-all cursor-pointer truncate"
                >
                  <option value="All">All Credit Hours</option>
                  {uniqueCreditHours.map(credit => (
                    <option key={credit} value={credit} title={credit}>{credit}</option>
                  ))}
                </select>
              </div>

              {/* Instructor Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Instructor</label>
                <select
                  value={filterInstructor}
                  onChange={(e) => setFilterInstructor(e.target.value)}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-[#4f46e5] focus:border-[#4f46e5] block w-full p-2.5 outline-none transition-all cursor-pointer truncate"
                >
                  <option value="All">All Instructors</option>
                  {uniqueInstructors.map(instructor => (
                    <option key={instructor} value={instructor} title={instructor}>{instructor}</option>
                  ))}
                </select>
              </div>

              {/* Color Filter */}
              <div className="flex flex-col gap-2 lg:col-span-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Color Tag</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button 
                    onClick={() => setFilterColor('All')}
                    className={`h-8 px-3 rounded-full text-xs font-bold flex items-center justify-center transition-all ${filterColor === 'All' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                  >
                    All
                  </button>
                  {uniqueColors.map(color => (
                    <button
                      key={color}
                      onClick={() => setFilterColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${filterColor === color ? 'scale-110 shadow-sm' : 'border-transparent hover:scale-110'}`}
                      style={{ backgroundColor: color, borderColor: filterColor === color ? '#1e293b' : 'transparent' }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              
              {/* Clear Filters */}
              {(filterPrereq !== 'All' || filterCredits !== 'All' || filterInstructor !== 'All' || filterColor !== 'All' || selectedSemester !== 'All') && (
                <div className="flex flex-col justify-end lg:col-start-3 mb-1">
                   <button 
                     onClick={() => {
                        setSelectedSemester('All');
                        setFilterPrereq('All');
                        setFilterCredits('All');
                        setFilterInstructor('All');
                        setFilterColor('All');
                     }}
                     className="flex items-center justify-center gap-2 text-sm font-semibold text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100 px-4 py-2.5 rounded-xl transition-colors"
                   >
                     <X className="w-4 h-4" />
                     Clear Filters
                   </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Timeline Flow */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-y-12 pb-32 place-items-center">
          <TimelineCurve />

          {/* Fallback Timeline Line for mobile */}
          <div className="absolute top-[40px] bottom-[100px] left-1/2 -translate-x-1/2 w-[3px] border-l-[3px] border-dashed border-[#4f46e5]/40 md:hidden -z-10" />

          {filteredTimeline.length === 0 ? (
            <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 max-w-sm">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-700 mb-2">No subjects found</h3>
                <p className="text-slate-500 text-sm">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={() => {
                      setSelectedSemester('All');
                      setFilterPrereq('All');
                      setFilterCredits('All');
                      setFilterInstructor('All');
                      setFilterColor('All');
                  }}
                  className="mt-6 text-[#4f46e5] text-sm font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          ) : filteredTimeline.map((sem, semIndex, filteredData) => {
            const previousNodesCount = filteredData.slice(0, semIndex).reduce((sum, s) => sum + s.subjects.length, 0);

            return (
              <React.Fragment key={sem.semesterName}>
                {/* Semester Pill */}
                <div className={`col-span-1 md:col-span-2 flex justify-center w-full z-10 ${semIndex === 0 ? 'mb-4 md:mb-8' : 'mt-12 md:mt-16 mb-4 md:mb-8'}`}>
                  <div className="bg-white px-8 py-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/50 hover:-translate-y-1 transition-transform">
                    <span className="text-[#5145cd] text-xl sm:text-2xl font-bold tracking-tight text-center block whitespace-nowrap">{sem.semesterName}</span>
                  </div>
                </div>

                {sem.subjects.map((subjectKey, i) => {
                  const isLeft = (previousNodesCount + i) % 2 === 0;
                  const subject = subjectsData[subjectKey];
                  const isSelected = selectedSubject === subjectKey;
                  const hasPrereq = subject.prerequisites !== 'None';

                  return (
                    <React.Fragment key={subjectKey}>
                      {!isLeft && <div className="col-span-1 hidden md:block" />}
                      
                      <div className={`col-span-1 flex justify-center w-full ${isLeft ? 'md:justify-end pr-0 md:pr-10 lg:pr-16' : 'md:justify-start pl-0 md:pl-10 lg:pl-16'} z-10 mt-0`}>
                        <div 
                          className={`flex flex-col items-center gap-4 sm:gap-6 w-[280px] sm:w-[320px] md:w-[380px] cursor-pointer group transition-all duration-300 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} ${isSelected ? 'scale-105 z-20' : 'hover:-translate-y-1 hover:scale-105 hover:opacity-90'}`}
                          onClick={() => setSelectedSubject(isSelected ? null : subjectKey)}
                        >
                          <div className="shrink-0 relative">
                            <Hexagon style={{ backgroundColor: subject.color }}>
                              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                            </Hexagon>
                          </div>

                          <div className={`text-center w-full ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5" style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}>
                              <div className="text-xs font-black tracking-widest uppercase opacity-90 transition-colors" style={{ color: subject.color }}>{subject.code}</div>
                              {hasPrereq && (
                                <div className="relative group/tooltip flex items-center justify-center cursor-help">
                                  <Lock className="w-3.5 h-3.5 text-slate-400 group-hover/tooltip:text-slate-600 transition-colors mt-[1px]" />
                                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[150px] sm:max-w-[200px] bg-slate-800 text-white text-[10px] sm:text-xs rounded py-1.5 px-2.5 z-30 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] opacity-0 scale-95 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none text-center">
                                    <span className="font-bold text-slate-300">Prereq:</span> {subject.prerequisites}
                                  </div>
                                </div>
                              )}
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} 
                                style={{ color: subject.color }}
                              />
                            </div>
                            <div className={`text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-tight ${isSelected ? 'mb-4' : 'mb-2'} group-hover:text-slate-900 transition-colors`}>{subject.title}</div>
                            
                            {isSelected && (
                              <div className="text-left bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 mt-3 text-sm text-slate-600 animate-in slide-in-from-top-2 fade-in duration-200 cursor-auto" onClick={e => e.stopPropagation()}>
                                <p className="leading-relaxed mb-4">{subject.description}</p>
                                
                                <div className="space-y-3 pt-3 border-t border-slate-100">
                                  <div className="flex items-start gap-3">
                                    <div className="p-1.5 rounded-lg bg-slate-100 shrink-0 text-slate-500">
                                      <BookOpen className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Prerequisites</div>
                                      <div className="text-slate-700 font-medium text-xs font-mono">{subject.prerequisites}</div>
                                    </div>
                                  </div>

                                  <div className="flex items-start gap-3">
                                    <div className="p-1.5 rounded-lg bg-slate-100 shrink-0 text-slate-500">
                                      <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Credit Hours</div>
                                      <div className="text-slate-700 font-medium text-xs">{subject.creditHours}</div>
                                    </div>
                                  </div>

                                  <div className="flex items-start gap-3">
                                    <div className="p-1.5 rounded-lg bg-slate-100 shrink-0 text-slate-500">
                                      <UserCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Instructor</div>
                                      <div className="text-slate-700 font-medium text-xs">{subject.instructor}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {isLeft && <div className="col-span-1 hidden md:block" />}
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </main>
    </div>
  );
}
