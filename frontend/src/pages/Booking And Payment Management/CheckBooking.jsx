import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowBookingO = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const vehicleId = "v001"; // Specify the renter ID you want to filter for

  useEffect(() => {
    axios.get(`http://localhost:5556/api/booking`)
      .then(response => {
        console.log('Response data:', response.data);
        

        // Filter the bookings based on renter ID
        const filtered = response.data.filter(booking => booking.vehicle_id === vehicleId);
        setFilteredBookings(filtered);
        setBookings(filtered);
        
        // Fetch renter usernames for filtered bookings
        fetchRenterUsernames(filtered);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, [vehicleId]); // Include vehicleId as a dependency to re-run effect when it changes

  const fetchRenterUsernames = (filteredBookings) => {
    filteredBookings.forEach(booking => {
      axios.get(`http://localhost:5556/api/renter/${booking.renter_id}`)
        .then(response => {
          const updatedBookings = filteredBookings.map(bookingItem => {
            if (bookingItem.id === booking.id) {
              return {
                ...bookingItem,
                renter_username: response.data.username // Assuming username is in response
              };
            }
            return bookingItem;
          });
          setFilteredBookings(updatedBookings);
        })
        .catch(error => {
          console.error(`Error fetching renter details for booking ${booking.id}:`, error);
        });
    });
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  const handleApprove = (bookingId) => {
    // Call API to update booking status to "approved"
    axios.patch(`http://localhost:5556/api/booking/${bookingId}`, { status: 'approved' })
      .then(response => {
        // Update local state after successful update
        setBookings(prevBookings => {
          return prevBookings.map(booking => {
            if (booking._id === bookingId) {
              return { ...booking, status: 'approved' };
            } else {
              return booking;
            }
          });
        });
      })
      .catch(error => {
        console.error('Error approving booking:', error);
      });
  };

  const handleReject = (bookingId) => {
    // Call API to update booking status to "rejected"
    axios.patch(`http://localhost:5556/api/booking/${bookingId}`, { status: 'rejected' })
      .then(response => {
        // Update local state after successful update
        setBookings(prevBookings => {
          return prevBookings.map(booking => {
            if (booking._id === bookingId) {
              return { ...booking, status: 'rejected' };
            } else {
              return booking;
            }
          });
        });
      })
      .catch(error => {
        console.error('Error rejecting booking:', error);
      });
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
              <td className="py-2 px-4">{booking.renter_id}</td>
              <td className="py-2 px-4">{booking.vehicle_id}</td>
              <td className="py-2 px-4">{booking.serviceType}</td>
              <td className="py-2 px-4">{formatDate(booking.startDate)}</td>
              <td className="py-2 px-4">{formatDate(booking.endDate)}</td>
              <td className="py-2 px-4">{booking.status}</td>
              <td className="py-2 px-4">
                {/* {booking.status === 'pending' && (
                  <>
                    <button onClick={() => handleApprove(booking._id)} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">Approve</button>
                    <button onClick={() => handleReject(booking._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
                  </>
                )} */}
                <>
                  <button onClick={() => handleApprove(booking._id)} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">Approve</button>
                  <button onClick={() => handleReject(booking._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Reject</button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBookingO;
