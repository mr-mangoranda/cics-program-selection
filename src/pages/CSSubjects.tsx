import React, { useState } from 'react';
import { Search, BookOpen, Clock, UserCircle2, Hexagon as HexagonIcon, Lock } from 'lucide-react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { subjectsData, timelineData } from '../data/subjects';

export default function CSSubjects({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<string>('All');
  
  const subjectsArray = Object.values(subjectsData);
  
  const filteredSubjects = subjectsArray.filter(subject => {
    const matchesSearch = subject.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          subject.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesSemester = true;
    if (selectedSemester !== 'All') {
      const semData = timelineData.find(sem => sem.semesterName === selectedSemester);
      if (semData) {
        matchesSemester = semData.subjects.includes(subject.code);
      } else {
        matchesSemester = false;
      }
    }

    return matchesSearch && matchesSemester;
  });

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-[#f6f3ff] via-[#f2f6ff] to-[#e1efff] font-sans text-slate-800 flex flex-col relative selection:bg-purple-200 w-full overflow-x-hidden">
      
      <RoadmapHeader onNavigate={onNavigate} currentView="cssubjects" />

      <main className="flex-grow flex flex-col items-center w-full max-w-7xl mx-auto px-6 lg:px-12 z-10 relative pb-32">
        {/* Title Group */}
        <div className="mt-8 mb-12 text-center z-10 w-full">
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-black text-center text-[#0e5cdd] leading-tight mb-4"
            style={{ textShadow: "3px 3px 0px #cfdffd" }}
          >
            CS SUBJECTS DIRECTORY
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Browse through all the courses offered in the Computer Science program. Use the search bar to find specific subjects by code or keyword.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-6 py-4 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:shadow-[0_8px_30px_rgba(37,99,235,0.1)] focus:outline-none focus:ring-2 focus:ring-[#2563eb] text-slate-800 font-medium placeholder-slate-400 transition-all text-lg"
            placeholder="Search subjects (e.g. CCC101, Calculus)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Semester Tabs */}
        <div className="w-full max-w-full overflow-x-auto pb-4 mb-4 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar flex lg:flex-wrap justify-start lg:justify-center gap-2">
          <button
            onClick={() => setSelectedSemester('All')}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              selectedSemester === 'All' 
                ? 'bg-[#2563eb] text-white shadow-md' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            All Semesters
          </button>
          {timelineData.map(sem => (
            <button
              key={sem.semesterName}
              onClick={() => setSelectedSemester(sem.semesterName)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                selectedSemester === sem.semesterName 
                  ? 'bg-[#2563eb] text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {sem.semesterName.replace('Year,', 'Yr,').replace('Semester', 'Sem')}
            </button>
          ))}
        </div>

        {/* Results Metadata */}
        <div className="w-full flex justify-between items-center mb-6 pt-2 border-t border-slate-200/60">
          <div className="text-sm font-semibold text-slate-500">
            {filteredSubjects.length} {filteredSubjects.length === 1 ? 'subject' : 'subjects'} found
          </div>
          <div className="text-sm font-bold text-[#2563eb] bg-blue-50 px-3 py-1 rounded-full">
            {filteredSubjects.reduce((total, subject) => {
              const match = subject.creditHours.match(/^(\d+)\s*Unit/i);
              return total + (match ? parseInt(match[1], 10) : 0);
            }, 0)} Total Units
          </div>
        </div>

        {/* Subjects Grid */}
        {filteredSubjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white/50 w-full max-w-3xl rounded-3xl border border-slate-200 border-dashed">
            <BookOpen className="w-16 h-16 text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-600 mb-2">No subjects found</h3>
            <p className="text-slate-500">We couldn't find anything matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 text-[#2563eb] font-bold hover:underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {filteredSubjects.map(subject => {
              const hasPrereq = subject.prerequisites !== 'None';
              
              return (
                <div key={subject.code} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col group transition-all duration-300 hover:-translate-y-1">
                  {/* Card Header (Subject Code & Title) */}
                  <div className="p-6 pb-5 relative overflow-hidden" style={{ backgroundColor: `${subject.color}15` }}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <HexagonIcon className="w-24 h-24 rotate-12" style={{ color: subject.color }} strokeWidth={1} />
                    </div>
                    
                    <div className="flex justify-between items-start mb-3 relative z-10">
                      <div className="inline-flex items-center rounded-full px-3 py-1 font-black text-xs tracking-wider" style={{ backgroundColor: subject.color, color: 'white' }}>
                        {subject.code}
                      </div>
                      
                      {hasPrereq && (
                         <div className="bg-white/80 p-1.5 rounded-full text-slate-500 group-hover:text-slate-800 transition-colors tooltip-trigger relative group/tooltip cursor-help" title={`Prerequisite: ${subject.prerequisites}`}>
                           <Lock className="w-4 h-4" />
                           <div className="absolute bottom-full right-0 mb-2 w-max max-w-[200px] bg-slate-800 text-white text-xs rounded py-1.5 px-2.5 z-30 shadow-lg opacity-0 scale-95 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none">
                              <span className="font-bold text-slate-300">Prereq:</span> {subject.prerequisites}
                           </div>
                         </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 leading-tight relative z-10 mb-1">{subject.title}</h3>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{subject.description}</p>
                    
                    {/* Meta info */}
                    <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-slate-50 shrink-0 text-slate-400">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Prerequisites</div>
                          <div className="text-slate-700 font-medium text-xs font-mono">{subject.prerequisites}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-slate-50 shrink-0 text-slate-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Credit Hours</div>
                          <div className="text-slate-700 font-medium text-xs">{subject.creditHours}</div>
                        </div>
                      </div>

                      {subject.instructor && (
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 rounded-lg bg-slate-50 shrink-0 text-slate-400">
                            <UserCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Instructor</div>
                            <div className="text-slate-700 font-medium text-xs">{subject.instructor}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
