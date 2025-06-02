import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, BookOpen, Download, Star, Settings, BookmarkPlus, Upload, FileText, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { notes } from '../data/mockData';
import NoteCard from '../components/NoteCard';
import { Note } from '../types';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('my-notes');
  const [userNotes, setUserNotes] = useState<Note[]>([]);
  const [bookmarkedNotes, setBookmarkedNotes] = useState<Note[]>([]);
  
  useEffect(() => {
    if (user) {
      // Filter notes that belong to the user based on the user's notes array
      const userUploadedNotes = notes.filter(note => user.notes.includes(note.id));
      setUserNotes(userUploadedNotes);
      
      // Simulate fetching bookmarked notes
      const mockBookmarkedNotes = notes.slice(0, 2);
      setBookmarkedNotes(mockBookmarkedNotes);
    }
  }, [user]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img 
                src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=random&size=96`} 
                alt={user?.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h1>
              <p className="text-gray-600 mb-3">{user?.email}</p>
              <p className="text-gray-600 mb-4">{user?.department || 'Department not specified'}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                <div className="flex items-center">
                  <Upload className="h-5 w-5 text-blue-900 mr-2" />
                  <span className="font-medium">{userNotes.length}</span>
                  <span className="text-gray-600 ml-1">Uploads</span>
                </div>
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-blue-900 mr-2" />
                  <span className="font-medium">0</span>
                  <span className="text-gray-600 ml-1">Downloads</span>
                </div>
                <div className="flex items-center">
                  <BookmarkPlus className="h-5 w-5 text-blue-900 mr-2" />
                  <span className="font-medium">{bookmarkedNotes.length}</span>
                  <span className="text-gray-600 ml-1">Bookmarks</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link to="#" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('my-notes')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'my-notes'
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="h-5 w-5 inline mr-2" />
                My Notes
              </button>
              
              <button
                onClick={() => setActiveTab('bookmarks')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bookmarks'
                    ? 'border-blue-900 text-blue-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <BookmarkPlus className="h-5 w-5 inline mr-2" />
                Bookmarked
              </button>
            </nav>
          </div>
        </div>
        
        {/* Tab Content */}
        <div>
          {activeTab === 'my-notes' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">My Notes</h2>
                <Link to="/upload" className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload New Note
                </Link>
              </div>
              
              {userNotes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {userNotes.map(note => (
                    <NoteCard key={note.id} note={note} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow">
                  <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No Notes Uploaded Yet</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    You haven't uploaded any notes yet. Share your knowledge with other students by uploading your first note.
                  </p>
                  <Link to="/upload" className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
                    <Upload className="h-5 w-5 mr-2" />
                    Upload Your First Note
                  </Link>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'bookmarks' && (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Bookmarked Notes</h2>
              </div>
              
              {bookmarkedNotes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bookmarkedNotes.map(note => (
                    <NoteCard key={note.id} note={note} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow">
                  <BookmarkPlus className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No Bookmarked Notes</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    You haven't bookmarked any notes yet. Browse notes and bookmark the ones you find useful.
                  </p>
                  <Link to="/browse" className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
                    <Search className="h-5 w-5 mr-2" />
                    Browse Notes
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;