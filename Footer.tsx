import React from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-semibold tracking-tight">StudyNotes</span>
            </div>
            <p className="text-blue-200 text-sm">
              A platform for college students to share and access academic notes, making learning collaborative and accessible.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/browse" className="hover:text-emerald-400 transition">Browse Notes</Link>
              </li>
              <li>
                <Link to="/upload" className="hover:text-emerald-400 transition">Upload Notes</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-emerald-400 transition">My Profile</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Departments</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <Link to="/browse?department=computer-science" className="hover:text-emerald-400 transition">Computer Science</Link>
              </li>
              <li>
                <Link to="/browse?department=engineering" className="hover:text-emerald-400 transition">Engineering</Link>
              </li>
              <li>
                <Link to="/browse?department=business" className="hover:text-emerald-400 transition">Business</Link>
              </li>
              <li>
                <Link to="/browse?department=arts" className="hover:text-emerald-400 transition">Arts & Humanities</Link>
              </li>
              <li>
                <Link to="/browse?department=science" className="hover:text-emerald-400 transition">Science</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>support@studynotes.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>University Campus, Building 4</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} StudyNotes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;