import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmpDash = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5556/api/employee');
        setEmployees(response.data.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex h-screen bg-gray-100 bg-cover" style={{ backgroundImage: "url('/src/assets/HR/Dashboard.jpg')" }}>
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <img
              className="h-12 w-12 rounded-full"
              src="/profile-pic.jpg" // Replace with your profile picture path
              alt="Profile"
            />
            <div>
              <h4 className="font-semibold text-lg text-gray-700">Chandrasekara</h4>
              <p className="text-gray-600">HR Manager</p>
            </div>
          </div>
          <nav>
            <Link to="/EmpDash" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
              Dashboard
            </Link>
            <Link to="/empRegister" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
              Employee Registration
            </Link>
            <Link to="/Dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
              Payroll
            </Link>
            <Link to="/EmpLeave" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
              Leave
            </Link>
			<Link to="/Details" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white">
              Profile
            </Link>
            {/* Add more navigation links as needed */}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6 ">Manage Employee</h1>
        {/* Search bar */}
        <div className="  mb-30 mt-5  ">
          <input
            className=" p-2 flex-6 border rounded "
            type="search"
            placeholder="Search Employee"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="bg-white shadow-md rounded my-20 p-2 ">
          <table className="min-w-max w-full table-auto ">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-2 px-4 text-left">First Name</th>
                <th className="py-2 px-4 text-left">Last Name</th>
                <th className="py-2 px-4 text-left">NIC</th>
                <th className="py-2 px-4 text-left">Role</th>
                <th className="py-2 px-4 text-left">Email</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-xs font-light">
              {filteredEmployees.map((employee) => (
                <tr key={employee._id} className="border-b">
                  <td className="py-2 px-4 text-left">{employee.firstName}</td>
                  <td className="py-2 px-4 text-left">{employee.lastName}</td>
                  <td className="py-2 px-4 text-left">{employee.nic}</td>
                  <td className="py-2 px-4 text-left">{employee.role}</td>
                  <td className="py-2 px-4 text-left">{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpDash;
