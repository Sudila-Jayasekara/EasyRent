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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
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
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.firstName) {
      formIsValid = false;
      errors['firstName'] = 'Please enter first name';
    }

    if (!formData.lastName) {
      formIsValid = false;
      errors['lastName'] = 'Please enter last name';
    }

    if (!formData.nic) {
      formIsValid = false;
      errors['nic'] = 'Please enter NIC';
    }

    if (!formData.role) {
      formIsValid = false;
      errors['role'] = 'Please enter role';
    }

    if (!formData.dateOfBirth) {
      formIsValid = false;
      errors['dateOfBirth'] = 'Please enter date of birth';
    }

    if (!formData.gender) {
      formIsValid = false;
      errors['gender'] = 'Please select gender';
    }

    if (!formData.contactNumber) {
      formIsValid = false;
      errors['contactNumber'] = 'Please enter contact number';
    }

    if (!formData.email) {
      formIsValid = false;
      errors['email'] = 'Please enter email';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <div className='wrapper flex justify-center items-center screen'>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block flex justify-center text-gray-700 text-xl font-bold mb-2">Employee Registration</h1>
        
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
            name="nic"
            placeholder='NIC'
            value={formData.nic}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.nic}</p>
        </div>
        
        {/* Role Input */}
        <div className='mb-4'>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.role ? 'border-red-500' : ''}`}
            type="text"
            name="role"
            placeholder='Role'
            value={formData.role}
            onChange={handleChange}
            required
          />
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
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p className="text-red-500 text-xs italic">{errors.email}</p>
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
