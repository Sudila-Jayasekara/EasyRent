import React, { useState } from 'react';
import axios from 'axios';

const DriverReport = () => {
  const [formData, setFormData] = useState({
    driverName: '',
    nic: '',
    date: '',
    location: '',
    noOfDates: 0, // Changed type to number for better validation
    reason: '',
  });

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
          noOfDates: 0, // Reset to default value
          reason: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error appropriately, e.g., display an error message to the user
    }

    try {
      // Corrected backend route for adding vehicles
      const res = await fetch('http://localhost:5556/api/vehicle/vehicleadd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error adding vehicle:', error);
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
            {/* Form inputs */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DriverReport;
