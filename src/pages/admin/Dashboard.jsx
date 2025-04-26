import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Active Sessions</h3>
          <p className="text-3xl font-bold text-green-600">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">System Status</h3>
          <p className="text-3xl font-bold text-green-600">Online</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="text-gray-600">New user registration</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="border-b pb-4">
            <p className="text-gray-600">System update completed</p>
            <p className="text-sm text-gray-500">5 hours ago</p>
          </div>
          <div>
            <p className="text-gray-600">Database backup created</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 