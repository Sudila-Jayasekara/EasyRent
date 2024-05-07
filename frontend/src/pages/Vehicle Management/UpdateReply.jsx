// UpdateReply.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateReply = () => {
  const { id } = useParams(); // Get reply id from URL params
  const [replyData, setReplyData] = useState({
    complainId: '',
    reply: '',
    vehicleReview: '',
    driverReview: ''
  });

  useEffect(() => {
    const fetchReply = async () => {
      try {
        const response = await axios.get(`/api/complainreply/${id}`);
        setReplyData(response.data);
      } catch (error) {
        console.error('Error fetching reply:', error);
      }
    };

    fetchReply();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData({ ...replyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/complainreply/${id}`, replyData);
      alert('Reply updated successfully!');
      // Redirect or navigate back to the reply list page
    } catch (error) {
      console.error('Error updating reply:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Update Reply</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Complain Id:</label>
          <input type="text" name="complainId" value={replyData.complainId} disabled className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Reply:</label>
          <input type="text" name="reply" value={replyData.reply} onChange={handleInputChange} className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Vehicle Review:</label>
          <input type="text" name="vehicleReview" value={replyData.vehicleReview} onChange={handleInputChange} className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Driver Review:</label>
          <input type="text" name="driverReview" value={replyData.driverReview} onChange={handleInputChange} className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
      </form>
    </div>
  );
};

export default UpdateReply;
