// Footer.js
import React from 'react';
import {useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/landing') {
    return null; // Don't render anything if the pathname is '/landing'
}
  return (
    <footer className="bg-yellow-400 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
