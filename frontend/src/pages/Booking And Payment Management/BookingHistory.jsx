import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const BookingHistory = () => {
  const navigate = useNavigate();

  

  const [bookings, setBookings] = useState([]);
  const [renterId, setRenterId] = useState("");

  useEffect(() => {
    console.log('Location changed, fetching bookings...');
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('User:', user);
      const userId = user ? user._id : '';
      setRenterId(userId);
      
      if (userId) {
        const response = await axios.get(`http://localhost:5556/api/booking/renter/${userId}`);
        const booking = response.data;
  
        // Fetch estimatePrice for each booking
        const bookingsWithEstimatePrice = await Promise.all(booking.map(async (booking) => {
          try {
            const paymentResponse = await axios.get(`http://localhost:5556/api/payment/booking/${booking._id}`);
            const estimatePrice = paymentResponse.data.estimatePrice;
            return { ...booking, estimatePrice };
          } catch (error) {
            console.error('Error fetching estimate price for booking:', booking._id, error);
            return booking;
          }
        }));
  
        setBookings(bookingsWithEstimatePrice);
  
        // Log the bookings array immediately after setting the state
        console.log('Bookings after setting state:', bookingsWithEstimatePrice);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const handleDelete = async (bookingId) => {
    try {
      // First, delete the payment associated with the booking
      await axios.delete(`http://localhost:5556/api/payment/booking/${bookingId}`);
  
      // Then, delete the booking
      await axios.delete(`http://localhost:5556/api/booking/${bookingId}`);
  
      // Update the state to remove the deleted booking
      setBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
  
      console.log("Booking and associated payment deleted successfully");
    } catch (error) {
      console.error('Error deleting booking and payment:', error);
    }
  };

  const handleEdit = (bookingId) => {
    navigate(`/booking/update/${bookingId}`);
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
              Model
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
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Location
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Estimate Price
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Actions
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Display Bill
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking,index) => (
            <tr key={booking._id} className="hover:bg-gray-100">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{booking.vehicle_id}</td>
              <td className="py-2 px-4">{booking.serviceType}</td>
              <td className="py-2 px-4">{formatDate(booking.startDate)}</td>
              <td className="py-2 px-4">{formatDate(booking.endDate)}</td>
              <td className="py-2 px-4">{booking.status}</td>
              <td className="py-2 px-4">{booking.location}</td>
              <td className="py-2 px-4">{booking.estimatePrice}</td>
              <td className="py-2 px-4 space-x-8">
                {/* Edit icon */}
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleEdit(booking._id)}
                />
                {/* Delete icon */}
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(booking._id)}
                />
              </td>
              <td className="py-2 px-4">
                        {booking.status === 'approved' && (
                            <Link to={`/payment/displayBill/${booking._id}`} className="px-3 py-1 rounded-md bg-blue-500 text-white">
                                Display Bill
                            </Link>
                        )}
                    </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
