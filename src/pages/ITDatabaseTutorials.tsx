import React, { useState } from 'react';
import { Search, FileText, PlayCircle, Download, BookOpen, ArrowLeft, FileBox, LayoutList, ChevronRight, GraduationCap, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { itdbSubjectsData as subjectsData } from '../data/itDatabaseSubjects';
import { materialsData } from '../data/materials';

export default function ITDatabaseTutorials({ onNavigate }: { onNavigate: (view: string) => void, key?: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const subjectsArray = Object.values(subjectsData);
  const [selectedSubjectCode, setSelectedSubjectCode] = useState<string | null>(null);

  const filteredSubjects = subjectsArray.filter(subject => 
    subject.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    subject.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedSubject = selectedSubjectCode ? subjectsData[selectedSubjectCode] : null;
  const subjectMaterials = selectedSubjectCode ? materialsData[selectedSubjectCode] || [] : [];
  const syllabusMaterial = subjectMaterials.find(m => m.type === 'syllabus');
  const courseContent = subjectMaterials.filter(m => m.type !== 'syllabus');

  const getIconForType = (type: string) => {
    switch (type) {
      case 'syllabus': return <FileText className="w-5 h-5 text-blue-500" />;
      case 'video': return <PlayCircle className="w-5 h-5 text-purple-500" />;
      case 'presentation': return <BookOpen className="w-5 h-5 text-amber-500" />;
      case 'assignment': return <FileBox className="w-5 h-5 text-emerald-500" />;
      case 'link': return <LinkIcon className="w-5 h-5 text-sky-500" />;
      case 'document':
      default: return <FileText className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[100dvh] bg-gradient-to-br from-[#f6f3ff] via-[#f2f6ff] to-[#e1efff] font-sans text-slate-800 flex flex-col relative selection:bg-purple-200 w-full overflow-x-hidden"
    >
      <RoadmapHeader onNavigate={onNavigate} currentView="tutorials" track="itdb" />

      <main className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-12 z-10 relative pb-20">
        <AnimatePresence mode="wait">
        {!selectedSubject ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="w-full flex flex-col"
          >
            <div className="mt-8 mb-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black text-[#9300d8] leading-tight mb-4" style={{ textShadow: "2px 2px 0px #deafff" }}>
                IT-DB LEARNING MATERIALS
              </h1>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto lg:mx-0">
                Access syllabus and lecture materials for each subject.
              </p>
            </div>

            <div className="w-full max-w-2xl mb-8 relative mx-auto lg:mx-0">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-6 py-4 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9300d8] text-slate-800 font-medium placeholder-slate-400 transition-all text-base"
                placeholder="Search subjects to view tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {filteredSubjects.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 bg-white/50 w-full max-w-3xl mx-auto rounded-3xl border border-slate-200 border-dashed"
              >
                <BookOpen className="w-16 h-16 text-slate-300 mb-4" />
                <h3 className="text-xl font-bold text-slate-600 mb-2">No subjects found</h3>
                <p className="text-slate-500">We couldn't find anything matching "{searchQuery}"</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-6 text-[#9300d8] font-bold hover:underline"
                >
                  Clear search
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                <AnimatePresence>
                {filteredSubjects.map((subject, index) => (
                  <motion.button
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    key={subject.code}
                    onClick={() => setSelectedSubjectCode(subject.code)}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] transition-all text-left group flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex items-center rounded-md px-2 py-1 font-black text-[10px] tracking-wider mb-3" style={{ backgroundColor: `${subject.color}20`, color: subject.color }}>
                        {subject.code}
                      </div>
                      <h3 className="font-bold text-sm text-slate-800 leading-tight mb-2 group-hover:text-[#9300d8] transition-colors">{subject.title}</h3>
                      <p className="text-slate-500 text-xs line-clamp-2">{subject.description}</p>
                    </div>
                    <div className="mt-4 flex items-center text-[#9300d8] font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                      View Materials <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.button>
                ))}
                </AnimatePresence>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="mt-4 duration-300"
          >
            <button 
              onClick={() => setSelectedSubjectCode(null)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </button>
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm mb-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div className="p-4 rounded-2xl shrink-0" style={{ backgroundColor: `${selectedSubject.color}15`, color: selectedSubject.color }}>
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-sm font-black tracking-widest uppercase mb-1" style={{ color: selectedSubject.color }}>{selectedSubject.code}</div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">{selectedSubject.title}</h1>
                  <p className="text-slate-500 mt-2 text-sm md:text-base leading-relaxed max-w-3xl mb-4">{selectedSubject.description}</p>
                  
                  <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wider">Prerequisite:</span>
                    <span className="font-mono font-medium text-slate-700">{selectedSubject.prerequisites}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Instructor</div>
                  <div className="text-sm font-semibold text-slate-700">{selectedSubject.instructor}</div>
                </div>
                <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Credits</div>
                  <div className="text-sm font-semibold text-slate-700">{selectedSubject.creditHours}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-4">
                  <LayoutList className="w-5 h-5 text-slate-400" />
                  Course Content & Modules
                </h2>
                
                {courseContent.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm"
                  >
                    <FileBox className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-600">No materials yet</h3>
                    <p className="text-slate-500 text-sm">Learning materials for this subject are currently being prepared.</p>
                  </motion.div>
                ) : (
                  courseContent.map((material, index) => (
                    <motion.a 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      key={material.id} 
                      href={material.url || '#'} 
                      target={material.type === 'link' ? "_blank" : undefined} 
                      rel={material.type === 'link' ? "noopener noreferrer" : undefined} 
                      download={material.type !== 'link'}
                      className="bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-purple-50 transition-colors">
                        {getIconForType(material.type)}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-slate-800 group-hover:text-[#9300d8] transition-colors line-clamp-1">{material.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500 uppercase tracking-wider">{material.type} {material.size && `• ${material.size}`}</span>
                          {material.dateAdded && <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full group-hover:bg-purple-100 group-hover:text-[#9300d8] transition-colors">{material.dateAdded}</span>}
                        </div>
                      </div>
                      <div className="p-2 text-slate-400 group-hover:text-[#9300d8] group-hover:bg-purple-100 rounded-lg transition-colors shrink-0">
                        {material.type === 'link' ? <LinkIcon className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                      </div>
                    </motion.a>
                  ))
                )}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-[#9300d8] text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 opacity-10">
                    <BookOpen className="w-32 h-32" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 relative z-10 w-[80%]">Course Syllabus</h3>
                  <p className="text-purple-100 text-sm mb-6 relative z-10 leading-relaxed">
                    Download the official course syllabus to view grading criteria, policies, and detailed learning outcomes.
                  </p>
                  {syllabusMaterial ? (
                    <a href={syllabusMaterial.url || '#'} download className="bg-white text-[#9300d8] font-bold px-5 py-2.5 rounded-xl w-full flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors relative z-10 shadow-sm">
                      <Download className="w-4 h-4" />
                      Download Syllabus ({syllabusMaterial.size || 'PDF'})
                    </a>
                  ) : (
                    <button disabled className="bg-purple-800/50 text-purple-200 font-bold px-5 py-2.5 rounded-xl w-full flex items-center justify-center gap-2 cursor-not-allowed relative z-10 shadow-inner">
                      Not Available Yet
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </main>
    </motion.div>
  );
}
