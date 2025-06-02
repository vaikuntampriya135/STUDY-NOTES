import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Upload, Download, Users } from 'lucide-react';
import NoteCard from '../components/NoteCard';
import DepartmentCard from '../components/DepartmentCard';
import { notes, departments } from '../data/mockData';

const Home: React.FC = () => {
  // Get featured notes (highest rated)
  const featuredNotes = [...notes].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Share Knowledge, <span className="text-emerald-400">Ace Your Exams</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Access and share high-quality academic notes with students from around the campus
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/browse" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition duration-300 inline-flex items-center">
              <Search className="mr-2 h-5 w-5" />
              Browse Notes
            </Link>
            <Link to="/upload" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 inline-flex items-center">
              <Upload className="mr-2 h-5 w-5" />
              Upload Notes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Upload className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Share Your Notes</h3>
              <p className="text-gray-600">
                Upload your lecture notes, study guides, and course materials to help fellow students and earn recognition.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Quality Notes</h3>
              <p className="text-gray-600">
                Search and filter through thousands of student-created notes to find exactly what you need for your courses.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ace Your Classes</h3>
              <p className="text-gray-600">
                Download notes to study anytime, anywhere. Rate and comment to help others find the best resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Browse by Department</h2>
            <Link to="/browse" className="text-blue-900 hover:text-blue-700 font-medium inline-flex items-center">
              View All Departments
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map(department => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Notes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Notes</h2>
            <Link to="/browse" className="text-blue-900 hover:text-blue-700 font-medium inline-flex items-center">
              View All Notes
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNotes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Download className="h-12 w-12 text-emerald-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-blue-200">Notes Downloaded</p>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <Upload className="h-12 w-12 text-emerald-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-blue-200">Notes Uploaded</p>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-emerald-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-blue-200">Active Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Academic Success?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of students who are already sharing knowledge and acing their exams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition duration-300 w-full sm:w-auto">
              Sign Up Now - It's Free!
            </Link>
            <Link to="/browse" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-medium transition duration-300 w-full sm:w-auto">
              Browse Notes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;