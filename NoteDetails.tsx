import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Share2, BookmarkPlus, Star, MessageSquare, ArrowLeft, Calendar, User, BookOpen, FileText } from 'lucide-react';
import { formatDistanceToNow, format } from 'date-fns';
import { notes } from '../data/mockData';
import { Note, Comment } from '../types';
import { useAuth } from '../contexts/AuthContext';

const NoteDetails: React.FC = () => {
  const { noteId } = useParams<{ noteId: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    // Simulate API call to fetch note details
    setLoading(true);
    const foundNote = notes.find(n => n.id === noteId);
    
    // Simulate delay
    setTimeout(() => {
      setNote(foundNote || null);
      setLoading(false);
    }, 500);
  }, [noteId]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!comment.trim() || !user) return;
    
    const newComment: Comment = {
      id: `c${Date.now()}`,
      content: comment,
      date: new Date().toISOString(),
      author: {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      }
    };
    
    if (note) {
      setNote({
        ...note,
        comments: [newComment, ...note.comments]
      });
    }
    
    setComment('');
  };

  const handleRating = (rating: number) => {
    setUserRating(rating);
    
    if (note) {
      // In a real app, this would send a request to your backend
      const newRatingCount = note.ratingCount + 1;
      const newRating = ((note.rating * note.ratingCount) + rating) / newRatingCount;
      
      setNote({
        ...note,
        rating: Number(newRating.toFixed(1)),
        ratingCount: newRatingCount
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Note Not Found</h2>
        <p className="mb-8">The note you're looking for doesn't exist or has been removed.</p>
        <Link to="/browse" className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/browse" className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Browse
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Note Header */}
          <div className="relative">
            <img 
              src={note.thumbnailUrl || 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
              alt={note.title} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                  {note.department}
                </span>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {note.course}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">{note.title}</h1>
              <div className="flex items-center text-white text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{format(new Date(note.uploadDate), 'MMM dd, yyyy')}</span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4 mr-1" />
                <span>{note.author.name}</span>
              </div>
            </div>
          </div>

          {/* Note Info */}
          <div className="p-6">
            <div className="flex flex-wrap justify-between mb-6">
              <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400 mr-1" />
                  <span className="font-medium">{note.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({note.ratingCount} ratings)</span>
                </div>
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-gray-600 mr-1" />
                  <span>{note.downloads} downloads</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-gray-600 mr-1" />
                  <span>{note.comments.length} comments</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="flex items-center justify-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition">
                  <Download className="h-5 w-5 mr-2" />
                  Download
                </button>
                <button className="flex items-center justify-center p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                  <BookmarkPlus className="h-5 w-5" />
                </button>
                <button className="flex items-center justify-center p-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Note Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700">{note.description}</p>
            </div>

            {/* Note Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Note Details</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-600 w-32">Subject:</span>
                    <span className="font-medium">{note.subject}</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-600 w-32">Course:</span>
                    <span className="font-medium">{note.course}</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-600 w-32">Professor:</span>
                    <span className="font-medium">{note.professor}</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-600 w-32">Semester:</span>
                    <span className="font-medium">{note.semester}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-3">File Information</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-gray-600 w-32">File Type:</span>
                    <span className="font-medium">{note.fileType}</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-600 w-32">File Size:</span>
                    <span className="font-medium">{note.fileSize}</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-600 w-32">Uploaded:</span>
                    <span className="font-medium">{formatDistanceToNow(new Date(note.uploadDate), { addSuffix: true })}</span>
                  </li>
                  <li className="flex flex-wrap">
                    <span className="text-gray-600 w-32">Tags:</span>
                    <div className="flex flex-wrap">
                      {note.tags.map(tag => (
                        <span key={tag} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Rate this note */}
            <div className="mb-8 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold mb-4">Rate this Note</h2>
              
              {isAuthenticated ? (
                <div>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRating(rating)}
                        onMouseEnter={() => setHoverRating(rating)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            (hoverRating || userRating) >= rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-gray-600">
                      {userRating ? `You rated this ${userRating} out of 5` : 'Click to rate'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-50 text-blue-800 p-4 rounded-md">
                  <p className="text-sm">
                    Please <Link to="/login" className="font-medium underline">sign in</Link> to rate this note.
                  </p>
                </div>
              )}
            </div>

            {/* Comments Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-xl font-semibold mb-6">Comments ({note.comments.length})</h2>
              
              {/* Add Comment Form */}
              {isAuthenticated ? (
                <form onSubmit={handleAddComment} className="mb-8">
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Add a Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-900 focus:border-blue-900 mb-3"
                    placeholder="Share your thoughts about this note..."
                  ></textarea>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={!comment.trim()}
                  >
                    Post Comment
                  </button>
                </form>
              ) : (
                <div className="bg-blue-50 text-blue-800 p-4 rounded-md mb-8">
                  <p className="text-sm">
                    Please <Link to="/login" className="font-medium underline">sign in</Link> to add a comment.
                  </p>
                </div>
              )}

              {/* Comments List */}
              {note.comments.length > 0 ? (
                <div className="space-y-6">
                  {note.comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <img
                          src={comment.author.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author.name)}&background=random`}
                          alt={comment.author.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">{comment.author.name}</h4>
                          <p className="text-xs text-gray-500">
                            {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Notes */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notes
              .filter(n => n.id !== note.id && n.department === note.department)
              .slice(0, 3)
              .map(relatedNote => (
                <div key={relatedNote.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <Link to={`/notes/${relatedNote.id}`}>
                    <img 
                      src={relatedNote.thumbnailUrl || 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
                      alt={relatedNote.title} 
                      className="w-full h-40 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/notes/${relatedNote.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-900 transition">
                        {relatedNote.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{relatedNote.course}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-400 mr-1" />
                        <span>{relatedNote.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetails;