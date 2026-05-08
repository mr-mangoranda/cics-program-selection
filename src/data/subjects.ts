import { SubjectDetails } from '../pages/CSRoadmap';

export const subjectsData: Record<string, SubjectDetails> = {
  // 1st year 1st sem
  'CCC100': { code: 'CCC100', title: 'Fundamentals of Computing', description: 'An introduction to the fundamentals of algorithms, computer hardware, and the underlying concepts of computer science.', prerequisites: 'None', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Alan Turing', color: '#2563eb' },
  'CCC101': { code: 'CCC101', title: 'Computer Programming 1', description: 'Introductory C++ programming focusing on logic formulation, basic syntax, and procedural programming paradigms.', prerequisites: 'None', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Ada Lovelace', color: '#ef7e1a' },
  'MAT051': { code: 'MAT051', title: 'Calculus 1', description: 'A comprehensive study of limits, continuity, derivatives, and an introduction to integration techniques.', prerequisites: 'Pre-calculus', creditHours: '5 Units (5 hrs lec)', instructor: 'Dr. Isaac Newton', color: '#8b5cf6' },
  'GEC105': { code: 'GEC105', title: 'Readings in Philippine History', description: 'Selected readings on Philippine history from multiple perspectives.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'History Faculty', color: '#f59e0b' },
  'FIL101': { code: 'FIL101', title: 'Wika at Kultura sa Mapayapang Lipunan', description: 'Study of language and culture in a peaceful society.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Filipino Faculty', color: '#10b981' },
  'PED001': { code: 'PED001', title: 'Exercise Prescription and Management', description: 'Physical education covering exercise principles.', prerequisites: 'None', creditHours: '2 Units (2 hrs lec)', instructor: 'PE Faculty', color: '#ec4899' },
  'NST001': { code: 'NST001', title: 'National Service Training Program 1', description: 'Civic welfare training service or literacy training service.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'NSTP Coordinator', color: '#6366f1' },

  // 1st year 2nd sem
  'CCC102': { code: 'CCC102', title: 'Computer Programming 2', description: 'Advanced C++ programming concepts, focusing on object-oriented programming, data abstraction, and complex logic.', prerequisites: 'CCC101', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Tim Berners-Lee', color: '#10b981' },
  'MAT061': { code: 'MAT061', title: 'Calculus 2', description: 'Continuation of Calculus 1, covering integration applications, transcendental functions, and infinite series.', prerequisites: 'MAT051', creditHours: '5 Units (5 hrs lec)', instructor: 'Dr. Gottfried Leibniz', color: '#f43f5e' },
  'MAT101': { code: 'MAT101', title: 'Logic and Set Theory', description: 'Introduction to mathematical logic, set operations, relations, functions, and fundamental proof techniques.', prerequisites: 'MAT051', creditHours: '3 Units (3 hrs lec)', instructor: 'Dr. George Boole', color: '#0ea5e9' },
  'GEC103': { code: 'GEC103', title: 'The Contemporary World', description: 'Study of globalization and its impact on individuals and communities.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Social Sci Faculty', color: '#2563eb' },
  'FIL102': { code: 'FIL102', title: 'Ekokritisismo at Pagpapahalaga sa Kalikasan', description: 'Literature focusing on environmental appreciation.', prerequisites: 'FIL101', creditHours: '3 Units (3 hrs lec)', instructor: 'Filipino Faculty', color: '#ef7e1a' },
  'PED002': { code: 'PED002', title: 'Dance / Martial Arts', description: 'Physical education covering dance or basic martial arts.', prerequisites: 'PED001', creditHours: '2 Units (2 hrs lec)', instructor: 'PE Faculty', color: '#8b5cf6' },
  'NST002': { code: 'NST002', title: 'National Service Training Program 2', description: 'Continuation of NSTP 1.', prerequisites: 'NST001', creditHours: '3 Units (3 hrs lec)', instructor: 'NSTP Coordinator', color: '#f59e0b' },

  // 2nd year 1st sem
  'CCC121': { code: 'CCC121', title: 'Data Structures and Algorithms', description: 'Study of standard data structures and algorithms for efficient data storage and retrieval.', prerequisites: 'CCC102', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Donald Knuth', color: '#ec4899' },
  'CSC130': { code: 'CSC130', title: 'Discrete Structures', description: 'Mathematical foundations of computer science, including logic, sets, relations, and graphs.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Dr. Kenneth Rosen', color: '#f59e0b' },
  'CSC142': { code: 'CSC142', title: 'Automata, Computability, and Complexity', description: 'Formal language theory, Turing machines, and computational complexity limits.', prerequisites: 'MAT101/CSC141', creditHours: '3 Units (3 hrs lec)', instructor: 'Dr. Stephen Cook', color: '#6366f1' },
  'STT101': { code: 'STT101', title: 'Descriptive and Inferential Statistics', description: 'Statistical methods, probability theory, hypothesis testing, and data analysis.', prerequisites: 'None', creditHours: '4 Units (4 hrs lec)', instructor: 'Prof. Ronald Fisher', color: '#14b8a6' },
  'GEC106': { code: 'GEC106', title: 'Art Appreciation', description: 'Development of ability to appreciate, analyze, and critique works of art.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Arts Faculty', color: '#f43f5e' },
  'HIS003': { code: 'HIS003', title: 'History of Filipino Muslims and Indigenous Peoples of MINSUPALA', description: 'History and culture of MINSUPALA peoples.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'History Faculty', color: '#10b981' },
  'PED003': { code: 'PED003', title: 'Individual / Dual Sports / Traditional / Recreational Games', description: 'Physical education covering sports.', prerequisites: 'PED002', creditHours: '2 Units (2 hrs lec)', instructor: 'PE Faculty', color: '#2563eb' },

  // 2nd year 2nd sem
  'CCC151': { code: 'CCC151', title: 'Information Management', description: 'Database system concepts, relational models, SQL, and database design.', prerequisites: 'CCC121', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Edgar Codd', color: '#8b5cf6' },
  'CSC112': { code: 'CSC112', title: 'Computer Organization and Architecture', description: 'Digital logic, computer design, instruction set architecture, and memory systems.', prerequisites: 'CCC102', creditHours: '4 Units (3 hrs lec, 3 hrs lab)', instructor: 'Dr. John von Neumann', color: '#ef4444' },
  'CSC124': { code: 'CSC124', title: 'Design and Analysis of Algorithm', description: 'Advanced algorithm design techniques, rigorous analysis of time and space complexity.', prerequisites: 'CCC121', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Thomas Cormen', color: '#10b981' },
  'CSC186': { code: 'CSC186', title: 'Human – Computer Interaction', description: 'User interface design, usability principles, and evaluation methods.', prerequisites: 'CCC102', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Jakob Nielsen', color: '#f97316' },
  'GEC102': { code: 'GEC102', title: 'Purposive Communication', description: 'Writing, speaking, and presenting to different audiences and for various purposes.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Languages Faculty', color: '#d946ef' },
  'GEC109': { code: 'GEC109', title: 'Life and Works of Rizal', description: 'Study of the life, works, and writings of Jose Rizal.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'History Faculty', color: '#14b8a6' },
  'PED004': { code: 'PED004', title: 'Team Sports', description: 'Physical education focusing on team sports.', prerequisites: 'PED003', creditHours: '2 Units (2 hrs lec)', instructor: 'PE Faculty', color: '#f59e0b' },

  // 3rd year 1st sem
  'CCC181': { code: 'CCC181', title: 'Applications Development and Emerging Tech', description: 'Modern application development using contemporary frameworks and technologies.', prerequisites: 'CCC151', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Staff', color: '#3b82f6' },
  'CSC145': { code: 'CSC145', title: 'Programming Languages', description: 'Syntax, semantics, and implementation of programming language paradigms.', prerequisites: 'CSC142', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Grace Hopper', color: '#d946ef' },
  'CSC155': { code: 'CSC155', title: 'Introduction to Operating Systems', description: 'Process management, memory management, file systems, and OS design principles.', prerequisites: 'CSC112', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Linus Torvalds', color: '#eab308' },
  'CSC171': { code: 'CSC171', title: 'Introduction to Artificial Intelligence', description: 'Fundamental AI concepts, search, knowledge representation, and machine learning.', prerequisites: 'CCC121', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. John McCarthy', color: '#0ea5e9' },
  'CSC181': { code: 'CSC181', title: 'Software Engineering', description: 'Software development lifecycles, project management, and quality assurance.', prerequisites: 'CCC151', creditHours: '4 Units (3 hrs lec, 3 hrs lab)', instructor: 'Dr. Margaret Hamilton', color: '#f43f5e' },
  'FPE101': { code: 'FPE101', title: 'Fundamentals of Peace Education', description: 'Basic concepts, principles, and practices of peace education.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Peace Ed Faculty', color: '#10b981' },

  // 3rd year 2nd sem
  'CSC113': { code: 'CSC113', title: 'Computer Networks and Data Communications', description: 'Network architectures, protocols, data transmission, and network security.', prerequisites: 'CSC155', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Vint Cerf', color: '#6366f1' },
  'CSC133': { code: 'CSC133', title: 'Modeling and Simulation', description: 'Techniques for modeling complex systems and computer simulation methods.', prerequisites: 'MAT061', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Prof. Staff', color: '#10b981' },
  'CSC161': { code: 'CSC161', title: 'Computer Systems Security', description: 'Cybersecurity principles, cryptography, network security, and threat mitigation.', prerequisites: 'CSC155', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Bruce Schneier', color: '#f59e0b' },
  'CSC175': { code: 'CSC175', title: 'Parallel and Distributed Computing', description: 'Algorithms and architectures for concurrent, parallel, and distributed systems.', prerequisites: 'CSC155', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Dr. Leslie Lamport', color: '#ec4899' },
  'CSC194': { code: 'CSC194', title: 'Computer Science Seminar', description: 'Advanced topics, research presentations, and contemporary issues in CS.', prerequisites: 'CSC181', creditHours: '1 Unit (1 hr lec)', instructor: 'Department Chair', color: '#8b5cf6' },
  'GEC101': { code: 'GEC101', title: 'Understanding the Self', description: 'Exploration of issues and concerns regarding self and identity.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Psychology Faculty', color: '#ef4444' },
  'GEC104': { code: 'GEC104', title: 'Mathematics in the Modern World', description: 'Nature of mathematics, appreciation of its practical and aesthetic aspects.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Math Faculty', color: '#3b82f6' },

  // 3rd year summer
  'CSC197': { code: 'CSC197', title: 'Practicum', description: 'Industry internship and practical application of computer science skills.', prerequisites: 'CSC194', creditHours: '200 Hours', instructor: 'Practicum Coordinator', color: '#14b8a6' },

  // 4th year 1st sem
  'CSC193': { code: 'CSC193', title: 'Special Topics in Computer Science', description: 'In-depth study of a specialized or highly current topic in computer science.', prerequisites: 'CSC194', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Visiting Professor', color: '#ef4444' },
  'CSC198': { code: 'CSC198', title: 'Research Methods', description: 'Methodologies for conducting scientific research in computer science.', prerequisites: 'CSC194', creditHours: '3 Units (3 hrs lec)', instructor: 'Research Faculty', color: '#3b82f6' },
  'ELEC1': { code: 'ELEC1', title: 'CS Elective 1', description: 'First professional computer science elective course.', prerequisites: '(As the course requires)', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Elective Faculty', color: '#f97316' },
  'ELEC2': { code: 'ELEC2', title: 'Free Technical Elective 1', description: 'First free technical elective course.', prerequisites: '(As the course requires)', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Elective Faculty', color: '#d946ef' },
  'GEC107': { code: 'GEC107', title: 'Ethics', description: 'Principles of ethical behavior and moral philosophy.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Philosophy Faculty', color: '#8b5cf6' },

  // 4th year 2nd sem
  'CSC109': { code: 'CSC109', title: 'Social, Ethical, and Professional Issues', description: 'Ethical frameworks, professional responsibilities, and societal impact of computing.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'Ethics Faculty', color: '#8b5cf6' },
  'CSC199': { code: 'CSC199', title: 'Undergraduate Thesis', description: 'Capstone project involving independent research and implementation.', prerequisites: 'CSC198', creditHours: '3 Units (1 hr lec, 6 hrs lab)', instructor: 'Thesis Advisor', color: '#10b981' },
  'ELEC3': { code: 'ELEC3', title: 'Free Technical Elective 2', description: 'Second free technical elective course.', prerequisites: '(As the course requires)', creditHours: '3 Units (2 hrs lec, 3 hrs lab)', instructor: 'Elective Faculty', color: '#0ea5e9' },
  'GEC108': { code: 'GEC108', title: 'Science, Technology and Society', description: 'Interactions between science, technology, and social contexts.', prerequisites: 'None', creditHours: '3 Units (3 hrs lec)', instructor: 'STS Faculty', color: '#f43f5e' }
};

export const timelineData = [
  {
    semesterName: 'First Year, First Semester',
    subjects: ['CCC100', 'CCC101', 'MAT051', 'GEC105', 'FIL101', 'PED001', 'NST001']
  },
  {
    semesterName: 'First Year, Second Semester',
    subjects: ['CCC102', 'MAT061', 'MAT101', 'GEC103', 'FIL102', 'PED002', 'NST002']
  },
  {
    semesterName: 'Second Year, First Semester',
    subjects: ['CCC121', 'CSC130', 'CSC142', 'STT101', 'GEC106', 'HIS003', 'PED003']
  },
  {
    semesterName: 'Second Year, Second Semester',
    subjects: ['CCC151', 'CSC112', 'CSC124', 'CSC186', 'GEC102', 'GEC109', 'PED004']
  },
  {
    semesterName: 'Third Year, First Semester',
    subjects: ['CCC181', 'CSC145', 'CSC155', 'CSC171', 'CSC181', 'FPE101']
  },
  {
    semesterName: 'Third Year, Second Semester',
    subjects: ['CSC113', 'CSC133', 'CSC161', 'CSC175', 'CSC194', 'GEC101', 'GEC104']
  },
  {
    semesterName: 'Third Year, SUMMER',
    subjects: ['CSC197']
  },
  {
    semesterName: 'Fourth Year, First Semester',
    subjects: ['CSC193', 'CSC198', 'ELEC1', 'ELEC2', 'GEC107']
  },
  {
    semesterName: 'Fourth Year, Second Semester',
    subjects: ['CSC109', 'CSC199', 'ELEC3', 'GEC108']
  }
];
