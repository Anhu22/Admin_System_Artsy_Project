import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');

  if (!email || !password) {
    setError('Please fill in all fields');
    return;
  }

  try {
    const response = await fetch(
      `${(import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:8000'}/api/v1/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Save token
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Login via AuthContext
      login(data.user);

      navigate('/dashboard');
    } else {
      setError(typeof data.detail === 'string' ? data.detail : JSON.stringify(data.detail) || 'Invalid email or password');
    }
  } catch (err) {
    setError('Server error. Please try again.');
  }
};

  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg" style={{ width: '400px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="card-title">Login to Educareer</h2>
            <p className="text-muted">Enter your credentials to access the system</p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="mb-2">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
            <small className="text-muted">
              Demo accounts:<br />
              superadmin@example.com / password (SUPER_ADMIN)<br />
              admin@example.com / password (ADMIN)<br />
              manager@example.com / password (MANAGER)<br />
              student@example.com / password (STUDENT)
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
