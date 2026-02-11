import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { UserRole } from '../../../config/sidebarConfig';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Check registered users first
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const registeredUser = registeredUsers.find((user: any) => user.email === email && user.password === password);

    if (registeredUser) {
      const user = {
        id: registeredUser.id,
        name: registeredUser.name,
        email: registeredUser.email,
        role: registeredUser.role as UserRole,
        avatar: registeredUser.avatar || '/src/assets/images/avatar/default.jpg'
      };
      login(user);
      navigate('/dashboard');
      return;
    }

    // Mock login logic - in a real app, this would call an API
    if (email === 'superadmin@example.com' && password === 'password') {
      const user = {
        id: '1',
        name: 'Super Admin User',
        email: email,
        role: 'SUPER_ADMIN' as UserRole,
        avatar: '/src/assets/images/avatar/default.jpg'
      };
      login(user);
      navigate('/dashboard');
    } else if (email === 'admin@example.com' && password === 'password') {
      const user = {
        id: '2',
        name: 'Admin User',
        email: email,
        role: 'ADMIN' as UserRole,
        avatar: '/src/assets/images/avatar/default.jpg'
      };
      login(user);
      navigate('/dashboard');
    } else if (email === 'manager@example.com' && password === 'password') {
      const user = {
        id: '3',
        name: 'Manager User',
        email: email,
        role: 'MANAGER' as UserRole,
        avatar: '/src/assets/images/avatar/default.jpg'
      };
      login(user);
      navigate('/dashboard');
    } else if (email === 'student@example.com' && password === 'password') {
      const user = {
        id: '4',
        name: 'Student User',
        email: email,
        role: 'STUDENT' as UserRole,
        avatar: '/src/assets/images/avatar/default.jpg'
      };
      login(user);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
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
