import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HrDashboard() {
  const [employeeName, setEmployeeName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [signInTime, setSignInTime] = useState('');
  const [signOutTime, setSignOutTime] = useState('');
  const [workingHours, setWorkingHours] = useState(0);
  const [errors, setErrors] = useState({});

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
    if (validateInputs()) {
      const [signInHour, signInMinute] = signInTime.split(':').map(Number);
      const [signOutHour, signOutMinute] = signOutTime.split(':').map(Number);

      let totalHours = signOutHour - signInHour;
      let totalMinutes = signOutMinute - signInMinute;

      if (totalMinutes < 0) {
        totalHours -= 1;
        totalMinutes += 60;
      }

      const totalWorkingHours = totalHours + totalMinutes / 60;
      setWorkingHours(totalWorkingHours);
    }
  };

  const handleCancel = () => {
    setEmployeeName('');
    setSelectedDate('');
    setSignInTime('');
    setSignOutTime('');
    setWorkingHours(0);
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      // Implement your submit logic here
      console.log("Submitted!");
    }
  };

  const validateInputs = () => {
    let errors = {};
    let isValid = true;

    if (!employeeName.trim()) {
      errors.employeeName = 'Employee name is required';
      isValid = false;
    }

    if (!selectedDate) {
      errors.selectedDate = 'Date is required';
      isValid = false;
    }

    if (!signInTime) {
      errors.signInTime = 'Sign in time is required';
      isValid = false;
    }

    if (!signOutTime) {
      errors.signOutTime = 'Sign out time is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
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
            className={`shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm ${errors.employeeName ? 'border-red-500' : ''}`}
            id="employeeName"
            type="text"
            value={employeeName}
            onChange={handleEmployeeNameChange}
          />
          {errors.employeeName && <p className="text-red-500 text-xs italic">{errors.employeeName}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="date">
            Select Date:
          </label>
          <input
            className={`shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm ${errors.selectedDate ? 'border-red-500' : ''}`}
            id="date"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          {errors.selectedDate && <p className="text-red-500 text-xs italic">{errors.selectedDate}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="signInTime">
            Sign In Time:
          </label>
          <input
            className={`shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm ${errors.signInTime ? 'border-red-500' : ''}`}
            id="signInTime"
            type="time"
            value={signInTime}
            onChange={handleSignInTimeChange}
          />
          {errors.signInTime && <p className="text-red-500 text-xs italic">{errors.signInTime}</p>}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="signOutTime">
            Sign Out Time:
          </label>
          <input
            className={`shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm ${errors.signOutTime ? 'border-red-500' : ''}`}
            id="signOutTime"
            type="time"
            value={signOutTime}
            onChange={handleSignOutTimeChange}
          />
          {errors.signOutTime && <p className="text-red-500 text-xs italic">{errors.signOutTime}</p>}
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
        <Link to={'/payroll'}>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Link>
      </div>
      <p className="mt-2 text-lg font-medium">Working Hours: {workingHours.toFixed(2)}</p>
    </div>
  );
}

export default HrDashboard;
