import React, { useState } from 'react';
import { BASE_URL } from '../../service';
import { toast } from 'react-toastify';
import './ChangePassword.css'

import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/v1/users/profile/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you have a token stored in localStorage
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || 'Failed to update password');
      }

      toast.success(data.msg);
      setFormData({ currentPassword: '', newPassword: '' }); // Clear form fields on successful update
      navigate('/profile');

    } catch (error) {
      toast.error(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Loading...' : 'Change Password'}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
