import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

const ReplyList = () => {
  const [replies, setReplies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Reply List', 10, 10);
    let yPos = 20;
    replies.forEach((reply, index) => {
      doc.text(`Complain ID: ${reply.complainId}`, 10, yPos);
      doc.text(`Reply: ${reply.reply}`, 10, yPos + 10);
      doc.text(`Vehicle Review: ${reply.vehicleReview}`, 10, yPos + 20);
      doc.text(`Driver Review: ${reply.driverReview}`, 10, yPos + 30);
      yPos += 40;
    });
    doc.save('ReplyList.pdf');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.complainId);
  };

  const filteredReplies = replies.filter(reply =>
    reply.complainId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reply List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button onClick={generatePDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Generate PDF
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Complain Id</th> 
            <th className="border border-gray-300 px-4 py-2">Reviews for vehicles</th>
            <th className="border border-gray-300 px-4 py-2">Reviews for Drivers</th>
            <th className="border border-gray-300 px-4 py-2">Reply</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReplies.map((reply) => (
            <tr key={reply._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{reply.complainId}</td>
              <td className="border border-gray-300 px-4 py-2">{reply.vehicleReview}</td>
              <td className="border border-gray-300 px-4 py-2">{reply.driverReview}</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-600">{reply.reply}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link to={`/update-reply/${reply._id}`} state={{replyDetails:reply}} className="text-blue-500 font-bold hover:text-blue-700 mr-2">Update</Link>
                <button onClick={() => handleDelete(reply._id)} className="text-red-500 font-bold hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReplyList;