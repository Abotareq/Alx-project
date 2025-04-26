import React from 'react';

export default function UserActivityChart() {
  // Sample data - in a real app, this would come from an API
  const data = [
    { day: 'Mon', users: 65 },
    { day: 'Tue', users: 59 },
    { day: 'Wed', users: 80 },
    { day: 'Thu', users: 81 },
    { day: 'Fri', users: 56 },
    { day: 'Sat', users: 55 },
    { day: 'Sun', users: 40 },
  ];

  const maxUsers = Math.max(...data.map(item => item.users));

  return (
    <div className="h-64">
      <div className="flex items-end h-48 space-x-2">
        {data.map((item, index) => {
          const height = (item.users / maxUsers) * 100;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                style={{ height: `${height}%` }}
              />
              <span className="mt-2 text-xs text-gray-500 dark:text-gray-400">{item.day}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">456</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Now</p>
          <p className="text-lg font-semibold text-green-500">23</p>
        </div>
      </div>
    </div>
  );
} 