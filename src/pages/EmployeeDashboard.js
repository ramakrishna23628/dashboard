import React from 'react';
import '../styles/Dashboard.css';

function EmployeeDashboard({ data }) {
  const profile = data.employeeProfile;

  return (
    <div className="dashboard employee-dashboard">
      <h1>Employee Dashboard</h1>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-avatar">{profile.name.charAt(0)}</div>
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p className="position">{profile.position}</p>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <span className="label">Email:</span>
              <span className="value">{profile.email}</span>
            </div>
            <div className="detail-row">
              <span className="label">Phone:</span>
              <span className="value">{profile.phone}</span>
            </div>
            <div className="detail-row">
              <span className="label">Department:</span>
              <span className="value">{profile.department}</span>
            </div>
            <div className="detail-row">
              <span className="label">Position:</span>
              <span className="value">{profile.position}</span>
            </div>
            <div className="detail-row">
              <span className="label">Join Date:</span>
              <span className="value">{profile.joinDate}</span>
            </div>
            <div className="detail-row">
              <span className="label">Salary:</span>
              <span className="value">{profile.salary}</span>
            </div>
            <div className="detail-row">
              <span className="label">Manager:</span>
              <span className="value">{profile.manager}</span>
            </div>
          </div>

          <button className="action-btn edit-btn">✎ Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
