import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HrDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State variable to hold selected employee data
  const navigate = useNavigate();

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

  const handleEdit = (employee) => {
    navigate(`/DetailsEdit/${employee._id}`);
  };

  const handleDelete = async (employee) => {
    try {
      await axios.delete(`http://localhost:5556/api/employee/${employee._id}`);
      setEmployees(employees.filter(emp => emp._id !== employee._id));
      alert('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee');
    }
  };

  const handleView = (employee) => {
    setSelectedEmployee(employee); // Set the selected employee for viewing
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null); // Clear the selected employee when closing the modal
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
      <div className="employee-container">
        <table className="table-auto w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">NIC</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id} className="border-b">
                <td className="px-4 py-2">{employee.firstName}</td>
                <td className="px-4 py-2">{employee.lastName}</td>
                <td className="px-4 py-2">{employee.nic}</td>
                <td className="px-4 py-2">{employee.role}</td>
                <td className="px-4 py-2">{new Date(employee.dateOfBirth).toLocaleDateString()}</td>
                <td className="px-4 py-2">{employee.gender}</td>
                <td className="px-4 py-2">{employee.contactNumber}</td>
                <td className="px-4 py-2">{employee.email}</td>
                <td className="action-button">
                  <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleView(employee)}>
                    Read
                  </button>
                  <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-1 px-0 rounded mr-2" onClick={() => handleEdit(employee)}>
                    Update
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded" onClick={() => handleDelete(employee)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedEmployee && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Employee Details</h2>
            <p><strong>First Name:</strong> {selectedEmployee.firstName}</p>
            <p><strong>Last Name:</strong> {selectedEmployee.lastName}</p>
            <p><strong>NIC:</strong> {selectedEmployee.nic}</p>
            <p><strong>Role:</strong> {selectedEmployee.role}</p>
            <p><strong>Date of Birth:</strong> {new Date(selectedEmployee.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
            <p><strong>Contact Number:</strong> {selectedEmployee.contactNumber}</p>
            <p><strong>Email:</strong> {selectedEmployee.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HrDetails;
