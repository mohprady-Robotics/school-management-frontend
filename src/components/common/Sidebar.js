import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Users, Calendar, BookOpen, 
  FileText, DollarSign, MessageSquare 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard', roles: ['all'] },
    { icon: Users, label: 'Students', path: '/students', roles: ['super_admin', 'admin', 'teacher', 'class_teacher'] },
    { icon: Calendar, label: 'Attendance', path: '/attendance', roles: ['teacher', 'class_teacher', 'admin'] },
    { icon: BookOpen, label: 'Grades', path: '/grades', roles: ['teacher', 'class_teacher', 'admin', 'student', 'parent'] },
    { icon: FileText, label: 'Assignments', path: '/assignments', roles: ['teacher', 'class_teacher', 'student'] },
    { icon: DollarSign, label: 'Fees', path: '/fees', roles: ['accountant', 'admin', 'parent', 'student'] },
    { icon: MessageSquare, label: 'Communication', path: '/communication', roles: ['all'] }
  ];

  const hasAccess = (roles) => {
    return roles.includes('all') || roles.includes(user?.role);
  };

  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            if (!hasAccess(item.roles)) return null;
            
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
