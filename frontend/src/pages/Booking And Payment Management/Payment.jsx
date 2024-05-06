import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Payments</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link to="/payment/create" className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg block text-center">
            Create Payment
          </Link>
        </div>
      </div>
  );
};

export default Booking;
