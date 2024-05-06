import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function LeaveEdit() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    employeeName: '',
    leaveType: '',
    leaveFrom: '',
    leaveTo: '',
    actionPlan: 'Active' // Default to Active
  });

  useEffect(() => {
    console.log('ID:', id);
    axios.get(`http://localhost:5556/api/leaverequest/${id}`)
      .then(res => {
        const leaveData = res.data.leaveRequest;
        console.log('Leave Data:', leaveData);
        setValues({
          employeeName: leaveData.employeeName,
          leaveType: leaveData.leaveType,
          leaveFrom: leaveData.leaveFrom,
          leaveTo: leaveData.leaveTo,
          actionPlan: leaveData.actionPlan,
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching leave data:', err);
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
      await axios.patch(`http://localhost:5556/api/leaverequest/${id}`, values);
      alert('Leave details updated successfully.');
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update leave details. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <p>Loading Leave data...</p>
      ) : (
        <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-3xl font-semibold mb-4">Edit Leave Request</h1>
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
            <label className="block mb-2 font-semibold" htmlFor="leaveType">
              Leave Type:
            </label>
            <input
              className="w-full border rounded p-2"
              type="text"
              id="leaveType"
              name="leaveType"
              value={values.leaveType}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="leaveFrom">
              Leave From:
            </label>
            <input
              className="w-full border rounded p-2"
              type="date"
              id="leaveFrom"
              name="leaveFrom"
              value={values.leaveFrom}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="leaveTo">
              Leave To:
            </label>
            <input
              className="w-full border rounded p-2"
              type="date"
              id="leaveTo"
              name="leaveTo"
              value={values.leaveTo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor="actionPlan">
              Action Plan:
            </label>
            <select
              id="actionPlan"
              name="actionPlan"
              className="w-full border rounded p-2"
              value={values.actionPlan}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
