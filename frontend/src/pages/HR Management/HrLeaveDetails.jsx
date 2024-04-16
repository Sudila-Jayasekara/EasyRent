import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HrLeaveDetails = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState(null); // New state for selected leave request
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5556/api/leaverequest');
        setLeaveRequests(response.data.data);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };

    fetchLeaveRequests();
  }, []);

  

  const handleDelete = async (request) => {
    try {
      await axios.delete(`http://localhost:5556/api/leaverequest/${request._id}`);
      setLeaveRequests(leaveRequests.filter(req => req._id !== request._id));
      alert('Leave request deleted successfully');
    } catch (error) {
      console.error('Error deleting leave request:', error);
      alert('Failed to delete leave request');
    }
  };

  const handleView = (request) => {
    setSelectedLeaveRequest(request); // Set the selected leave request when "View" button is clicked
  };

  const handleAccept = async (request) => {
    try {
      // Implement your leave acceptance logic here
      // For example, send a request to your backend to update the leave request status to "Accepted"
      await axios.put(`http://localhost:5556/api/leaverequest/${request._id}`, { status: 'Accepted' });
      // Assuming your backend updates the status of the leave request, you can then remove it from the UI
      setLeaveRequests(leaveRequests.filter(req => req._id !== request._id));
      alert('Leave request accepted successfully');
    } catch (error) {
      console.error('Error accepting leave request:', error);
      alert('Failed to accept leave request');
    }
  };

  const handleCloseModal = () => {
    setSelectedLeaveRequest(null); // Clear the selected leave request when closing the modal
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Leave Requests</h2>
      <div className="leave-request-container">
        <table className="table-auto w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">Leave Type</th>
              <th className="px-4 py-2">Leave From</th>
              <th className="px-4 py-2">Leave To</th>
              <th className="px-4 py-2">Action Plan</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map(request => (
              <tr key={request._id} className="border-b">
                <td className="px-4 py-2">{request.employeeName}</td>
                <td className="px-4 py-2">{request.leaveType}</td>
                <td className="px-4 py-2">{new Date(request.leaveFrom).toLocaleDateString()}</td>
                <td className="px-4 py-2">{new Date(request.leaveTo).toLocaleDateString()}</td>
                <td className="px-4 py-2">{request.actionPlan}</td>
                <td className="action-button">
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded mr-2" onClick={() => handleDelete(request)}>
                    Delete
                  </button>
                  
                  <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleAccept(request)}>
                    Accept
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrLeaveDetails;
