import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './UserProfile.css';
import { BASE_URL } from '../../service';
import user from '../../assets/user.jpg'
import { NavLink } from 'react-router-dom';



const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/users/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you have a token stored in localStorage
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        // console.log(data);
        setUserData(data.user); // Update state with user data (extracted from 'user' property)
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChangePassword = () => {
    // Add logic for changing password here
    console.log('Changing password...');
    // You can implement password change functionality here
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if API request fails
  }

  if (!userData) {
    return <div>No user data available</div>; // Show message if user data is not available
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-content">
          <div className="profile-header">
            <img className="profile-image"  src={user} alt="Profile" />
            <div className="profile-info">
              <h1 className="profile-name">Welcome, {userData.name}</h1>
              <p className="profile-role">Role: {userData.role}</p>
            </div>
            {userData.isVoted ? (
              <FaCheckCircle className="verified-icon" />
            ) : (
              <FaTimesCircle className="not-verified-icon" />
            )}
          </div>
          <div className="profile-details">
            <p><strong>Age:</strong> {userData.age}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Mobile:</strong> {userData.mobile}</p>
            <p><strong>Address:</strong> {userData.address}</p>
            <p><strong>Aadhar Card Number:</strong> {userData.aadharCardNumber}</p>
          </div>
          <div className="profile-buttons">
            <NavLink to="/changepassword" className="nav-link"><button>Change password</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
