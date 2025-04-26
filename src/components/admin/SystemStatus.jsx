import React from 'react';

const systemStatus = [
  {
    name: 'CPU Usage',
    value: '45%',
    status: 'normal',
    icon: (
      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: 'Memory Usage',
    value: '60%',
    status: 'warning',
    icon: (
      <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    name: 'Disk Space',
    value: '75%',
    status: 'critical',
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    name: 'Network',
    value: '98%',
    status: 'normal',
    icon: (
      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
];

export default function SystemStatus() {
  return (
    <div className="space-y-4">
      {systemStatus.map((status, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {status.icon}
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{status.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{status.value}</span>
            <div className={`w-2 h-2 rounded-full ${
              status.status === 'normal' ? 'bg-green-500' :
              status.status === 'warning' ? 'bg-yellow-500' :
              'bg-red-500'
            }`} />
          </div>
        </div>
      ))}
    </div>
  );
} 