import React, { useState } from 'react';
import axios from 'axios';

const HrEmpLeave = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveFrom, setLeaveFrom] = useState('');
  const [leaveTo, setLeaveTo] = useState('');
  const [actionPlan, setActionPlan] = useState('Active');
  const [errors, setErrors] = useState({
    employeeName: '',
    leaveType: '',
    leaveFrom: '',
    leaveTo: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleLeaveRequest = async () => {
    setSuccessMessage('');

    // Basic form validation
    const newErrors = {};
    if (!employeeName.trim()) {
      newErrors.employeeName = 'Employee name is required';
    }
    if (!leaveType.trim()) {
      newErrors.leaveType = 'Leave type is required';
    }
    if (!leaveFrom.trim()) {
      newErrors.leaveFrom = 'Leave from date is required';
    }
    if (!leaveTo.trim()) {
      newErrors.leaveTo = 'Leave to date is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5556/api/leaverequest', {
        employeeName,
        leaveType,
        leaveFrom,
        leaveTo,
        actionPlan,
      });

      if (response.status === 200) {
        setSuccessMessage('Leave request submitted successfully!');
        setEmployeeName('');
        setLeaveType('');
        setLeaveFrom('');
        setLeaveTo('');
        setActionPlan('Active');
        setErrors({
          employeeName: '',
          leaveType: '',
          leaveFrom: '',
          leaveTo: '',
        });
      }
    } catch (error) {
      console.error('Error submitting leave request:', error.message);
    }
  };

  const handleEmployeeNameChange = (e) => {
    const { value } = e.target;
    let cleanedValue = value;

    // Real-time validation for Employee Name input
    if (!/^[A-Za-z\s]*$/.test(value)) {
      setErrors(prevState => ({
        ...prevState,
        employeeName: 'Only alphabets and spaces are allowed'
      }));
      // If non-alphabetic characters are present, clean the value
      cleanedValue = value.replace(/[^A-Za-z\s]/g, '');
    } else {
      setErrors(prevState => ({
        ...prevState,
        employeeName: ''
      }));
    }

    setEmployeeName(cleanedValue);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Leave Request</h1>
        {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
        <div className="mb-4">
          <label htmlFor="employeeName" className="block text-sm font-medium text-gray-700">
            Employee Name
          </label>
          <input
            type="text"
            id="employeeName"
            className={`mt-1 p-2 border rounded-md w-full ${errors.employeeName ? 'border-red-500' : ''}`}
            value={employeeName}
            onChange={handleEmployeeNameChange}
          />
          {errors.employeeName && <p className="text-red-500 mt-1">{errors.employeeName}</p>}
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
          {errors.leaveType && <p className="text-red-500 mt-1">{errors.leaveType}</p>}
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
          {errors.leaveFrom && <p className="text-red-500 mt-1">{errors.leaveFrom}</p>}
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
          {errors.leaveTo && <p className="text-red-500 mt-1">{errors.leaveTo}</p>}
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
