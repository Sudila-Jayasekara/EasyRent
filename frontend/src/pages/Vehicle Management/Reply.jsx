import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reply = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [reply, setReply] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5556/Complains/${id}`)
      .then((response) => {
        setComplaint(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/complainreply', {
        complainId: complaint._id,
        reply: reply,
        vehicleReview: complaint.Vehicle_description,
        driverReview: complaint.Driver_description
      });
      alert('Reply submitted successfully!');
    } catch (error) {
      console.error('Error submitting reply:', error);
      // Handle error, maybe show an error message
    }
  };

  if (!complaint) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='wrapper flex justify-center items-center h-screen'>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="block flex justify-center text-gray-700 text-xl font-bold mb-2">Reply Form</h1>
          <div className='mb-4'>
            <label>Complain Id</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={complaint._id}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label>Review for vehicle</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={complaint.Vehicle_description}
              readOnly
            />
          </div>
          <div className='mb-4'>
            <label>Review for Driver</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={complaint.Driver_description}
              readOnly
            />
          </div>
          <div>
            <label>Reply</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              required
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Reply;
