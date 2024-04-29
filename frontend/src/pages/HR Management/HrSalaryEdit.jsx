import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function HrSalaryEdit() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    employeeName: '',
    hoursworked: '',
    hourlyrate: '',
    total: ''
  });

  useEffect(() => {
	console.log('ID:', id);
    axios.get(`http://localhost:5556/api/payroll/${id}`)
      .then(res => {
        const employeeData = res.data.payroll;
		console.log('Employee Data:', employeeData);
        setValues({
          employeeName: employeeData.employeeName,
          hoursworked: employeeData.hoursworked,
          hourlyrate: employeeData.hourlyrate,
          total: employeeData.total,
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching employee data:', err);
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:5556/api/employee/${id}`, values);
      alert('Employee details updated successfully.');
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update employee details. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
		 {loading ? (
        <p>Loading Employee data...</p>
      ) : (
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Salary Calculator</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="employeeName">
            Employee Name:
          </label>
          <input
            className="w-full border rounded p-2"
            type="text"
            id="employeeName"
            name="employeeName"
            value={values.employeeName}
            onChange={handleInputChange}
          />
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
            value={values.hoursworked}
            onChange={handleInputChange}
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
            value={values.hourlyrate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Total Salary:</label>
          <p className="text-xl">{`$${values.total.toFixed(2)}`}</p>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
   
  )}
  </div>
  );
}
