export const itdbSubjectsData: Record<string, any> = {
  // First Year, First Semester
  'GEC101': { code: 'GEC101', title: 'Understanding the Self', description: 'Nature of identity, factors and forces that affect the development and maintenance of personal identity.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'GEC102': { code: 'GEC102', title: 'Purposive Communication', description: 'Writing, speaking, and presenting to different audiences and for various purposes.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'MAT104': { code: 'MAT104', title: 'Discrete Structures', description: 'Mathematical logic, set theory, functions, relations, and graphs.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#f59e0b' },
  'GEC104': { code: 'GEC104', title: 'Mathematics in the Modern World', description: 'Nature of mathematics, appreciation of its practical, intellectual, and aesthetic dimensions.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'CCC100': { code: 'CCC100', title: 'Fundamentals of Computing', description: 'Overview of computing, computers, and the Internet.', prerequisites: 'None', creditHours: '5 Units', instructor: 'CS Faculty', color: '#0ea5e9' },
  'CCC101': { code: 'CCC101', title: 'Computer Programming 1', description: 'Introduction to programming concepts, control structures, and basic algorithms.', prerequisites: 'None', creditHours: '5 Units', instructor: 'CS Faculty', color: '#8b5cf6' },
  'PED001': { code: 'PED001', title: 'Exercise Prescription and Management', description: 'Physical fitness and wellness.', prerequisites: 'None', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },
  'NST001': { code: 'NST001', title: 'National Service Training Program 1', description: 'Civic welfare training service.', prerequisites: 'None', creditHours: '3 Units', instructor: 'NSTP Faculty', color: '#14b8a6' },

  // First Year, Second Semester
  'GEC103': { code: 'GEC103', title: 'The Contemporary World', description: 'Globalization and its impact on individuals, communities, and nations.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'GEC105': { code: 'GEC105', title: 'Readings in Philippine History', description: 'Philippine history viewed from the lens of selected primary sources.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'GEC106': { code: 'GEC106', title: 'Art Appreciation', description: 'Nature, function, and appreciation of the arts in contemporary society.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'FPE101': { code: 'FPE101', title: 'Fundamental of Peace Education', description: 'Concepts of peace, conflict resolution, and peacebuilding.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'MAT051': { code: 'MAT051', title: 'Calculus 1', description: 'Limits, continuity, derivatives, and applications of differential calculus.', prerequisites: 'None', creditHours: '5 Units', instructor: 'Math Faculty', color: '#f59e0b' },
  'CCC102': { code: 'CCC102', title: 'Computer Programming 2', description: 'Advanced programming concepts, object-oriented programming principles.', prerequisites: 'CCC101', creditHours: '5 Units', instructor: 'CS Faculty', color: '#8b5cf6' },
  'PED002': { code: 'PED002', title: 'Dance / Martial Arts', description: 'Physical education covering dance or basic martial arts.', prerequisites: 'PED001', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },
  'NST002': { code: 'NST002', title: 'National Service Training Program 2', description: 'Civic welfare training service continuation.', prerequisites: 'NST001', creditHours: '3 Units', instructor: 'NSTP Faculty', color: '#14b8a6' },

  // Second Year, First Semester
  'GEC107': { code: 'GEC107', title: 'Ethics', description: 'Principles of ethical behavior in modern society.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'GEC108': { code: 'GEC108', title: 'Science, Technology and Society', description: 'Interactions between science and technology and social, cultural, political, and economic contexts.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'LangElect': { code: 'LangElect', title: 'Foreign Language', description: 'Basic communication skills in a selected foreign language.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'MAT061': { code: 'MAT061', title: 'Calculus 2', description: 'Integral calculus and its applications.', prerequisites: 'MAT051', creditHours: '5 Units', instructor: 'Math Faculty', color: '#f59e0b' },
  'CCC121': { code: 'CCC121', title: 'Data Structures and Algorithms', description: 'Design, implementation, and analysis of fundamental data structures and algorithms.', prerequisites: 'CCC102', creditHours: '5 Units', instructor: 'CS Faculty', color: '#8b5cf6' },
  'ITE131': { code: 'ITE131', title: 'Computer Architecture and Operating Systems', description: 'Organization and architecture of computer systems, process management, and memory management.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IT Faculty', color: '#ef4444' },
  'PED003': { code: 'PED003', title: 'Individual/Dual Sports', description: 'Physical education covering individual and dual sports.', prerequisites: 'PED001', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },

  // Second Year, Second Semester
  'GEC109': { code: 'GEC109', title: 'Life and Works of Rizal', description: 'Life, works, and writings of Jose Rizal.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ITE114': { code: 'ITE114', title: 'Numerical Linear Algebra/Technical Elective', description: 'Matrix theory, linear equations, and numerical methods.', prerequisites: 'MAT104, CCC101', creditHours: '5 Units', instructor: 'IT Faculty', color: '#f59e0b' },
  'STT071': { code: 'STT071', title: 'Probability and Statistical Inference', description: 'Probability distributions, statistical inference, and hypothesis testing.', prerequisites: 'CCC102', creditHours: '2 Units', instructor: 'Math Faculty', color: '#f59e0b' },
  'STT071-1': { code: 'STT071-1', title: 'Probability and Statistical Inference (Lab)', description: 'Laboratory component for STT071.', prerequisites: 'CCC102', creditHours: '1 Unit', instructor: 'Math Faculty', color: '#f59e0b' },
  'ITE125': { code: 'ITE125', title: 'Introduction to Human Computer Interaction', description: 'Principles and practices of user interface design and evaluation.', prerequisites: 'CCC102', creditHours: '5 Units', instructor: 'IT Faculty', color: '#ec4899' },
  'ITE132': { code: 'ITE132', title: 'Fundamentals of Computer Networks', description: 'Data communication, network models, protocols, and security.', prerequisites: 'ITE131', creditHours: '5 Units', instructor: 'IT Faculty', color: '#ef4444' },
  'CCC151': { code: 'CCC151', title: 'Information Management', description: 'Database concepts, data modeling, relational databases, and SQL.', prerequisites: 'CCC121', creditHours: '5 Units', instructor: 'IT Faculty', color: '#3b82f6' },
  'PED004': { code: 'PED004', title: 'Team Sports', description: 'Physical education covering team sports.', prerequisites: 'PED001', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },

  // Third Year, First Semester
  'HIS003': { code: 'HIS003', title: 'History of Filipino Muslims', description: 'History and culture of Filipino Muslims and indigenous peoples.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'FIL101': { code: 'FIL101', title: 'Wika at Kultura', description: 'Wika at kultura sa mapayapang lipunan.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ITE152': { code: 'ITE152', title: 'Advance Databases', description: 'Advanced database management concepts, transaction processing, and query optimization.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#2563eb' },
  'ISY108': { code: 'ISY108', title: 'Requirements Engineering', description: 'Elicitation, analysis, specification, and validation of software requirements.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#eab308' },
  'CCC181': { code: 'CCC181', title: 'Application Dev and Emerging Tech', description: 'Modern application development practices and emerging technologies.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#8b5cf6' },
  'ITE191': { code: 'ITE191', title: 'CAPSTONE 1 / Research Methods', description: 'Research methodologies and preparation for the IT capstone project.', prerequisites: 'ITE132, CCC151', creditHours: '3 Units', instructor: 'IT Faculty', color: '#d946ef' },
  'TechElect1': { code: 'TechElect1', title: 'Technical Elective 1', description: 'Specialized topic in Database Systems.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#14b8a6' },

  // Third Year, Second Semester
  'FIL102': { code: 'FIL102', title: 'Ekokritisismo at Pagpahalaga', description: 'Literature focusing on environment and nature.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ITE153': { code: 'ITE153', title: 'Intro to AI and Expert Systems', description: 'Fundamental concepts of artificial intelligence and expert systems.', prerequisites: 'CCC121', creditHours: '5 Units', instructor: 'IT Faculty', color: '#f43f5e' },
  'ITE182': { code: 'ITE182', title: 'System Integration, Admin and Maintenance', description: 'Integration, administration, and maintaining enterprise IT systems.', prerequisites: 'CCC151', creditHours: '3 Units', instructor: 'IT Faculty', color: '#0ea5e9' },
  'ITE193': { code: 'ITE193', title: 'Special Topics in IT', description: 'Current and emerging topics in Information Technology.', prerequisites: 'ITE152', creditHours: '3 Units', instructor: 'IT Faculty', color: '#8b5cf6' },
  'ITE192': { code: 'ITE192', title: 'CAPSTONE 2 / Undergrad Thesis', description: 'Implementation and defense of the IT capstone project.', prerequisites: 'ITE191', creditHours: '3 Units', instructor: 'IT Faculty', color: '#d946ef' },
  'TechElect2': { code: 'TechElect2', title: 'Technical Elective 2', description: 'Specialized topic in Database Systems.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#14b8a6' },
  'TechElect3': { code: 'TechElect3', title: 'Technical Elective 3', description: 'Specialized topic in Database Systems.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#14b8a6' },

  // Fourth Year, First Semester
  'ENT101': { code: 'ENT101', title: 'Startup Essentials', description: 'Fundamentals of innovation-driven entrepreneurship.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#f59e0b' },
  'ITE183': { code: 'ITE183', title: 'Web Systems and Technologies', description: 'Advanced web development and system integration.', prerequisites: 'CCC181', creditHours: '5 Units', instructor: 'IT Faculty', color: '#3b82f6' },
  'ITE184': { code: 'ITE184', title: 'Social, Legal and Professional Issues', description: 'Ethical, legal, and professional responsibilities of IT practitioners.', prerequisites: 'GEC107', creditHours: '3 Units', instructor: 'IT Faculty', color: '#64748b' },
  'ITE185': { code: 'ITE185', title: 'Information Assurance and Security', description: 'Security policies, models, cryptography, and network security.', prerequisites: 'CCC151', creditHours: '3 Units', instructor: 'IT Faculty', color: '#ef4444' },
  'TechElect4': { code: 'TechElect4', title: 'Technical Elective 4', description: 'Specialized topic in Database Systems.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#14b8a6' },
  'TechElect5': { code: 'TechElect5', title: 'Technical Elective 5', description: 'Specialized topic in Database Systems.', prerequisites: 'CCC151', creditHours: '5 Units', instructor: 'IT Faculty', color: '#14b8a6' },

  // Fourth Year, Second Semester
  'ITE197': { code: 'ITE197', title: 'On-the-Job Training', description: 'Industry internship and practical training.', prerequisites: 'None', creditHours: '6 Units', instructor: 'IT Coordinator', color: '#f97316' }
};

export const itdbTimelineData = [
  {
    semesterName: 'First Year, First Semester',
    subjects: ['GEC101', 'GEC102', 'MAT104', 'GEC104', 'CCC100', 'CCC101', 'PED001', 'NST001']
  },
  {
    semesterName: 'First Year, Second Semester',
    subjects: ['GEC103', 'GEC105', 'GEC106', 'FPE101', 'MAT051', 'CCC102', 'PED002', 'NST002']
  },
  {
    semesterName: 'Second Year, First Semester',
    subjects: ['GEC107', 'GEC108', 'LangElect', 'MAT061', 'CCC121', 'ITE131', 'PED003']
  },
  {
    semesterName: 'Second Year, Second Semester',
    subjects: ['GEC109', 'ITE114', 'STT071', 'STT071-1', 'ITE125', 'ITE132', 'CCC151', 'PED004']
  },
  {
    semesterName: 'Third Year, First Semester',
    subjects: ['HIS003', 'FIL101', 'ITE152', 'ISY108', 'CCC181', 'ITE191', 'TechElect1']
  },
  {
    semesterName: 'Third Year, Second Semester',
    subjects: ['FIL102', 'ITE153', 'ITE182', 'ITE193', 'ITE192', 'TechElect2', 'TechElect3']
  },
  {
    semesterName: 'Fourth Year, First Semester',
    subjects: ['ENT101', 'ITE183', 'ITE184', 'ITE185', 'TechElect4', 'TechElect5']
  },
  {
    semesterName: 'Fourth Year, Second Semester',
    subjects: ['ITE197']
  }
];
