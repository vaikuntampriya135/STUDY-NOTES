import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Briefcase, Activity, FlaskRound as Flask, PenTool as Tool, Laptop } from 'lucide-react';
import { Department } from '../types';

interface DepartmentCardProps {
  department: Department;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ department }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'book-open':
        return <BookOpen className="h-12 w-12 text-white" />;
      case 'briefcase':
        return <Briefcase className="h-12 w-12 text-white" />;
      case 'activity':
        return <Activity className="h-12 w-12 text-white" />;
      case 'flask':
        return <Flask className="h-12 w-12 text-white" />;
      case 'tool':
        return <Tool className="h-12 w-12 text-white" />;
      case 'laptop':
      default:
        return <Laptop className="h-12 w-12 text-white" />;
    }
  };

  // Generate a color based on department id
  const getBgColor = (id: string) => {
    const colors = [
      'from-blue-800 to-blue-600',
      'from-emerald-800 to-emerald-600',
      'from-amber-700 to-amber-500',
      'from-purple-800 to-purple-600',
      'from-red-800 to-red-600',
      'from-indigo-800 to-indigo-600'
    ];
    
    const index = department.id.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <Link to={`/browse?department=${department.id}`}>
      <div className={`bg-gradient-to-br ${getBgColor(department.id)} rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col`}>
        <div className="mb-4">
          {getIcon(department.icon)}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{department.name}</h3>
        <p className="text-white text-opacity-80 mb-4 text-sm">{department.noteCount} notes available</p>
        <div className="mt-auto">
          <span className="inline-block bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full">
            Browse
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DepartmentCard;