import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, Bell } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-2xl font-bold text-primary">
              SchoolMS
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <User size={20} />
                <span className="font-medium">
                  {user?.firstName} {user?.lastName}
                </span>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {user?.role?.replace('_', ' ')}
              </span>
              <button
                onClick={logout}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
