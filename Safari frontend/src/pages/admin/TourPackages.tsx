import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TourPackage {
  id: string;
  title: string;
  price: number;
  duration: string;
  location: string;
  status: 'active' | 'inactive';
}

const TourPackages = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockPackages = [
      {
        id: '1',
        title: 'Serengeti Migration Safari',
        price: 2500,
        duration: '7 days',
        location: 'Tanzania',
        status: 'active'
      },
      // Add more mock data
    ];
    setPackages(mockPackages);
    setIsLoading(false);
  }, []);

  const handleStatusToggle = (id: string) => {
    setPackages(prev =>
      prev.map(pkg => 
        pkg.id === id 
          ? { ...pkg, status: pkg.status === 'active' ? 'inactive' : 'active' }
          : pkg
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tour Packages</h1>
        <button
          onClick={() => {/* Add new package logic */}}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark"
        >
          Add New Package
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Package Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{pkg.title}</div>
                  <div className="text-sm text-gray-500">{pkg.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${pkg.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pkg.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${pkg.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {pkg.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleStatusToggle(pkg.id)}
                    className={`mr-2 px-3 py-1 rounded-md ${
                      pkg.status === 'active' 
                        ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    {pkg.status === 'active' ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    onClick={() => {/* Edit package logic */}}
                    className="text-primary hover:text-primary-dark"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourPackages;