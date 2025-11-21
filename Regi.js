import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Regi.css';

function Register() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('user');

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    password: '', confirmPassword: '', dateOfBirth: '', interests: '',
    terms: false, newsletter: false
  });
  const [zooForm, setZooForm] = useState({
    zooName: '', place: '', district: '', zooNo: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleZooChange = (e) => {
    const { name, value } = e.target;
    setZooForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate passwords match
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match ❌');
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/register", form);
      alert(res.data.message || 'Registered successfully ✅');
      navigate('/login');  // or wherever login is
    } catch (err) {
      const serverMsg = err?.response?.data?.message ?? err.message;
      alert('Registration error: ' + serverMsg);
    }
  };

  const handleZooSubmit = (e) => {
    e.preventDefault();
    if (!zooForm.zooName || !zooForm.place || !zooForm.district || !zooForm.zooNo) {
      alert('Please fill all zoo details 🦓');
      return;
    }
    // Navigate to volunteer route
    navigate('/volunteer');
  };

  return (
    <div className="register-container">
      <div className="form-wrapper">
        <div className="tab-header">
          <button
            className={`tab-btn ${activeTab === 'user' ? 'active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            User Registration
          </button>
          <button
            className={`tab-btn ${activeTab === 'zoo' ? 'active' : ''}`}
            onClick={() => setActiveTab('zoo')}
          >
            Zoo Registration
          </button>
        </div>

        {activeTab === 'user' && (
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>User Registration</h2>
            <div className="form-row">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
            <div className="form-row">
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
              />
            </label>
            <label>
              Areas of Interest:
              <select
                name="interests"
                value={form.interests}
                onChange={handleChange}
              >
                <option value="">Select an area</option>
                <option>Pet Care</option>
                <option>Healthcare</option>
                <option>Feeding and watering</option>
                <option>Cleaning</option>
                <option>Walking and Exercise</option>
                <option>Grooming and Bathing</option>
                <option>Adopting Events</option>
                <option>Other</option>
              </select>
            </label>
            <input type="submit" value="Create Account" />
          </form>
        )}

        {activeTab === 'zoo' && (
          <form className="register-form" onSubmit={handleZooSubmit}>
            <h2>Zoo Registration</h2>
            <label>
              Name of Zoo:
              <input
                type="text"
                name="zooName"
                value={zooForm.zooName}
                onChange={handleZooChange}
                required
              />
            </label>
            <label>
              Place:
              <input
                type="text"
                name="place"
                value={zooForm.place}
                onChange={handleZooChange}
                required
              />
            </label>
            <label>
              District:
              <input
                type="text"
                name="district"
                value={zooForm.district}
                onChange={handleZooChange}
                required
              />
            </label>
            <label>
              Zoo Number:
              <input
                type="text"
                name="zooNo"
                value={zooForm.zooNo}
                onChange={handleZooChange}
                required
              />
            </label>
            <input type="submit" value="Continue ➡️" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
