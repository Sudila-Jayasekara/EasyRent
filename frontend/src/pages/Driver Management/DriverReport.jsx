import React, { useState } from 'react';
import axios from 'axios';

const DriverReport = () => {
  const [formData, setFormData] = useState({
    driverName: '',
    nic: '',
    date: '',
    location: '',
    noOfDates: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Regular expression to validate date format (YYYY-MM-DD)
    const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (name === 'date' && !dateFormatRegex.test(value)) {
      return; // Don't update state if input doesn't match the date format
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData };

    console.log('Form data submitted:', updatedFormData);

    try {
      const response = await axios.post('http://localhost:5556/api/driverreport', formData);
      console.log('Form data submitted:', formData);
      if (response.data.status) {
        alert('Details submitted');
        // Clear form fields after successful submission
        setFormData({
          driverName: '',
          nic: '',
          date: '',
          location: '',
          noOfDates: '',
          reason: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error appropriately, e.g., display an error message to the user
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
          <h2 className="text-2xl font-semibold text-black text-center">EasyRent</h2>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-red-600 font-bold uppercase mt-4 mb-5">
              Enter your details and concerns here.
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
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
                type="date"
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
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">No of dates</label>
              </div>
              <input
                value={formData.noOfDates}
                onChange={handleChange}
                name="noOfDates"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="number"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Reasons</label>
              </div>
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

export default DriverReport;
