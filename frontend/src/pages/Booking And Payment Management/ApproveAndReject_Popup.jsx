import React, { useState, useEffect } from 'react';

const PopupModal = ({ booking, onApprove, onReject, onClose }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Set the initial value of description when booking changes
    setDescription(booking.description || '');
  }, [booking]);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg relative">
        <span className="absolute top-0 right-0 text-red-500 font-bold text-2xl pr-2 cursor-pointer" onClick={onClose}>&times;</span>
        <h2 className="text-lg font-semibold mb-4">Confirm Booking</h2>
        <p className="mb-4">Approve or reject the booking for {booking.vehicle_name} by {booking.renter_username}?</p>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
          <textarea id="description" className="w-full border rounded-md p-2" value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="flex justify-between">
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2" onClick={() => onApprove(description)}>Approve</button>
          <button className="bg-red-500 text-white py-2 px-4 rounded ml-2" onClick={() => onReject(description)}>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
