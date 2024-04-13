import React, { useState } from 'react';
import axios from 'axios';

const HrPayroll = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(10); 

  const calculateSalary = () => {
    return hoursWorked * hourlyRate;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5556/api/payroll', {
        employeeName,
        hoursWorked,
        hourlyRate,
        total: calculateSalary()
      });
      console.log(response.data);
      alert('Payroll data submitted successfully!');
      setEmployeeName('');
      setHoursWorked(0);
      setHourlyRate(10);
    } catch (error) {
      console.error('Error submitting payroll data:', error);
      alert('Error submitting payroll data: ' + error.message);
    }
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
            className="w-full border rounded p-2"
            type="text"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="hoursWorked">
            Hours Worked:
          </label>
          <input
            className="w-full border rounded p-2"
            type="number"
            id="hoursWorked"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="hourlyRate">
            Hourly Rate ($):
          </label>
          <input
            className="w-full border rounded p-2"
            type="number"
            id="hourlyRate"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Total Salary:</label>
          <p className="text-xl">{`$${calculateSalary().toFixed(2)}`}</p>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HrPayroll;
