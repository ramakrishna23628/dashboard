import React, { useState } from 'react';
import './App.css';
import './styles/Dashboard.css';
import LoginForm from './components/LoginForm';
import AdminDashboard from './components/AdminDashboard';
import HRDashboard from './components/HRDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import Header from './components/Header';
import { staticData } from './data/staticData';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = ({ email, password, role }) => {
    // Set logged in state and user role
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  // Always render a single container div
  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Header userRole={userRole} onLogout={handleLogout} />
          {userRole === 'admin' && <AdminDashboard data={staticData} />}
          {userRole === 'hr' && <HRDashboard data={staticData} />}
          {userRole === 'employee' && <EmployeeDashboard data={staticData} />}
        </>
      )}
    </div>
  );
}

export default App;
