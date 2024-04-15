import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove user details and token from local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      {/* You can add a spinner or other loading indicator here if needed */}
    </div>
  );
};

export default Logout;