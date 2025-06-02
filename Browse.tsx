import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, BookOpen, X } from 'lucide-react';
import NoteCard from '../components/NoteCard';
import { notes, departments, courses } from '../data/mockData';
import { Note } from '../types';

const Browse: React.FC = () => {
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const location = useLocation();

  // Extract search parameters from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get('search');
    const departmentParam = searchParams.get('department');
    
    if (queryParam) {
      setSearchQuery(queryParam);
    }
    
    if (departmentParam) {
      setSelectedDepartment(departmentParam);
    }
    
    // Apply filters based on URL parameters
    filterNotes(queryParam || '', departmentParam || '', selectedCourse, selectedSemester);
  }, [location.search]);

  const filterNotes = (
    query: string,
    department: string,
    course: string,
    semester: string
  ) => {
    let result = [...notes];
    
    // Filter by search query
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      result = result.filter(
        note =>
          note.title.toLowerCase().includes(lowerCaseQuery) ||
          note.description.toLowerCase().includes(lowerCaseQuery) ||
          note.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      );
    }
    
    // Filter by department
    if (department) {
      result = result.filter(note => 
        note.department.toLowerCase() === department.toLowerCase() ||
        departments.find(dept => dept.id === department)?.name.toLowerCase() === note.department.toLowerCase()
      );
    }
    
    // Filter by course
    if (course) {
      result = result.filter(note => note.course.toLowerCase().includes(course.toLowerCase()));
    }
    
    // Filter by semester
    if (semester) {
      result = result.filter(note => note.semester.toLowerCase() === semester.toLowerCase());
    }
    
    setFilteredNotes(result);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterNotes(searchQuery, selectedDepartment, selectedCourse, selectedSemester);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDepartment('');
    setSelectedCourse('');
    setSelectedSemester('');
    setFilteredNotes(notes);
  };

  // Get available semesters from notes
  const semesters = [...new Set(notes.map(note => note.semester))];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Browse Notes</h1>
            <p className="text-gray-600 mt-2">
              Find notes by department, course, or keyword
            </p>
          </div>
          
          <button
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
          >
            <Filter className="h-5 w-5 mr-2" />
            {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for notes, subjects, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-900 focus:border-blue-900"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <button
                type="submit"
                className="absolute inset-y-0 right-0 px-4 bg-blue-900 text-white rounded-r-lg hover:bg-blue-800 transition"
              >
                Search
              </button>
            </div>
          </form>
          
          {isFilterVisible && (
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-900 focus:border-blue-900"
                  >
                    <option value="">All Departments</option>
                    {departments.map(department => (
                      <option key={department.id} value={department.id}>
                        {department.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-900 focus:border-blue-900"
                  >
                    <option value="">All Courses</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.name}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Semester
                  </label>
                  <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-blue-900 focus:border-blue-900"
                  >
                    <option value="">All Semesters</option>
                    {semesters.map(semester => (
                      <option key={semester} value={semester}>
                        {semester}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear Filters
                </button>
                
                <button
                  type="button"
                  onClick={() => filterNotes(searchQuery, selectedDepartment, selectedCourse, selectedSemester)}
                  className="ml-4 inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>
        
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNotes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Notes Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any notes matching your search criteria. Try adjusting your filters or search terms.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;