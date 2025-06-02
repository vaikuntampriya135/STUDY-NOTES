export interface Note {
  id: string;
  title: string;
  description: string;
  subject: string;
  department: string;
  course: string;
  semester: string;
  professor: string;
  uploadDate: string;
  fileUrl: string;
  fileType: string;
  fileSize: string;
  thumbnailUrl?: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  downloads: number;
  views: number;
  rating: number;
  ratingCount: number;
  comments: Comment[];
  tags: string[];
}

export interface Comment {
  id: string;
  content: string;
  date: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export interface Department {
  id: string;
  name: string;
  icon: string;
  noteCount: number;
}

export interface Course {
  id: string;
  name: string;
  code: string;
  department: string;
  noteCount: number;
  semester: number;
}