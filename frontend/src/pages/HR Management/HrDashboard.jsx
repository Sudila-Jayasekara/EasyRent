// HrDashboard.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function HrDashboard() {
  const [employeeName, setEmployeeName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [signInTime, setSignInTime] = useState('');
  const [signOutTime, setSignOutTime] = useState('');
  const [workingHours, setWorkingHours] = useState(0);
  const [errors, setErrors] = useState({});

  const handleEmployeeNameChange = (event) => {
    const { value } = event.target;
    if (!/^[A-Za-z\s]*$/.test(value)) {
      setErrors((prevState) => ({
        ...prevState,
        employeeName: 'Only alphabets and spaces are allowed',
      }));
      setEmployeeName(value.replace(/[^A-Za-z\s]/g, ''));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        employeeName: '',
      }));
      setEmployeeName(value);
    }
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

  const validateInputs = () => {
    let valid = true;
    const newErrors = {};

    if (!employeeName.trim()) {
      newErrors.employeeName = 'Employee name is required';
      valid = false;
    }

    if (!selectedDate.trim()) {
      newErrors.selectedDate = 'Date is required';
      valid = false;
    }

    if (!signInTime.trim()) {
      newErrors.signInTime = 'Sign in time is required';
      valid = false;
    }

    if (!signOutTime.trim()) {
      newErrors.signOutTime = 'Sign out time is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
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

  const navigate = useNavigate();

  const handleCancel = () => {
    setEmployeeName('');
    setSelectedDate('');
    setSignInTime('');
    setSignOutTime('');
    setWorkingHours(0);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (validateInputs()) {
      try {
        const response = await axios.post('/api/attendance', {
          employeeName,
          selectedDate,
          signInTime,
          signOutTime,
          workingHours,
        });
        console.log(response.data);
        navigate('/payroll', {
          state: {
            formData: {
              employeeName,
              hoursworked: workingHours.toFixed(2),
            }
          }
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally, you can show an error message to the user
      }
    }
  };
  

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Attendance Form</h1>
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
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={calculateWorkingHours}
          >
            Calculate Working Hours
          </button>
          <p className="mt-2 text-lg font-medium">Working Hours: {workingHours.toFixed(2)}</p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded mr-60"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HrDashboard;
