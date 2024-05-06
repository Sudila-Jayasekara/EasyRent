// UpdateReply.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateReply = () => {
  const { complainId } = useParams(); // Get complainId from URL params
  const [replyData, setReplyData] = useState({
    complainId: '',
    reply: '',
    vehicleReview: '',
    driverReview: ''
  });

  useEffect(() => {
    const fetchReply = async () => {
      try {
        const response = await axios.get(`/api/complainreply/${complainId}`);
        setReplyData(response.data);
      } catch (error) {
        console.error('Error fetching reply:', error);
      }
    };

    fetchReply();
  }, [complainId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReplyData({ ...replyData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/complainreply/${complainId}`, replyData);
      alert('Reply updated successfully!');
      // Redirect or navigate back to the reply list page
    } catch (error) {
      console.error('Error updating reply:', error);
    }
  };

  return (
    <div>
      <h1>Update Reply</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Complain Id:</label>
          <input type="text" name="complainId" value={replyData.complainId} disabled />
        </div>
        <div>
          <label>Reply:</label>
          <input type="text" name="reply" value={replyData.reply} onChange={handleInputChange} />
        </div>
        <div>
          <label>Vehicle Review:</label>
          <input type="text" name="vehicleReview" value={replyData.vehicleReview} onChange={handleInputChange} />
        </div>
        <div>
          <label>Driver Review:</label>
          <input type="text" name="driverReview" value={replyData.driverReview} onChange={handleInputChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateReply;
