import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Users, Calendar, BookOpen, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { icon: Users, label: 'Total Students', value: '1,234', color: 'bg-blue-500' },
    { icon: Calendar, label: 'Attendance Today', value: '95%', color: 'bg-green-500' },
    { icon: BookOpen, label: 'Active Classes', value: '42', color: 'bg-purple-500' },
    { icon: DollarSign, label: 'Fees Collected', value: '₹12.5L', color: 'bg-yellow-500' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600 mt-2">Here's what's happening today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-4 rounded-full`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-gray-700">New student enrollment in Class 10-A</p>
                <span className="text-sm text-gray-500 ml-auto">2 hrs ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar size={20} className="text-primary" />
                <div>
                  <p className="font-medium">Parent-Teacher Meeting</p>
                  <p className="text-sm text-gray-600">Tomorrow, 10:00 AM</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
