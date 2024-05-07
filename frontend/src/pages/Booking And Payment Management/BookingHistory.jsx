import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const BookingHistory = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [renterId, setRenterId] = useState("");
  const [renter_nic, setRenterNIC] = useState("");
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('Location changed, fetching bookings...');
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('User:', user);
      const userNIC = user ? user._id : '';
      setRenterNIC(userNIC);

      if (userNIC) {
        const response = await axios.get(`http://localhost:5556/api/booking/renter/${userNIC}`);
        const booking = response.data;

        // Fetch estimatePrice for each booking
        const bookingsWithEstimatePrice = await Promise.all(booking.map(async (booking) => {
          try {
            const paymentResponse = await axios.get(`http://localhost:5556/api/payment/booking/${booking._id}`);
            const paymentStatus = paymentResponse.data.paymentStatus;
            return { ...booking, paymentStatus };
          } catch (error) {
            console.error('Error fetching estimate price for booking:', booking._id, error);
            return booking;
          }
        }));

        // get vehicle details for each booking
        const updatedBookings = await Promise.all(bookingsWithEstimatePrice.map(async (booking) => {
          const vehicleResponse = await axios.get(`http://localhost:5556/api/vehicle/${booking.vehicle_id}`);
          return {
            ...booking,
            vehicle_model: vehicleResponse.data.model,
            vehicle_brand: vehicleResponse.data.brand
          };
        }));

        setBookings(updatedBookings);
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
    const confirmed = window.confirm("Are you sure you want to delete this booking?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5556/api/payment/booking/${bookingId}`);
        await axios.delete(`http://localhost:5556/api/booking/${bookingId}`);
        setBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
        console.log("Booking and associated payment deleted successfully");
      } catch (error) {
        console.error('Error deleting booking and payment:', error);
      }
    }
  };

  const handleEdit = (bookingId) => {
    navigate(`/booking/update/${bookingId}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBookings = bookings.filter((booking) =>
    Object.values(booking).some((detail) =>
      String(detail).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      
      {/* Search Box */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />

      {/* Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">ID</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Model</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Service Type</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Start Date</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">End Date</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Location</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Booking Status</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Payment Status</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Actions</th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">Display Bill</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking, index) => (
            <tr key={booking._id} className="hover:bg-gray-100">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{booking.vehicle_model}</td>
              <td className="py-2 px-4">{booking.serviceType}</td>
              <td className="py-2 px-4">{formatDate(booking.startDate)}</td>
              <td className="py-2 px-4">{formatDate(booking.endDate)}</td>
              <td className="py-2 px-4">{booking.location}</td>
              <td className="py-2 px-4">{booking.status}</td>
              <td className="py-2 px-4">{booking.paymentStatus}</td>
              <td className="py-2 px-4 space-x-8">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleEdit(booking._id)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(booking._id)}
                />
              </td>
              <td className="py-2 px-4">
                {booking.status === 'approved' ? (
                  <Link to={`/payment/displayBill/${booking._id}`} className="px-3 py-1 rounded-md bg-blue-500 text-white block">
                    Display Bill
                  </Link>
                ) : (
                  "----"
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
