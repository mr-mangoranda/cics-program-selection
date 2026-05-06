import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Hexagon } from '../components/Hexagon';
import { TimelineCurve } from '../components/TimelineCurve';
import { RoadmapHeader } from '../components/RoadmapHeader';
import { SubjectModal, SubjectDetails } from '../components/SubjectModal';

export const subjectsData: Record<string, SubjectDetails> = {
  // 1st year 1st sem
  'CCC100': { code: 'CCC100', title: 'Fundamentals of Computing', description: 'An introduction to the fundamentals of algorithms, computer hardware, and the underlying concepts of computer science.', prerequisites: 'None', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Alan Turing', color: '#2563eb' },
  'CCC101': { code: 'CCC101', title: 'Computer Programming 1', description: 'Introductory C++ programming focusing on logic formulation, basic syntax, and procedural programming paradigms.', prerequisites: 'None', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Ada Lovelace', color: '#ef7e1a' },
  'MAT051': { code: 'MAT051', title: 'Calculus 1', description: 'A comprehensive study of limits, continuity, derivatives, and an introduction to integration techniques.', prerequisites: 'Pre-calculus', creditHours: '5 Units (5 hrs lec)', instructor: 'Dr. Isaac Newton', color: '#8b5cf6' },
  
  // 1st year 2nd sem
  'CCC102': { code: 'CCC102', title: 'Computer Programming 2', description: 'Advanced C++ programming concepts, focusing on object-oriented programming, data abstraction, and complex logic.', prerequisites: 'CCC101', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Tim Berners-Lee', color: '#10b981' },
  'MAT061': { code: 'MAT061', title: 'Calculus 2', description: 'Continuation of Calculus 1, covering integration applications, transcendental functions, and infinite series.', prerequisites: 'MAT051', creditHours: '5 Units (5 hrs lec)', instructor: 'Dr. Gottfried Leibniz', color: '#f43f5e' },
  'MAT101': { code: 'MAT101', title: 'Logic and Set Theory', description: 'Introduction to mathematical logic, set operations, relations, functions, and fundamental proof techniques.', prerequisites: 'MAT051', creditHours: '3 Units (3 hrs lec)', instructor: 'Dr. George Boole', color: '#0ea5e9' },
  
  // 2nd year 1st sem
  'CCC121': { code: 'CCC121', title: 'Data Structures and Algorithms', description: 'Study of standard data structures and algorithms for efficient data storage and retrieval.', prerequisites: 'CCC102', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Donald Knuth', color: '#ec4899' },
  'CSC130': { code: 'CSC130', title: 'Discrete Structures', description: 'Mathematical foundations of computer science, including logic, sets, relations, and graphs.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Dr. Kenneth Rosen', color: '#f59e0b' },
  'CSC142': { code: 'CSC142', title: 'Automata, Computability, and Complexity', description: 'Formal language theory, Turing machines, and computational complexity limits.', prerequisites: 'MAT101', creditHours: '3 Units (3 hrs lec)', instructor: 'Dr. Stephen Cook', color: '#6366f1' },
  'STT101': { code: 'STT101', title: 'Descriptive and Inferential Statistics', description: 'Statistical methods, probability theory, hypothesis testing, and data analysis.', prerequisites: 'None', creditHours: '4 Units (4 hrs lec)', instructor: 'Prof. Ronald Fisher', color: '#14b8a6' },
  
  // 2nd year 2nd sem
  'CCC151': { code: 'CCC151', title: 'Information Management', description: 'Database system concepts, relational models, SQL, and database design.', prerequisites: 'CCC121', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Edgar Codd', color: '#8b5cf6' },
  'CSC112': { code: 'CSC112', title: 'Computer Organization and Architecture', description: 'Digital logic, computer design, instruction set architecture, and memory systems.', prerequisites: 'CCC102', creditHours: '4 Units (3 hrs lec, 3 hrs lab)', instructor: 'Dr. John von Neumann', color: '#ef4444' },
  'CSC124': { code: 'CSC124', title: 'Design and Analysis of Algorithm', description: 'Advanced algorithm design techniques, rigorous analysis of time and space complexity.', prerequisites: 'CCC121', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Thomas Cormen', color: '#10b981' },
  'CSC186': { code: 'CSC186', title: 'Human – Computer Interaction', description: 'User interface design, usability principles, and evaluation methods.', prerequisites: 'CCC102', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Jakob Nielsen', color: '#f97316' },
  
  // 3rd year 1st sem
  'CCC181': { code: 'CCC181', title: 'Applications Development and Emerging Tech', description: 'Modern application development using contemporary frameworks and technologies.', prerequisites: 'CCC151', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Staff', color: '#3b82f6' },
  'CSC145': { code: 'CSC145', title: 'Programming Languages', description: 'Syntax, semantics, and implementation of programming language paradigms.', prerequisites: 'CSC142', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Grace Hopper', color: '#d946ef' },
  'CSC155': { code: 'CSC155', title: 'Introduction to Operating Systems', description: 'Process management, memory management, file systems, and OS design principles.', prerequisites: 'CSC112', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Linus Torvalds', color: '#eab308' },
  'CSC171': { code: 'CSC171', title: 'Introduction to Artificial Intelligence', description: 'Fundamental AI concepts, search, knowledge representation, and machine learning.', prerequisites: 'CCC121', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. John McCarthy', color: '#0ea5e9' },
  'CSC181': { code: 'CSC181', title: 'Software Engineering', description: 'Software development lifecycles, project management, and quality assurance.', prerequisites: 'CCC151', creditHours: '4 Units (3 hrs lec, 3 hrs lab)', instructor: 'Dr. Margaret Hamilton', color: '#f43f5e' },
  
  // 3rd year 2nd sem
  'CSC113': { code: 'CSC113', title: 'Computer Networks and Data Communications', description: 'Network architectures, protocols, data transmission, and network security.', prerequisites: 'CSC155', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Vint Cerf', color: '#6366f1' },
  'CSC133': { code: 'CSC133', title: 'Modeling and Simulation', description: 'Techniques for modeling complex systems and computer simulation methods.', prerequisites: 'MAT061', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Staff', color: '#10b981' },
  'CSC161': { code: 'CSC161', title: 'Computer Systems Security', description: 'Cybersecurity principles, cryptography, network security, and threat mitigation.', prerequisites: 'CSC155', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Bruce Schneier', color: '#f59e0b' },
  'CSC175': { code: 'CSC175', title: 'Parallel and Distributed Computing', description: 'Algorithms and architectures for concurrent, parallel, and distributed systems.', prerequisites: 'CSC155', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Leslie Lamport', color: '#ec4899' },
  'CSC194': { code: 'CSC194', title: 'Computer Science Seminar', description: 'Advanced topics, research presentations, and contemporary issues in CS.', prerequisites: 'CSC181', creditHours: '1 Unit (1 hr lec)', instructor: 'Department Chair', color: '#8b5cf6' },
  
  // 3rd year summer
  'CSC197': { code: 'CSC197', title: 'Practicum', description: 'Industry internship and practical application of computer science skills.', prerequisites: 'Required credits', creditHours: '200 Hours', instructor: 'Practicum Coordinator', color: '#14b8a6' },
  
  // 4th year 1st sem
  'CSC193': { code: 'CSC193', title: 'Special Topics in Computer Science', description: 'In-depth study of a specialized or highly current topic in computer science.', prerequisites: 'CSC194', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Visiting Professor', color: '#ef4444' },
  'CSC198': { code: 'CSC198', title: 'Research Methods', description: 'Methodologies for conducting scientific research in computer science.', prerequisites: 'CSC194', creditHours: '3 Units (3 hrs lec)', instructor: 'Research Faculty', color: '#3b82f6' },
  'ELEC1': { code: 'ELEC1', title: 'CS Elective 1', description: 'First professional computer science elective course.', prerequisites: 'Varies', creditHours: '3 Units', instructor: 'Elective Faculty', color: '#f97316' },
  'ELEC2': { code: 'ELEC2', title: 'Free Technical Elective 1', description: 'First free technical elective course.', prerequisites: 'Varies', creditHours: '3 Units', instructor: 'Elective Faculty', color: '#d946ef' },
  
  // 4th year 2nd sem
  'CSC109': { code: 'CSC109', title: 'Social, Ethical, and Professional Issues', description: 'Ethical frameworks, professional responsibilities, and societal impact of computing.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Ethics Faculty', color: '#8b5cf6' },
  'CSC199': { code: 'CSC199', title: 'Undergraduate Thesis', description: 'Capstone project involving independent research and implementation.', prerequisites: 'CSC198', creditHours: '3 Units (1 hr lec, 6 hrs lab)', instructor: 'Thesis Advisor', color: '#10b981' },
  'ELEC3': { code: 'ELEC3', title: 'Free Technical Elective 2', description: 'Second free technical elective course.', prerequisites: 'Varies', creditHours: '3 Units', instructor: 'Elective Faculty', color: '#0ea5e9' }
};

export const timelineData = [
  {
    semesterName: 'First Year, First Semester',
    subjects: ['CCC100', 'CCC101', 'MAT051']
  },
  {
    semesterName: 'First Year, Second Semester',
    subjects: ['CCC102', 'MAT061', 'MAT101']
  },
  {
    semesterName: 'Second Year, First Semester',
    subjects: ['CCC121', 'CSC130', 'CSC142', 'STT101']
  },
  {
    semesterName: 'Second Year, Second Semester',
    subjects: ['CCC151', 'CSC112', 'CSC124', 'CSC186']
  },
  {
    semesterName: 'Third Year, First Semester',
    subjects: ['CCC181', 'CSC145', 'CSC155', 'CSC171', 'CSC181']
  },
  {
    semesterName: 'Third Year, Second Semester',
    subjects: ['CSC113', 'CSC133', 'CSC161', 'CSC175', 'CSC194']
  },
  {
    semesterName: 'Third Year, SUMMER',
    subjects: ['CSC197']
  },
  {
    semesterName: 'Fourth Year, First Semester',
    subjects: ['CSC193', 'CSC198', 'ELEC1', 'ELEC2']
  },
  {
    semesterName: 'Fourth Year, Second Semester',
    subjects: ['CSC109', 'CSC199', 'ELEC3']
  }
];

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
        <div className="relative grid grid-cols-1 md:grid-cols-2 w-full gap-y-12 pb-32 place-items-center">
          <TimelineCurve />

          {/* Fallback Timeline Line for mobile */}
          <div className="absolute top-[40px] bottom-[100px] left-1/2 -translate-x-1/2 w-[3px] border-l-[3px] border-dashed border-[#4f46e5]/40 md:hidden -z-10" />

          {timelineData.map((sem, semIndex) => {
            const previousNodesCount = timelineData.slice(0, semIndex).reduce((sum, s) => sum + s.subjects.length, 0);

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

                  return (
                    <React.Fragment key={subjectKey}>
                      {!isLeft && <div className="col-span-1 hidden md:block" />}
                      
                      <div className={`col-span-1 flex justify-center w-full ${isLeft ? 'md:justify-end pr-0 md:pr-10 lg:pr-16' : 'md:justify-start pl-0 md:pl-10 lg:pl-16'} z-10 mt-0`}>
                        <div 
                          className={`flex flex-col items-center gap-4 sm:gap-6 w-[280px] sm:w-[320px] md:w-[380px] cursor-pointer group hover:opacity-90 transition-all duration-300 ${isLeft ? 'md:flex-row hover:scale-105' : 'md:flex-row-reverse hover:-translate-y-1 hover:scale-105'}`}
                          onClick={() => setSelectedSubject(subjectKey)}
                        >
                          <Hexagon style={{ backgroundColor: subject.color }}>
                            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                          </Hexagon>

                          <div className={`text-center transition-transform duration-300 w-full ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                            <div className={`text-xs font-black tracking-widest mb-1.5 uppercase opacity-90 group-hover:opacity-100 transition-colors`} style={{ color: subject.color }}>{subject.code}</div>
                            <div className="text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-tight mb-2 group-hover:text-slate-900 transition-colors">{subject.title}</div>
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
