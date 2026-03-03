import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    college: '',
    usn: '',
    scheme: '',
    semester: 1,
    branch: '',
    password: '',
    confirm_password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: name === 'semester' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic Validation
    if (!formData.email || !formData.full_name || !formData.password || !formData.confirm_password) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${(import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:8000'}/api/v1/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            full_name: formData.full_name,
            college: formData.college,
            usn: formData.usn,
            scheme: formData.scheme,
            semester: formData.semester,
            branch: formData.branch,
            password: formData.password,
            confirm_password: formData.confirm_password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Redirect to login page
        navigate('/login', {
          state: { message: 'Registration successful! Please login.' }
        });
      } else {
        setError(typeof data.detail === 'string' ? data.detail : JSON.stringify(data.detail) || 'Registration failed');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg" style={{ width: '500px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="card-title">Register for Educareer</h2>
            <p className="text-muted">Create your account to get started</p>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">College</label>
                <input
                  type="text"
                  className="form-control"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">USN</label>
                <input
                  type="text"
                  className="form-control"
                  name="usn"
                  value={formData.usn}
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Scheme</label>
                <input
                  type="text"
                  className="form-control"
                  name="scheme"
                  value={formData.scheme}
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Semester</label>
                <select
                  className="form-control"
                  name="semester"
                  value={formData.semester}
                  onChange={handleInputChange}
                  disabled={loading}
                >
                  {[1,2,3,4,5,6,7,8].map(sem => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Branch</label>
                <input
                  type="text"
                  className="form-control"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="mb-0">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;