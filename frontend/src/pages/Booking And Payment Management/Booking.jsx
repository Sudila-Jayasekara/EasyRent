import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Bookings</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link to="/booking/create" className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg block text-center">
            Create Booking
          </Link>
          <Link to="/booking/update" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg block text-center">
            Update Booking
          </Link>
          <Link to="/booking/history" className="bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg block text-center">
            Booking History
          </Link>
          <Link to="/booking/check" className="bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-lg block text-center">
            Check Booking
          </Link>
          <Link to="/booking/approved" className="bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 rounded-lg block text-center">
            Approved Bookings
          </Link>
          <Link to="/booking/rejected" className="bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-lg block text-center">
            Rejected Bookings
          </Link>
          <Link to="/booking/pending" className="bg-gray-500 hover:bg-gray-600 text-white py-4 px-6 rounded-lg block text-center">
            Pending Bookings
          </Link>
        </div>
      </div>
  );
};

export default Booking;
