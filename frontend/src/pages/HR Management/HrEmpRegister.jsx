import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const HrEmpRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nic1: '',
    role: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    email1: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanedValue = value;
  
    // Validate input for string type fields
    if (name === 'firstName' || name === 'lastName' || name === 'role' || name === 'gender') {
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
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5556/api/employee', formData);
      console.log(response.data);
      alert('Employee data sent successfully!');
      setFormData({ // Clear form data
        firstName: '',
        lastName: '',
        nic1: '',
        role: '',
        dateOfBirth: '',
        gender: '',
        contactNumber: '',
        email1: ''
      });
    } catch (error) {
      console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert('Server Error: ' + error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        alert('No response received from server');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert('Error: ' + error.message);
      }
    }
  };
  
 



  return (
    <div className='wrapper flex justify-center items-center screen'>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4">
        <h1 className="block flex justify-center text-gray-1000 text-3xl font-bold col-span-2  ">Employee Registration</h1>
        
        {/* First Name Input */}
        <div className='mb-4'>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
            type="text"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.firstName}</p>
        </div>
        
        {/* Last Name Input */}
        <div className='mb-4'>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName ? 'border-red-500' : ''}`}
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.lastName}</p>
        </div>
        
        {/* NIC Input */}
        <div className='mb-4'>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.nic ? 'border-red-500' : ''}`}
            type="text"
            name="nic1"
            placeholder='NIC'
            value={formData.nic1}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.nic}</p>
        </div>
        
        {/* Role Input */}
        <div className="mb-4">
          <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.role ? 'border-red-500' : ''}`}
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select an employee role</option>
            <option value="car washer">Car Washer</option>
            <option value="cleaner">Cleaner</option>
            <option value="technician">Technician</option>
            <option value="inspector">Vehicle Inspector</option>
            {/* Add more role options as needed */}
          </select>
          <p className="text-red-500 text-xs italic">{errors.role}</p>
        </div>

        {/* Date of Birth Input */}
        <div className='mb-4'>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.dateOfBirth ? 'border-red-500' : ''}`}
            type="date"
            name="dateOfBirth"
            placeholder='Date of Birth'
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.dateOfBirth}</p>
        </div>
        
        {/* Gender Input */}
        <div className='mb-4'>
          <select
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gender ? 'border-red-500' : ''}`}
            name="gender"
            value={formData.gender} 
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="text-red-500 text-xs italic">{errors.gender}</p>
        </div>
        
        {/* Contact Number Input */}
        <div className='mb-4'>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.contactNumber ? 'border-red-500' : ''}`}
            type="tel"
            name="contactNumber"
            placeholder='Contact Number'
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.contactNumber}</p>
        </div>
        
        {/* Email Input */}
        <div className='mb-4'>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
            type="email"
            name="email1"
            placeholder='Email'
            value={formData.email1}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        </div>
        
        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
            Register
          </button>
        </div>
        
        {/* Link to Login */}
        <div className='col-span-2 text-center mt-4'>
          <p className="text-gray-600 text-sm">Already have an account? <Link to={'/Login'} className="text-blue-500 hover:text-blue-800">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default HrEmpRegister;
