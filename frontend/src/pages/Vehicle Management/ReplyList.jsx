import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReplyList = () => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/complainreply');
        setReplies(response.data);
      } catch (error) {
        console.error('Error fetching replies:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/complainreply/${id}`);
      setReplies(replies.filter(reply => reply._id !== id));
      alert('Reply deleted successfully!');
    } catch (error) {
      console.error('Error deleting reply:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reply List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Complain Id</th>
            <th className="border border-gray-300 px-4 py-2">Reply</th>
            <th className="border border-gray-300 px-4 py-2">Vehicle Review</th>
            <th className="border border-gray-300 px-4 py-2">Driver Review</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {replies.map((reply) => (
            <tr key={reply._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{reply.complainId}</td>
              <td className="border border-gray-300 px-4 py-2">{reply.reply}</td>
              <td className="border border-gray-300 px-4 py-2">{reply.vehicleReview}</td>
              <td className="border border-gray-300 px-4 py-2">{reply.driverReview}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/update-reply/${reply._id}`} className="text-blue-500 hover:text-blue-700 mr-2">Update</Link>
                <button onClick={() => handleDelete(reply._id)} className="text-red-500 hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReplyList;
