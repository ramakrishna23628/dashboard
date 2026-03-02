import React, { useState } from 'react';
import '../styles/Login.css';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !role) {
      setError('All fields are required!');
      return;
    }

    setError('');
    onLogin({ email, password, role });

    setEmail('');
    setPassword('');
    setRole('employee');
  };

  return (
    <div className="login-container">
      {/* left side description */}
      <div className="login-info">
        <h2>Welcome to the Dashboard</h2>
        <p>
          Access your personalized workspace based on your role. Manage tasks,
          view reports, and stay connected with your team.
        </p>
      </div>

      {/* login card with hover effect */}
      <div className="login-card">
        <h1>Dashboard Login</h1>
        <p className="subtitle">Select your role and login</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="hint">Use any email/password combination (no real auth)</p>
      </div>
    </div>
  );
}

export default LoginForm;