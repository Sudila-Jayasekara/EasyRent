import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const renterId = "6618f9b8c9b5f40d7a2e1201";

  useEffect(() => {
    axios.get(`http://localhost:5556/api/booking`)
      .then(response => {
        console.log('Response data:', response.data);
        // Filter the bookings based on renter ID
        const filteredBookings = response.data.filter(booking => booking.renter_id === renterId);
        setBookings(filteredBookings);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              ID
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

            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Start Date
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              End Date
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking,index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{booking.renter_id}</td>
              <td className="py-2 px-4">{booking.vehicle_id}</td>
              <td className="py-2 px-4">{booking.serviceType}</td>
              <td className="py-2 px-4">{formatDate(booking.startDate)}</td>
              <td className="py-2 px-4">{formatDate(booking.endDate)}</td>
              <td className="py-2 px-4">{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
