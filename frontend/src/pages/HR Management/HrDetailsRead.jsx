import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HrDetailsRead = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5556/api/employee/${id}`);
        console.log('API Response:', response.data);
        setEmployee(response.data.employee);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="mb-2"><strong>First Name:</strong> {employee.firstName}</p>
        <p className="mb-2"><strong>Last Name:</strong> {employee.lastName}</p>
        <p className="mb-2"><strong>NIC:</strong> {employee.nic1}</p>
        <p className="mb-2"><strong>Role:</strong> {employee.role}</p>
        <p className="mb-2"><strong>Date of Birth:</strong> {new Date(employee.dateOfBirth).toLocaleDateString()}</p>
        <p className="mb-2"><strong>Gender:</strong> {employee.gender}</p>
        <p className="mb-2"><strong>Contact Number:</strong> {employee.contactNumber}</p>
        <p className="mb-2"><strong>Email:</strong> {employee.email1}</p>
      </div>
    </div>
  );
};

export default HrDetailsRead;
