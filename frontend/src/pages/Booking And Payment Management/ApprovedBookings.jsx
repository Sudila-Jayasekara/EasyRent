import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ApproveAndReject_Popup from './ApproveAndReject_Popup'; // Import the ApproveAndReject_Popup component

const ShowBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user')); // Get the logged-in user
      console.log('User:', user);
      const userId = user ? user._id : '';

      if (userId) {
        // Get all vehicles owned by the user
        const response = await axios.get(`http://localhost:5556/api/vehicle/owner/${user._id}`);
        const vehicles = response.data;

        // Fetch bookings for each vehicle
        const updatedBookings = await Promise.all(vehicles.map(async (vehicle) => {
          try {
            // Get bookings for the current vehicle
            const bookingResponse = await axios.get(`http://localhost:5556/api/booking/vehicle/${vehicle._id}`);
            const vehicleBookings = bookingResponse.data;

            // Process each booking for the current vehicle
            const processedBookings = await Promise.all(vehicleBookings.map(async (booking) => {
              // Fetch renter details
              const renterResponse = await axios.get(`http://localhost:5556/api/renter/${booking.renter_id}`);
              const renterUsername = renterResponse.data.username;

              // Return processed booking details
              return {
                ...booking,
                renter_username: renterUsername,
                vehicle_brand: vehicle.brand,
                vehicle_model: vehicle.model
              };
            }));

            return processedBookings;
          } catch (error) {
            console.error('Error fetching bookings for vehicle:', vehicle._id, error);
            return [];
          }
        }));

        // Flatten the array of arrays into a single array of bookings
        const flattenedBookings = updatedBookings.flat();
        
        // Set the state with the fetched and processed bookings
        setBookings(flattenedBookings);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
};

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCheckButtonClick = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleStatusClick = async (bookingId, newStatus) => {
    try {
      await axios.patch(`http://localhost:5556/api/booking/${bookingId}`, {
        status: newStatus
      });
      fetchBookings();
      setShowModal(false); // Close the modal after status update
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Track Your Approved Bookings</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              ID
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Customer
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Model
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Service Type
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Location
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Es. Start Date
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Es. End Date
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Status
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Generate Bill
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings
            .filter(booking => booking.status === 'approved') // Filter only approved bookings
            .map((booking, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{booking.renter_username}</td>
                <td className="py-2 px-4">{booking.vehicle_model}</td>
                <td className="py-2 px-4">{booking.serviceType}</td>
                <td className="py-2 px-4">{booking.location}</td>
                <td className="py-2 px-4">{formatDate(booking.startDate)}</td>
                <td className="py-2 px-4">{formatDate(booking.endDate)}</td>
                <td className="py-2 px-4">
                  <button
                    className={`px-3 py-1 rounded-md ${booking.status === 'pending' ? 'bg-blue-500 text-white' : booking.status === 'approved' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                    onClick={() => handleCheckButtonClick(booking)}
                  >
                    {booking.status}
                  </button>
                </td>
                <td className="py-2 px-4">
                  <Link to={`/payment/generateBill/${booking._id}`} className="px-3 py-1 rounded-md bg-blue-500 text-white">
                    Generate Bill
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showModal && (
        <ApproveAndReject_Popup
          booking={selectedBooking}
          onApprove={() => handleStatusClick(selectedBooking._id, 'approved')}
          onReject={() => handleStatusClick(selectedBooking._id, 'rejected')}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ShowBooking;
