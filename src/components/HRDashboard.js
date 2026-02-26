import React, { useState } from 'react';
import '../styles/Dashboard.css';

function HRDashboard({ data }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter employees based on search term
  const filteredEmployees = data.employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard hr-dashboard">
      <h1>HR Dashboard</h1>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Employee Management</h2>
          <button className="action-btn update-btn">✎ Update Employee</button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search employees by name or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <p className="search-result">Showing {filteredEmployees.length} employee(s)</p>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>{emp.salary}</td>
                    <td>
                      <span className={`status ${emp.status.toLowerCase()}`}>
                        {emp.status}
                      </span>
                    </td>
                    <td>
                      <button className="action-link">View</button>
                      <button className="action-link delete">Remove</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-results">
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;
