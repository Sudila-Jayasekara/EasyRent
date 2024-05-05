import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function HrDetailsEdit() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    nic: '',
    role: '',
    dateOfBirth: '',
    gender: '',
    contactNumber: '',
    email: '',
  });

  useEffect(() => {
    console.log('ID:', id); // Log the ID parameter
    axios.get(`http://localhost:5556/api/employee/${id}`)
      .then(res => {
        const employeeData = res.data.employee;
        console.log('Employee Data:', employeeData); // Log the fetched employee data
        setValues({
          firstName: employeeData.firstName,
          lastName: employeeData.lastName,
          nic: employeeData.nic,
          role: employeeData.role,
          dateOfBirth: employeeData.dateOfBirth,
          gender: employeeData.gender,
          contactNumber: employeeData.contactNumber,
          email: employeeData.email,
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
    <div className='wrapper flex justify-center items-center h-screen'>
      {loading ? (
        <p>Loading Employee data...</p>
      ) : (
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="block flex justify-center text-gray-700 text-xl font-bold mb-2">Edit Employee Details</h1>
          <div className='mb-4'>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="firstName"
              name="firstName"
              placeholder='First Name'
              value={values.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Last Name'
              value={values.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="nic"
              name="nic"
              placeholder='NIC'
              value={values.nic}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="role"
              name="role"
              placeholder='Role'
              value={values.role}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={values.dateOfBirth ? values.dateOfBirth.slice(0, 10) : ''} // Format date to YYYY-MM-DD
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={values.gender} 
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='mb-4'>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder='Contact Number'
              value={values.contactNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={values.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
