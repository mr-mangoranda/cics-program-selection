export const itsysSubjectsData: Record<string, any> = {
  // First Year, First Semester
  'CCC100': { code: 'CCC100', title: 'Introduction to Computing', description: 'Overview of computing, computers, and the Internet.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#0ea5e9' },
  'CCC101': { code: 'CCC101', title: 'Computer Programming 1', description: 'Introduction to programming concepts, control structures, and basic algorithms.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#a855f7' },
  'GEC101': { code: 'GEC101', title: 'Understanding the Self', description: 'Nature of identity, factors and forces that affect the development and maintenance of personal identity.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'GEC104': { code: 'GEC104', title: 'Mathematics in the Modern World', description: 'Nature of mathematics, appreciation of its practical, intellectual, and aesthetic dimensions.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ISY101': { code: 'ISY101', title: 'Fundamentals of Organization and Management', description: 'Basic concepts and theories of organization and management.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#3b82f6' },
  'ISY102': { code: 'ISY102', title: 'Fundamentals of Information Systems', description: 'Introduction to systems and development concepts, information technology, and application software.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#8b5cf6' },
  'PED001': { code: 'PED001', title: 'Exercise Prescription and Management', description: 'Physical fitness and wellness.', prerequisites: 'None', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },
  'NST001': { code: 'NST001', title: 'National Science Training Program 1', description: 'Civic welfare training service.', prerequisites: 'None', creditHours: '(3)', instructor: 'NSTP Faculty', color: '#14b8a6' },

  // First Year, Second Semester
  'CCC102': { code: 'CCC102', title: 'Computer Programming 2', description: 'Advanced programming concepts, object-oriented programming principles.', prerequisites: 'CCC101', creditHours: '3 Units', instructor: 'IS Faculty', color: '#a855f7' },
  'FPE101': { code: 'FPE101', title: 'Fundamentals of Peace Education', description: 'Concepts of peace, conflict resolution, and peacebuilding.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ISY103': { code: 'ISY103', title: 'Professional Issues in Information Systems', description: 'Social, legal, and ethical issues in computing.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#ef4444' },
  'ISY104': { code: 'ISY104', title: 'Financial Management', description: 'Principles of finance and accounting for IS evaluation.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#f59e0b' },
  'ISY105': { code: 'ISY105', title: 'Evaluation of Business Performance', description: 'Evaluating business performance and processes.', prerequisites: 'ISY101, ISY102', creditHours: '3 Units', instructor: 'IS Faculty', color: '#14b8a6' },
  'MAT051': { code: 'MAT051', title: 'Calculus 1', description: 'Limits, continuity, derivatives, and applications of differential calculus.', prerequisites: 'None', creditHours: '5 Units', instructor: 'Math Faculty', color: '#10b981' },
  'PED002': { code: 'PED002', title: 'Dance/Martial Arts', description: 'Physical education covering dance or basic martial arts.', prerequisites: 'PED001', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },
  'NST002': { code: 'NST002', title: 'National Service Training Program 2', description: 'Civic welfare training service continuation.', prerequisites: 'NST001', creditHours: '(3)', instructor: 'NSTP Faculty', color: '#14b8a6' },

  // Second Year, First Semester
  'CCC121': { code: 'CCC121', title: 'Data Structures and Algorithms', description: 'Design, implementation, and analysis of fundamental data structures and algorithms.', prerequisites: 'CCC102', creditHours: '3 Units', instructor: 'IS Faculty', color: '#a855f7' },
  'GEC102': { code: 'GEC102', title: 'Purposive Communication', description: 'Writing, speaking, and presenting to different audiences and for various purposes.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ISY106': { code: 'ISY106', title: 'IT Infrastructure and Network Technologies', description: 'Fundamentals of IT infrastructure and network technologies.', prerequisites: 'ISY102', creditHours: '3 Units', instructor: 'IS Faculty', color: '#ef4444' },
  'GEC106': { code: 'GEC106', title: 'Art Appreciation', description: 'Nature, function, and appreciation of the arts in contemporary society.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ISY113': { code: 'ISY113', title: 'Operations Research', description: 'Analytical methods and mathematical modeling.', prerequisites: 'MAT051', creditHours: '3 Units', instructor: 'IS Faculty', color: '#f59e0b' },
  'STT071': { code: 'STT071', title: 'Probability and Statistical Inference for Computing Systems', description: 'Probability distributions, statistical inference, and hypothesis testing.', prerequisites: 'MAT051', creditHours: '2 Units', instructor: 'Math Faculty', color: '#10b981' },
  'STT071.1': { code: 'STT071.1', title: 'Probability and Statistical Inference for Computing Systems (Lab)', description: 'Laboratory component for STT071.', prerequisites: 'MAT051', creditHours: '1 Unit', instructor: 'Math Faculty', color: '#10b981' },
  'PED003': { code: 'PED003', title: 'Individual/Dual Sports', description: 'Physical education covering individual and dual sports.', prerequisites: 'PED001', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },

  // Second Year, Second Semester
  'CCC151': { code: 'CCC151', title: 'Information Management', description: 'Database concepts, data modeling, relational databases, and SQL.', prerequisites: 'CCC121', creditHours: '3 Units', instructor: 'IS Faculty', color: '#3b82f6' },
  'GEC103': { code: 'GEC103', title: 'The Contemporary World', description: 'Globalization and its impact on individuals, communities, and nations.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ISY107': { code: 'ISY107', title: 'Intelligent Information Systems', description: 'Use of AI and intelligent systems in business applications.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#ec4899' },
  'ISY109': { code: 'ISY109', title: 'IS Project Management', description: 'Managing information systems projects from inception to deployment.', prerequisites: 'ISY101, ISY102', creditHours: '3 Units', instructor: 'IS Faculty', color: '#eab308' },
  'ISY111': { code: 'ISY111', title: 'Business Process Management', description: 'Modeling, implementing, and optimizing business processes.', prerequisites: 'ISY105', creditHours: '3 Units', instructor: 'IS Faculty', color: '#8b5cf6' },
  'ISY112': { code: 'ISY112', title: 'Enterprise Systems', description: 'Architecture, selection, and implementation of enterprise systems.', prerequisites: 'ISY105', creditHours: '3 Units', instructor: 'IS Faculty', color: '#d946ef' },
  'PED004': { code: 'PED004', title: 'Team Sports', description: 'Physical education covering team sports.', prerequisites: 'PED001', creditHours: '2 Units', instructor: 'PE Faculty', color: '#10b981' },

  // Third Year, First Semester
  'CCC181': { code: 'CCC181', title: 'Applications Development and Emerging Technologies', description: 'Modern application development practices and emerging technologies.', prerequisites: 'CCC151', creditHours: '3 Units', instructor: 'IS Faculty', color: '#a855f7' },
  'ISY108': { code: 'ISY108', title: 'Requirements Engineering', description: 'Elicitation, analysis, specification, and validation of software requirements.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#eab308' },
  'GEC107': { code: 'GEC107', title: 'Ethics', description: 'Principles of ethical behavior in modern society.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ISY115': { code: 'ISY115', title: 'Business Intelligence', description: 'Data warehousing, mining, and visualization for business intelligence.', prerequisites: 'ISY112, ISY113', creditHours: '3 Units', instructor: 'IS Faculty', color: '#f59e0b' },
  'ISY116': { code: 'ISY116', title: 'Special Topics in Information Systems', description: 'Current and emerging topics in Information Systems.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#d946ef' },
  'TechElec1': { code: 'TechElec1', title: 'Technical Elective 1', description: 'Specialized topic in Information Systems.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#14b8a6' },
  'TechElec2': { code: 'TechElec2', title: 'Technical Elective 2', description: 'Specialized topic in Information Systems.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#14b8a6' },

  // Third Year, Second Semester
  'ISY191': { code: 'ISY191', title: 'Capstone Project 1 / Methods of Research', description: 'Research methodologies and preparation for the IS capstone project.', prerequisites: 'ISY112', creditHours: '3 Units', instructor: 'IS Faculty', color: '#d946ef' },
  'ISY114': { code: 'ISY114', title: 'IS Strategy, Management, and Acquisition', description: 'Strategic management of information systems resources.', prerequisites: 'ISY105', creditHours: '3 Units', instructor: 'IS Faculty', color: '#0ea5e9' },
  'ISY117': { code: 'ISY117', title: 'E-governance', description: 'Public sector digital transformation and e-governance solutions.', prerequisites: 'ISY109', creditHours: '3 Units', instructor: 'IS Faculty', color: '#8b5cf6' },
  'GEC105': { code: 'GEC105', title: 'Readings in Philippine History', description: 'Philippine history viewed from the lens of selected primary sources.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'FIL101': { code: 'FIL101', title: 'Wika at Kultura sa Mapayapang Lipunan', description: 'Wika at kultura sa mapayapang lipunan.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'TechElect3': { code: 'TechElect3', title: 'Technical Elective 3', description: 'Specialized topic in Information Systems.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#14b8a6' },
  'TechElect4': { code: 'TechElect4', title: 'Technical Elective 4', description: 'Specialized topic in Information Systems.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#14b8a6' },

  // Fourth Year, First Semester
  'ISY192': { code: 'ISY192', title: 'Capstone Project 2 / Undergraduate Thesis', description: 'Implementation and defense of the IS capstone project.', prerequisites: 'ISY191', creditHours: '3 Units', instructor: 'IS Faculty', color: '#d946ef' },
  'GEC108': { code: 'GEC108', title: 'Science, Technology and Society', description: 'Interactions between science, technology, and social contexts.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'HIS003': { code: 'HIS003', title: 'History of Filipino Muslims and MINSUPALA', description: 'History and culture of Filipino Muslims.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'FIL102': { code: 'FIL102', title: 'Ekokritisismo at Paggalang sa Kalikasan', description: 'Literature focusing on environment and nature.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'GEC109': { code: 'GEC109', title: 'Life and Works of Rizal', description: 'Life, works, and writings of Jose Rizal.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#64748b' },
  'ENT101': { code: 'ENT101', title: 'Startup Essentials', description: 'Fundamentals of innovation-driven entrepreneurship.', prerequisites: 'None', creditHours: '3 Units', instructor: 'Faculty', color: '#10b981' },
  'TechElect5': { code: 'TechElect5', title: 'Technical Elective 5', description: 'Specialized topic in Information Systems.', prerequisites: 'None', creditHours: '3 Units', instructor: 'IS Faculty', color: '#14b8a6' },

  // Fourth Year, Second Semester
  'ISY197': { code: 'ISY197', title: 'On-the-Job Training', description: 'Industry internship and practical training.', prerequisites: '70% of IS Curriculum completed', creditHours: '6 Units', instructor: 'IS Coordinator', color: '#f97316' }
};

export const itsysTimelineData = [
  {
    semesterName: 'First Year, First Semester',
    subjects: ['CCC100', 'CCC101', 'GEC101', 'GEC104', 'ISY101', 'ISY102', 'PED001', 'NST001']
  },
  {
    semesterName: 'First Year, Second Semester',
    subjects: ['CCC102', 'FPE101', 'ISY103', 'ISY104', 'ISY105', 'MAT051', 'PED002', 'NST002']
  },
  {
    semesterName: 'Second Year, First Semester',
    subjects: ['CCC121', 'GEC102', 'ISY106', 'GEC106', 'ISY113', 'STT071', 'STT071.1', 'PED003']
  },
  {
    semesterName: 'Second Year, Second Semester',
    subjects: ['CCC151', 'GEC103', 'ISY107', 'ISY109', 'ISY111', 'ISY112', 'PED004']
  },
  {
    semesterName: 'Third Year, First Semester',
    subjects: ['CCC181', 'ISY108', 'GEC107', 'ISY115', 'ISY116', 'TechElec1', 'TechElec2']
  },
  {
    semesterName: 'Third Year, Second Semester',
    subjects: ['ISY191', 'ISY114', 'ISY117', 'GEC105', 'FIL101', 'TechElect3', 'TechElect4']
  },
  {
    semesterName: 'Fourth Year, First Semester',
    subjects: ['ISY192', 'GEC108', 'HIS003', 'FIL102', 'GEC109', 'ENT101', 'TechElect5']
  },
  {
    semesterName: 'Fourth Year, Second Semester',
    subjects: ['ISY197']
  }
];
