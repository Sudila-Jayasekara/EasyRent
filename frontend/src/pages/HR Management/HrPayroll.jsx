// HrPayroll.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HrPayroll = ({ location }) => {
  const [formData, setFormData] = useState({
    employeeName: '',
    hoursworked: '',
    hourlyrate: '',
  });
  const [totalSalary, setTotalSalary] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData(location.state.formData);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanedValue = value;

    // Real-time validation for Employee Name input
    if (name === 'employeeName') {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        setErrors(prevState => ({
          ...prevState,
          [name]: 'Only alphabets and spaces are allowed'
        }));
        // If non-alphabetic characters are present, clean the value
        cleanedValue = value.replace(/[^A-Za-z\s]/g, '');
      } else {
        setErrors(prevState => ({
          ...prevState,
          [name]: ''
        }));
      }
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: cleanedValue
    }));
  };

  const calculateSalary = () => {
    const { hoursworked, hourlyrate } = formData;
    return hoursworked * hourlyrate;
  };

  const handleCalculateSalary = () => {
    const total = calculateSalary();
    setTotalSalary(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5556/api/payroll', { ...formData, total: totalSalary })
      .then(response => {
        console.log(response.data);
        alert('Employee data sent successfully!');
        setFormData({
          employeeName: '',
          hoursworked: '',
          hourlyrate: '',
        });
        setTotalSalary(0);
      })
      .catch(error => {
        console.error(error);
        alert('Error sending data: ' + error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Salary Calculator</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="employeeName">
            Employee Name:
          </label>
          <input
            className={`w-full border rounded p-2 ${errors.employeeName ? 'border-red-500' : ''}`}
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
          />
          {errors.employeeName && <p className="text-red-500 text-xs italic">{errors.employeeName}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="hoursworked">
            Hours Worked:
          </label>
          <input
            className="w-full border rounded p-2"
            type="number"
            id="hoursworked"
            name="hoursworked"
            value={formData.hoursworked}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="hourlyrate">
            Hourly Rate ($):
          </label>
          <input
            className="w-full border rounded p-2"
            type="number"
            id="hourlyrate"
            name="hourlyrate"
            value={formData.hourlyrate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Total Salary:</label>
          <p className="text-xl">{`$${totalSalary.toFixed(2)}`}</p>
        </div>
        <button type="button" onClick={handleCalculateSalary} className="bg-blue-500 m-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Calculate Salary
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HrPayroll;
