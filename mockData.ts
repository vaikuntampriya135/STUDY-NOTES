import { Note, Department, Course } from '../types';

// Mock Departments
export const departments: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    icon: 'laptop',
    noteCount: 156
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    icon: 'cpu',
    noteCount: 142
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    icon: 'tool',
    noteCount: 98
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    icon: 'building',
    noteCount: 87
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    icon: 'zap',
    noteCount: 112
  }
];

// Mock Courses
export const courses: Course[] = [
  // CSE Courses
  {
    id: 'cse101',
    name: 'Programming Fundamentals',
    code: 'CSE101',
    department: 'Computer Science Engineering',
    noteCount: 32,
    semester: 1
  },
  {
    id: 'cse201',
    name: 'Data Structures',
    code: 'CSE201',
    department: 'Computer Science Engineering',
    noteCount: 28,
    semester: 2
  },
  {
    id: 'cse301',
    name: 'Database Management',
    code: 'CSE301',
    department: 'Computer Science Engineering',
    noteCount: 25,
    semester: 3
  },
  
  // ECE Courses
  {
    id: 'ece101',
    name: 'Electronic Devices',
    code: 'ECE101',
    department: 'Electronics & Communication Engineering',
    noteCount: 24,
    semester: 1
  },
  {
    id: 'ece201',
    name: 'Digital Electronics',
    code: 'ECE201',
    department: 'Electronics & Communication Engineering',
    noteCount: 22,
    semester: 2
  },
  
  // Mechanical Courses
  {
    id: 'mech101',
    name: 'Engineering Mechanics',
    code: 'MECH101',
    department: 'Mechanical Engineering',
    noteCount: 26,
    semester: 1
  },
  {
    id: 'mech201',
    name: 'Thermodynamics',
    code: 'MECH201',
    department: 'Mechanical Engineering',
    noteCount: 23,
    semester: 2
  },
  
  // Civil Courses
  {
    id: 'civil101',
    name: 'Structural Engineering',
    code: 'CIVIL101',
    department: 'Civil Engineering',
    noteCount: 20,
    semester: 1
  },
  {
    id: 'civil201',
    name: 'Construction Materials',
    code: 'CIVIL201',
    department: 'Civil Engineering',
    noteCount: 18,
    semester: 2
  },
  
  // EEE Courses
  {
    id: 'eee101',
    name: 'Electric Circuits',
    code: 'EEE101',
    department: 'Electrical & Electronics Engineering',
    noteCount: 21,
    semester: 1
  },
  {
    id: 'eee201',
    name: 'Power Systems',
    code: 'EEE201',
    department: 'Electrical & Electronics Engineering',
    noteCount: 19,
    semester: 2
  }
];

// Mock Notes
export const notes: Note[] = [
  {
    id: '1',
    title: 'Introduction to Data Structures and Algorithms',
    description: 'Comprehensive notes covering the fundamentals of data structures and algorithms, including arrays, linked lists, trees, and basic sorting algorithms.',
    subject: 'Computer Science',
    department: 'Computer Science',
    course: 'Data Structures',
    semester: 'Fall 2023',
    professor: 'Dr. Jane Smith',
    uploadDate: '2023-09-15T10:30:00Z',
    fileUrl: '#',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    thumbnailUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '101',
      name: 'Alex Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=random'
    },
    downloads: 342,
    views: 1205,
    rating: 4.8,
    ratingCount: 67,
    comments: [
      {
        id: 'c1',
        content: 'These notes were incredibly helpful for my midterm prep. Thanks for sharing!',
        date: '2023-10-05T14:23:00Z',
        author: {
          id: '102',
          name: 'Taylor Williams',
          avatar: 'https://ui-avatars.com/api/?name=Taylor+Williams&background=random'
        }
      },
      {
        id: 'c2',
        content: 'Very well organized and easy to follow. Would recommend!',
        date: '2023-10-02T09:15:00Z',
        author: {
          id: '103',
          name: 'Jordan Lee',
          avatar: 'https://ui-avatars.com/api/?name=Jordan+Lee&background=random'
        }
      }
    ],
    tags: ['algorithms', 'data structures', 'sorting', 'programming']
  },
  {
    id: '2',
    title: 'Organic Chemistry Reaction Mechanisms',
    description: 'Detailed notes on organic chemistry reaction mechanisms, including nucleophilic substitution, elimination, and addition reactions.',
    subject: 'Chemistry',
    department: 'Science',
    course: 'Organic Chemistry',
    semester: 'Spring 2023',
    professor: 'Dr. Michael Chen',
    uploadDate: '2023-04-22T15:45:00Z',
    fileUrl: '#',
    fileType: 'PDF',
    fileSize: '3.8 MB',
    thumbnailUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '104',
      name: 'Sam Parker',
      avatar: 'https://ui-avatars.com/api/?name=Sam+Parker&background=random'
    },
    downloads: 289,
    views: 956,
    rating: 4.5,
    ratingCount: 42,
    comments: [
      {
        id: 'c3',
        content: 'Your notes saved me during finals! Thank you so much.',
        date: '2023-05-18T11:07:00Z',
        author: {
          id: '105',
          name: 'Casey Morgan',
          avatar: 'https://ui-avatars.com/api/?name=Casey+Morgan&background=random'
        }
      }
    ],
    tags: ['chemistry', 'organic chemistry', 'reaction mechanisms']
  },
  {
    id: '3',
    title: 'Macroeconomics: Fiscal and Monetary Policy',
    description: 'Comprehensive notes on macroeconomic theories, fiscal policy, monetary policy, and their effects on national economies.',
    subject: 'Economics',
    department: 'Business',
    course: 'Macroeconomics',
    semester: 'Fall 2023',
    professor: 'Dr. Robert Taylor',
    uploadDate: '2023-11-05T09:20:00Z',
    fileUrl: '#',
    fileType: 'PDF',
    fileSize: '1.9 MB',
    thumbnailUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '106',
      name: 'Morgan Reynolds',
      avatar: 'https://ui-avatars.com/api/?name=Morgan+Reynolds&background=random'
    },
    downloads: 178,
    views: 689,
    rating: 4.6,
    ratingCount: 31,
    comments: [],
    tags: ['economics', 'macroeconomics', 'fiscal policy', 'monetary policy']
  },
  {
    id: '4',
    title: 'Modern Art: Post-Impressionism to Abstract Expressionism',
    description: 'Detailed lecture notes covering the evolution of modern art movements, key artists, and significant works from Post-Impressionism to Abstract Expressionism.',
    subject: 'Art History',
    department: 'Arts & Humanities',
    course: 'Modern Art History',
    semester: 'Spring 2023',
    professor: 'Prof. Emily Wilson',
    uploadDate: '2023-05-12T13:15:00Z',
    fileUrl: '#',
    fileType: 'PDF',
    fileSize: '5.2 MB',
    thumbnailUrl: 'https://images.pexels.com/photos/3094499/pexels-photo-3094499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '107',
      name: 'Jamie Rivera',
      avatar: 'https://ui-avatars.com/api/?name=Jamie+Rivera&background=random'
    },
    downloads: 156,
    views: 512,
    rating: 4.9,
    ratingCount: 28,
    comments: [
      {
        id: 'c4',
        content: 'The visual examples included were extremely helpful. Great notes!',
        date: '2023-06-01T10:42:00Z',
        author: {
          id: '108',
          name: 'Alex Thompson',
          avatar: 'https://ui-avatars.com/api/?name=Alex+Thompson&background=random'
        }
      }
    ],
    tags: ['art history', 'modern art', 'post-impressionism', 'abstract expressionism']
  },
  {
    id: '5',
    title: 'Structural Engineering: Bridge Design Principles',
    description: 'Comprehensive notes on structural engineering principles for bridge design, including load calculations, material selection, and safety factors.',
    subject: 'Engineering',
    department: 'Engineering',
    course: 'Structural Engineering',
    semester: 'Fall 2022',
    professor: 'Dr. William Chen',
    uploadDate: '2022-12-10T16:30:00Z',
    fileUrl: '#',
    fileType: 'PDF',
    fileSize: '4.7 MB',
    thumbnailUrl: 'https://images.pexels.com/photos/92952/pexels-photo-92952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '109',
      name: 'Jordan Kim',
      avatar: 'https://ui-avatars.com/api/?name=Jordan+Kim&background=random'
    },
    downloads: 245,
    views: 789,
    rating: 4.7,
    ratingCount: 38,
    comments: [],
    tags: ['engineering', 'structural engineering', 'bridge design', 'civil engineering']
  },
  {
    id: '6',
    title: 'JavaScript: Advanced Concepts and Patterns',
    description: 'Detailed notes covering advanced JavaScript concepts including closures, prototypes, async patterns, and modern ES6+ features.',
    subject: 'Web Development',
    department: 'Computer Science',
    course: 'Advanced Web Programming',
    semester: 'Spring 2023',
    professor: 'Prof. David Martinez',
    uploadDate: '2023-04-05T11:25:00Z',
    fileUrl: '#',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    thumbnailUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      id: '110',
      name: 'Taylor Singh',
      avatar: 'https://ui-avatars.com/api/?name=Taylor+Singh&background=random'
    },
    downloads: 412,
    views: 1356,
    rating: 4.9,
    ratingCount: 75,
    comments: [
      {
        id: 'c5',
        content: 'These notes explain closures better than any textbook I\'ve read!',
        date: '2023-04-28T15:12:00Z',
        author: {
          id: '111',
          name: 'Riley Johnson',
          avatar: 'https://ui-avatars.com/api/?name=Riley+Johnson&background=random'
        }
      },
      {
        id: 'c6',
        content: 'Really helpful for understanding async JavaScript. Thanks!',
        date: '2023-04-15T09:33:00Z',
        author: {
          id: '112',
          name: 'Casey Wong',
          avatar: 'https://ui-avatars.com/api/?name=Casey+Wong&background=random'
        }
      }
    ],
    tags: ['javascript', 'web development', 'programming', 'ES6']
  }
];