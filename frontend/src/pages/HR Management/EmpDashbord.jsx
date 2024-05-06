import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
      employee.firstName && employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName && employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.nic && employee.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role && employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email && employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

  return (
    <div className="flex h-screen" style={{ backgroundImage: "url('/src/assets/HR/Dashboard.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Sidebar */}
      
      
        <div className="p-6">
          <div className="flex items-center space-x-4 p-2 mb-5">
           
            <div>
            
            </div>
          </div>
          
        </div>
      

      {/* Main content */}
      <div className="flex-1 p-10">
        <div className='bg-black ml-70 mr-80 mx-56 rounded  mb-6  py-2'>
        <h1 className="text-3xl font-bold text-center text-yellow-400 mb-3">Manage Employee</h1></div>
        {/* Search bar */}
        <div className="  mb-30 mt-5">
          <input
            className=" p-2 flex-6 border rounded mt-20 "
            type="search"
            placeholder="Search Employee"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="bg-white shadow-md rounded my-5 p-2 ">
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
