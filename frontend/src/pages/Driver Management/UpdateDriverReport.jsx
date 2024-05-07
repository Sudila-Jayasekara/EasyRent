
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import axios from 'axios';

const UpdateDriverReport = () => {
  const { id } = useParams(); // Get the report id from the URL
  const [formData, setFormData] = useState({
    driverName: '',
    nic: '',
    date: '',
    location: '',
    noOfDates: '',
    reason: '',
  });

  useEffect(() => {
    // Retrieve URL parameters and set form data
    const params = new URLSearchParams(window.location.search);
    setFormData({
      driverName: params.get('driverName'),
      nic: params.get('nic'),
      date: params.get('date'),
      location: params.get('location'),
      noOfDates: params.get('noOfDates'),
      reason: params.get('reason'),
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5556/api/driverreport/${id}`, formData);
      console.log('Report updated successfully');
    } catch (error) {
      console.error('Error updating report:', error);
    }
  };

  return (
    <div className="py-6 bg-amber-300">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp4848993.jpg')" }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-black text-center">Update Driver Report</h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Driver Name</label>
              <input
                value={formData.driverName}
                onChange={handleChange}
                name="driverName"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">NIC</label>
              <input
                value={formData.nic}
                onChange={handleChange}
                name="nic"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
              <input
                value={formData.date}
                onChange={handleChange}
                name="date"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
              <input
                value={formData.location}
                onChange={handleChange}
                name="location"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">No of Dates</label>
              <input
                value={formData.noOfDates}
                onChange={handleChange}
                name="noOfDates"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Reason</label>
              <input
                value={formData.reason}
                onChange={handleChange}
                name="reason"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateDriverReport;