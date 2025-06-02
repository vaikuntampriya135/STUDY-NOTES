import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Eye, Star, BookmarkPlus, Share2 } from 'lucide-react';
import { Note } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface NoteCardProps {
  note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <Link to={`/notes/${note.id}`}>
          <img 
            src={note.thumbnailUrl || 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
            alt={note.title} 
            className="w-full h-48 object-cover"
          />
        </Link>
        <div className="absolute top-2 right-2 bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded">
          {note.fileType}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
            {note.department}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-400 mr-1" />
            <span className="text-sm font-medium">{note.rating}</span>
          </div>
        </div>

        <Link to={`/notes/${note.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-900 transition">
            {note.title}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {note.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img 
              src={note.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(note.author.name)}&background=random`} 
              alt={note.author.name} 
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{note.author.name}</span>
          </div>
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(new Date(note.uploadDate), { addSuffix: true })}
          </span>
        </div>

        <div className="flex items-center text-xs text-gray-600 justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span>{note.views}</span>
          </div>
          <div className="flex items-center">
            <Download className="h-4 w-4 mr-1" />
            <span>{note.downloads}</span>
          </div>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-blue-900 transition" title="Bookmark">
              <BookmarkPlus className="h-4 w-4" />
            </button>
            <button className="text-gray-500 hover:text-blue-900 transition" title="Share">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;