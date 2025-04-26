import React from 'react';
// import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
//   const navigate = useNavigate();

  // Stats data
  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%', color: 'blue' },
    { title: 'Active Sessions', value: '89', change: '+5%', color: 'green' },
    { title: 'System Status', value: 'Operational', change: 'All systems normal', color: 'green' },
  ];

  // Recent activity data
  const recentActivity = [
    { action: 'New user registration', details: 'John Doe registered', time: '2h ago' },
    { action: 'System update', details: 'Security patch applied', time: '5h ago' },
    { action: 'Database backup', details: 'Daily backup completed', time: '1d ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className={`h-12 w-12 rounded-full bg-${stat.color}-100 flex items-center justify-center`}>
                      <span className={`text-${stat.color}-600 text-xl font-bold`}>{stat.value}</span>
                    </div>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.title}</dt>
                      <dd className="text-lg font-medium text-gray-900">{stat.change}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {recentActivity.map((activity, index) => (
                  <li key={index} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{activity.action}</p>
                        <p className="text-sm text-gray-500">{activity.details}</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard; 