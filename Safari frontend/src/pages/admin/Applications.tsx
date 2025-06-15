import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Application {
  id: string;
  name: string;
  email: string;
  package: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

const Applications = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockApplications = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        package: 'Serengeti Safari',
        status: 'pending',
        date: '2024-02-20'
      },
      // Add more mock data
    ];
    setApplications(mockApplications);
    setIsLoading(false);
  }, []);

  const handleStatusChange = (id: string, newStatus: 'pending' | 'approved' | 'rejected') => {
    setApplications(prev => 
      prev.map(app => app.id === id ? { ...app, status: newStatus } : app)
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tour Applications</h1>
      
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Package
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
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
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{application.name}</div>
                  <div className="text-sm text-gray-500">{application.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.package}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {application.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${application.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      application.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                    {application.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <select
                    value={application.status}
                    onChange={(e) => handleStatusChange(application.id, e.target.value as any)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approve</option>
                    <option value="rejected">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;