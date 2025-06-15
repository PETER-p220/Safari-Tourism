
import { Outlet, Link, useLocation } from 'react-router-dom';

const ServiceProviderLayout = () => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Safari Service Provider</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-gray-500 hover:text-gray-600 dark:text-gray-400">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <nav className="mt-5 px-2">
            <Link 
              to="/provider/dashboard"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/provider/dashboard')
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Dashboard Overview
            </Link>
            <Link 
              to="/provider/services"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/provider/services')
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Manage Services
            </Link>
            <Link 
              to="/provider/bookings"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/provider/bookings')
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Booking Management
            </Link>
            <Link 
              to="/provider/payments"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/provider/payments')
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Payment Tracking
            </Link>
            <Link 
              to="/provider/reviews"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActiveRoute('/provider/reviews')
                  ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Reviews & Feedback
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ServiceProviderLayout;