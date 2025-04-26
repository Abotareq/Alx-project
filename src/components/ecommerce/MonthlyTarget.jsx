import React from 'react';

const MonthlyTarget = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Target</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Revenue Target</span>
            <span className="text-sm font-medium text-gray-700">$50,000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">$37,500 achieved</p>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Orders Target</span>
            <span className="text-sm font-medium text-gray-700">2,500</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">1,500 orders achieved</p>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Customer Target</span>
            <span className="text-sm font-medium text-gray-700">1,000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">850 customers achieved</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTarget; 