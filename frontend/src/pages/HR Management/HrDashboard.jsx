import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function HrDashboard () {
  const [employeeName, setEmployeeName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [signInTime, setSignInTime] = useState('');
  const [signOutTime, setSignOutTime] = useState('');
  const [workingHours, setWorkingHours] = useState(0);

  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSignInTimeChange = (event) => {
    setSignInTime(event.target.value);
  };

  const handleSignOutTimeChange = (event) => {
    setSignOutTime(event.target.value);
  };

  const calculateWorkingHours = () => {
    if (signInTime && signOutTime) {
      const signIn = new Date(`01/01/2024 ${signInTime}`);
      const signOut = new Date(`01/01/2024 ${signOutTime}`);
      const diffMilliseconds = signOut - signIn;
      const hours = diffMilliseconds / (1000 * 60 * 60);
      setWorkingHours(hours);
    }
  };

  const handleCancel = () => {
    setEmployeeName('');
    setSelectedDate('');
    setSignInTime('');
    setSignOutTime('');
    setWorkingHours(0);
  };

  const handleSubmit = () => {
    // You can implement your submit logic here
    console.log("Submitted!");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Attendance Form</h1>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="employeeName">
            Employee Name:
          </label>
          <input
            className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm"
            id="employeeName"
            type="text"
            value={employeeName}
            onChange={handleEmployeeNameChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="date">
            Select Date:
          </label>
          <input
            className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm"
            id="date"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="signInTime">
            Sign In Time:
          </label>
          <input
            className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm"
            id="signInTime"
            type="time"
            value={signInTime}
            onChange={handleSignInTimeChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="signOutTime">
            Sign Out Time:
          </label>
          <input
            className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm"
            id="signOutTime"
            type="time"
            value={signOutTime}
            onChange={handleSignOutTimeChange}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={calculateWorkingHours}
        >
          Calculate Working Hours
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}>
         <Link to={'/payroll'}>
          Submit</Link>
        </button>
      </div>
      <p className="mt-2 text-lg font-medium">Working Hours: {workingHours.toFixed(2)}</p>
      
    </div>
  );
}

export default HrDashboard;
