import React from 'react';
import { Link } from 'react-router-dom';

const BookingAndPayment = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Get the logged-in user

  return (
    <div className="container mx-auto mx-10 py-8">
      <h1 className="text-3xl font-bold mb-4">Temporary Dashboard</h1>
      
      <h2 className="text-xl font-semibold mb-4">Booking</h2>
      <div className="grid grid-cols-1 gap-4">
        {user && user.userType === 'renter' && (
          <>
            <div className="w-48 bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-center">
              <Link to="/homerenter">Create Booking</Link>
            </div>
            <div className="w-48 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg text-center">
              <Link to="/booking/update">Update Booking</Link>
            </div>
            <div className="w-48 bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg text-center">
              <Link to="/booking/history">Booking History</Link>
            </div>
          </>
        )}
        {user && user.userType === 'owner' && (
          <>
            <div className="w-48 bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-lg text-center">
              <Link to="/booking/check">Check Booking</Link>
            </div>
            <div className="w-48 bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 rounded-lg text-center">
              <Link to="/booking/approved">Approved Bookings</Link>
            </div>
            <div className="w-48 bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-lg text-center">
              <Link to="/booking/rejected">Rejected Bookings</Link>
            </div>
            <div className="w-48 bg-gray-500 hover:bg-gray-600 text-white py-4 px-6 rounded-lg text-center">
              <Link to="/booking/pending">Pending Bookings</Link>
            </div>
          </>
        )}
      </div>

      {/* <h2 className="text-xl font-semibold mt-8 mb-4">Payment</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        Add payment links here
      </div> */}
    </div>
  );
};

export default BookingAndPayment;
