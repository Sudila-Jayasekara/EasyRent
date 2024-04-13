import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const HrEmpRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nic: '',
    role: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5556/api/employee', formData)
      .then(response => {
        console.log(response.data);
        alert('Employee data sent successfully!');
        setFormData({ // Clear form data
          firstName: '',
          lastName: '',
          nic: '',
          role: '',
          dateOfBirth: '',
          gender: 'pending',
          contactNumber: '',
          email: ''
        });
      })
      .catch(error => {
        console.error(error);
        alert('Error sending data: ' + error.message);
      });
  };

  return (
    <div className='wrapper flex justify-center items-center screen'>
      <img className='w-500 h-60 ml-9 ' src="https://media.licdn.com/dms/image/D4D12AQH-BMTaUgeNdQ/article-cover_image-shrink_720_1280/0/1707636898642?e=2147483647&v=beta&t=Z_DF7sY4POw6IBImAbPUDhod1ZOJi3wTSAmzMICm6is" alt="car photo" />

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block flex justify-center text-gray-700 text-xl font-bold mb-2">Employee Registration</h1>
        
        {/* First Name Input */}
        <div className='mb-4'>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Last Name Input */}
        <div className='mb-4'>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* NIC Input */}
        <div className='mb-4'>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="nic"
            placeholder='NIC'
            value={formData.nic}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Role Input */}
        <div className='mb-4'>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="role"
            placeholder='Role'
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Date of Birth Input */}
        <div className='mb-4'>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="dateOfBirth"
            placeholder='Date of Birth'
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Gender Input */}
        <div className='mb-4'>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        </div>
        
        {/* Contact Number Input */}
        <div className='mb-4'>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            name="contactNumber"
            placeholder='Contact Number'
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Email Input */}
        <div className='mb-4'>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
            Register
          </button>
        </div>
        
        {/* Link to Login */}
        <div className='text-center mt-4'>
          <p className="text-gray-600 text-sm">Already have an account? <Link to={'/Login'} className="text-blue-500 hover:text-blue-800">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default HrEmpRegister;
