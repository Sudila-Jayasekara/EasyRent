import React, { useState } from 'react';
import axios from 'axios'; // You'll need to install axios if not already done

const HrEmpLeave = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveFrom, setLeaveFrom] = useState('');
  const [leaveTo, setLeaveTo] = useState('');
  const [actionPlan, setActionPlan] = useState('Active'); // Default to Active
  const [error, setError] = useState('');

  const handleLeaveRequest = async () => {
    setError(''); // Clear any previous error messages
    

    // Basic form validation
    if (!employeeName || !leaveType || !leaveFrom || !leaveTo) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5556/api/leaverequest', {
        employeeName,
        leaveType,
        leaveFrom,
        leaveTo,
        actionPlan,
      });
      

      if (response.status === 200) {
        // Show success message or redirect to a confirmation page
        console.log('Leave request submitted successfully!');
      }
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error submitting leave request:', error.message);
      setError('Error submitting leave request. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Leave Request</h1>
        {error && (
          <p className="text-red-500 mb-2">{error}</p>
        )}
        <div className="mb-4">
          <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
            Employee Name
          </label>
          <input
            type="text"
            id="employeeName"
            className="mt-1 p-2 border rounded-md w-full"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="leaveType" className="block text-sm font-medium text-gray-700">
            Leave Type
          </label>
          <input
            type="text"
            id="leaveType"
            className="mt-1 p-2 border rounded-md w-full"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="leaveFrom" className="block text-sm font-medium text-gray-700">
            Leave From
          </label>
          <input
            type="date"
            id="leaveFrom"
            className="mt-1 p-2 border rounded-md w-full"
            value={leaveFrom}
            onChange={(e) => setLeaveFrom(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="leaveTo" className="block text-sm font-medium text-gray-700">
            Leave To
          </label>
          <input
            type="date"
            id="leaveTo"
            className="mt-1 p-2 border rounded-md w-full"
            value={leaveTo}
            onChange={(e) => setLeaveTo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="actionPlan" className="block text-sm font-medium text-gray-700">
            Action Plan
          </label>
          <select
            id="actionPlan"
            className="mt-1 p-2 border rounded-md w-full"
            value={actionPlan}
            onChange={(e) => setActionPlan(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleLeaveRequest}
        >
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default HrEmpLeave;
