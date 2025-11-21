// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/login", {
        email: form.email,
        password: form.password
      });
      const msg = res?.data?.message ?? 'Success';
      alert(msg);
      if (res.status === 200) navigate('/home');
    } catch (err) {
      const serverMsg = err?.response?.data?.message ?? err?.message;
      if (serverMsg) alert('Login failed: ' + serverMsg);
      else if (err.request) alert('No response from server. Is backend running?');
      else alert('Error: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Volunteer Login</h2>

        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
