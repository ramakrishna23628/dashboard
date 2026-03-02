import React from 'react';
import '../styles/Dashboard.css';

function AdminDashboard({ data }) {
  return (
    <div className="dashboard admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="dashboard-header">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{data.users.length}</p>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>User Management</h2>
          <button className="action-btn add-btn">+ Add User</button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="action-link">Edit</button>
                    <button className="action-link delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
