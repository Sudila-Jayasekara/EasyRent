import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopupModal from './ApproveAndReject'; // Import the PopupModal component

const ShowBookingO = () => {
  const [bookings, setBookings] = useState([]);
  const vehicleId = "6612773159f97d687eaa12bc"; // Specify the renter ID you want to filter for
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`http://localhost:5556/api/booking`);
      const filteredBookings = response.data.filter(booking => booking.vehicle_id === vehicleId);

      const updatedBookings = await Promise.all(filteredBookings.map(async (booking) => {
        const [renterResponse, vehicleResponse] = await Promise.all([
          axios.get(`http://localhost:5556/api/renter/${booking.renter_id}`),
          axios.get(`http://localhost:5556/api/vehicle/${booking.vehicle_id}`)
        ]);
      
        return {
          ...booking,
          renter_username: renterResponse.data.username,
          vehicle_name: vehicleResponse.data.name
        };
      }));
      
      

      setBookings(updatedBookings);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [vehicleId]);

  const handleCheckButtonClick = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleApprove = async (description) => {
    try {
      await axios.patch(`http://localhost:5556/api/booking/${selectedBooking._id}`, { 
        status: 'approved',
        description: description
      });
      fetchBookings();
      setShowModal(false);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };
  
  const handleReject = async (description) => {
    try {
      await axios.patch(`http://localhost:5556/api/booking/${selectedBooking._id}`, { 
        status: 'rejected',
        description: description
      });
      fetchBookings();
      setShowModal(false);
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
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
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
              Vehicle
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Service Type
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Location
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{booking.renter_username}</td>
              <td className="py-2 px-4">{booking.vehicle_name}</td>
              <td className="py-2 px-4">{booking.serviceType}</td>
              <td className="py-2 px-4">{booking.location}</td>
              <td className="py-2 px-4">{formatDate(booking.startDate)}</td>
              <td className="py-2 px-4">{formatDate(booking.endDate)}</td>
              <td className="py-2 px-4">{booking.status}</td>
              <td className="py-2 px-4">
                {/*}
                <>
                  <button onClick={() => handleApprove(booking._id)} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">Approve</button>
                  <button onClick={() => handleReject(booking._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
          </>*/}
                <button onClick={() => handleCheckButtonClick(booking)} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">Check</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
            <PopupModal
              booking={selectedBooking}
              onApprove={handleApprove}
              onReject={handleReject}
              onClose={() => setShowModal(false)}
            />
          )}
    </div>
  );
};

export default ShowBookingO;
