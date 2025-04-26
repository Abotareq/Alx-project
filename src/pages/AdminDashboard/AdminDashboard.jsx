import React from 'react';
import { useNavigate } from 'react-router-dom';
import EcommerceMetrics from '../../components/ecommerce/EcommerceMetrics';
import MonthlySalesChart from '../../components/ecommerce/MonthlySalesChart';
import MonthlyTarget from '../../components/ecommerce/MonthlyTarget';
import RecentOrders from '../../components/ecommerce/RecentOrders';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if user is admin
  React.useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/signin');
    }
  }, [user, navigate]);

  if (!user || !user.isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 space-y-6 xl:col-span-7">
            <EcommerceMetrics />
            <MonthlySalesChart />
          </div>

          <div className="col-span-12 xl:col-span-5">
            <MonthlyTarget />
          </div>

          <div className="col-span-12">
            <RecentOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 