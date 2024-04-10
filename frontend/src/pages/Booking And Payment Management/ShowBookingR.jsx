import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowBooking = () => {
  const [bookings, setBookings] = useState([]);
  const renterid = "119119119";

  useEffect(() => {
    axios.get(`http://localhost:5556/api/booking/renter/${renterid}`)
      .then(response => {
        console.log('Response data:', response.data);
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Booking ID
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Customer Name
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Vehicle
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Service Type
            </th>
            {/* Add more table headers for other booking details */}
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id} className="hover:bg-gray-100">
              <td className="py-2 px-4">{booking._id}</td>
              <td className="py-2 px-4">{booking.renter}</td>
              <td className="py-2 px-4">{booking.vehicle}</td>
              <td className="py-2 px-4">{booking.serviceType}</td>
              {/* Add more table cells for other booking details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBooking;
