export type MaterialType = 'syllabus' | 'video' | 'document' | 'link' | 'presentation' | 'assignment';

export interface SubjectMaterial {
  id: string;
  title: string;
  type: MaterialType;
  size?: string; // e.g., '245 KB' or '45 mins'
  url?: string;  // The path to the file in the public folder, e.g., '/materials/CCC100_Syllabus.pdf'
  dateAdded?: string;
}

// HOW TO ADD FILES:
// 1. Place your actual files (PDFs, PPTs, etc.) inside the `public` folder. 
//    For example, create a folder at `public/materials/` and put your files there.
// 2. Set the `url` property here to point to that file, starting with a forward slash.
//    Example: url: '/materials/CCC100_Syllabus.pdf'
// 3. For videos or external links, just use the full URL (e.g., 'https://youtube.com/...')

export const materialsData: Record<string, SubjectMaterial[]> = {
  'CCC100': [
    // This is an example of a real file path. The file should be at project-root/public/materials/CCC100_Syllabus.pdf
    { id: 'ccc100-syl', title: 'Course Syllabus', type: 'syllabus', size: '150 KB', url: './../materials/CCC100 - LECTURE 01.pdf', dateAdded: 'Aug 10' },
    { id: 'ccc100-w1v', title: 'Week 1: Introduction to CS and Computing', type: 'video', size: '35 mins', url: 'https://youtube.com', dateAdded: 'Aug 15' },
    { id: 'ccc100-w1d', title: 'Week 1: Reading Material & Background', type: 'document', size: '1.2 MB', url: '#', dateAdded: 'Aug 15' },
    { id: 'ccc100-w2v', title: 'Week 2: Hardware vs Software Basics', type: 'video', size: '42 mins', url: '#', dateAdded: 'Aug 22' },
    { id: 'ccc100-a1', title: 'Assignment 1: Computing History', type: 'assignment', size: '500 KB', url: '#', dateAdded: 'Aug 24' },
  ],
  'CCC101': [
    { id: 'ccc101-syl', title: 'Course Syllabus', type: 'syllabus', size: '200 KB', url: '#', dateAdded: 'Aug 10' },
    { id: 'ccc101-w1v', title: 'Week 1: Introduction to C++ Environment', type: 'video', size: '45 mins', url: '#', dateAdded: 'Aug 15' },
    { id: 'ccc101-w1p', title: 'Week 1: Basic Syntax & I/O Slides', type: 'presentation', size: '3.1 MB', url: '#', dateAdded: 'Aug 15' },
    { id: 'ccc101-a1', title: 'Machine Problem 1: Hello World & Variables', type: 'assignment', size: '600 KB', url: '#', dateAdded: 'Aug 20' },
    { id: 'ccc101-w2v', title: 'Week 2: Control Structures & Flowcharts', type: 'video', size: '50 mins', url: '#', dateAdded: 'Aug 22' },
  ],
  'MAT051': [
    { id: 'mat051-syl', title: 'Course Syllabus', type: 'syllabus', size: '180 KB', url: '#', dateAdded: 'Aug 10' },
    { id: 'mat051-w1v', title: 'Week 1: Limits & Continuity Concepts', type: 'video', size: '55 mins', url: '#', dateAdded: 'Aug 16' },
    { id: 'mat051-w1p', title: 'Week 1: Limits Lecture Notes', type: 'document', size: '2.5 MB', url: '#', dateAdded: 'Aug 16' },
    { id: 'mat051-pr1', title: 'Problem Set 1', type: 'assignment', size: '1.0 MB', url: '#', dateAdded: 'Aug 23' },
  ],
  'CCC102': [
    { id: 'ccc102-syl', title: 'Course Syllabus', type: 'syllabus', size: '210 KB', url: '#', dateAdded: 'Jan 10' },
    { id: 'ccc102-w1v', title: 'Week 1: Object-Oriented Programming Review', type: 'video', size: '50 mins', url: '#', dateAdded: 'Jan 15' },
    { id: 'ccc102-w1p', title: 'Week 1: Arrays and Pointers', type: 'presentation', size: '4.2 MB', url: '#', dateAdded: 'Jan 15' },
  ],
  // Add other subjects as needed... developers can just populate this directly
};
