import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Simulate tour applications data
  const tourApplications = [
    { id: 1, name: 'Safari Adventure Tour', status: 'Pending' },
    { id: 2, name: 'Wildlife Photography Tour', status: 'Approved' },
    { id: 3, name: 'Mountain Hiking Tour', status: 'Under Review' },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">Safari Admin</div>
        <div className="user-info">
          <span>Admin User</span>
          <button onClick={() => navigate('/')}>Logout</button>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <nav>
            <ul>
              <li className="active">Dashboard</li>
              <li>Tour Applications</li>
              {tourApplications.map(app => (
                <li key={app.id} className="tour-application">
                  <span>{app.name}</span>
                  <span className={`status ${app.status.toLowerCase()}`}>
                    {app.status}
                  </span>
                </li>
              ))}
              <li>Settings</li>
              <li>Reports</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1>Welcome to Safari Admin Dashboard</h1>
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Total Applications</h3>
              <p>15</p>
            </div>
            <div className="stat-card">
              <h3>Pending Review</h3>
              <p>5</p>
            </div>
            <div className="stat-card">
              <h3>Approved Tours</h3>
              <p>8</p>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>&copy; 2024 Safari Admin Panel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;