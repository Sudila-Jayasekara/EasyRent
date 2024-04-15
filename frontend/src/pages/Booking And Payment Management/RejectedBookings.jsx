import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopupModal from './ApproveAndReject_Popup'; // Import the PopupModal component

const ShowBooking = () => {
  const [bookings, setBookings] = useState([]);
  const vehicleId = "661ca28129d52f39a6e42e84"; // Specify the renter ID you want to filter for
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:5556/api/booking/vehicle/${vehicleId}`);
      const booking = response.data;
      
      const updatedBookings = await Promise.all(booking.map(async (booking) => {
        const [renterResponse, vehicleResponse] = await Promise.all([
          axios.get(`http://localhost:5556/api/renter/${booking.renter_id}`),
          axios.get(`http://localhost:5556/api/vehicle/${booking.vehicle_id}`)
        ]);
      
        return {
          ...booking,
          renter_username: renterResponse.data.username,
          vehicle_brand: vehicleResponse.data.brand,
          vehicle_model: vehicleResponse.data.model
        };
      }));
      setBookings(updatedBookings);
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
    <div className="container mx-auto">
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
          </tr>
        </thead>
        <tbody>
          {bookings
            .filter(booking => booking.status === 'rejected') // Filter only approved bookings
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
              </tr>
            ))}
        </tbody>
      </table>
      {showModal && (
            <PopupModal
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
