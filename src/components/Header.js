import React from 'react';
import '../styles/Dashboard.css';

function Header({ userRole, onLogout }) {
  const roleDisplay = {
    admin: '👨‍💼 Admin',
    hr: '👨‍💼 HR Manager',
    employee: '👤 Employee',
  };

  return (
    <header className="dashboard-header-top">
      <div className="header-left">
        <h1 className="app-title">Dashboard</h1>
      </div>
      <div className="header-right">
        <span className="user-role">{roleDisplay[userRole]}</span>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
