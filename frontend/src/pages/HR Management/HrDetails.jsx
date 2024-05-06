import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print'; // Import useReactToPrint hook

const HrDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State variable to hold selected employee data
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const componentPDF = useRef(); // Create a ref for the component you want to print

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

  // PDF generation function
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current, // Pass the ref of the component to print
    documentTitle: 'EmployeeDetailsPDF', // Title of the generated PDF
    onAfterPrint: () => alert('Employee details saved in PDF'), // Optional callback after printing
  });

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
    navigate(`/DetailsRead/${employee._id}`);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null); // Clear the selected employee when closing the modal
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName && employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName && employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.nic1 && employee.nic1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role && employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email1 && employee.email1.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

  return (
    <div className="container mx-auto p-1">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
      <div className="flex items-center mb-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 rounded px-4 py-2 mr-2"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="button" onClick={generatePDF}>Get PDF</button>
      </div>
      <div className="employee-container" ref={componentPDF}>
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
            {filteredEmployees.map((employee) => (
              <tr key={employee._id} className="border-b">
                <td className="px-4 py-2">{employee.firstName}</td>
                <td className="px-4 py-2">{employee.lastName}</td>
                <td className="px-4 py-2">{employee.nic1}</td>
                <td className="px-4 py-2">{employee.role}</td>
                <td className="px-4 py-2">{new Date(employee.dateOfBirth).toLocaleDateString()}</td>
                <td className="px-4 py-2">{employee.gender}</td>
                <td className="px-4 py-2">{employee.contactNumber}</td>
                <td className="px-4 py-2">{employee.email1}</td>
                <td className="action-button flex flex-row space-y-2">
                  <button className="bg-green-400 hover:bg-green-700 text-white font-bold  py-1 px-1 rounded mr-1" onClick={() => handleView(employee)}>
                    Read
                  </button>
                  <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-1 px-0 rounded mr-2" onClick={() => handleEdit(employee)}>
                    Update
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-0 rounded mr-2" onClick={() => handleDelete(employee)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal content */}
      {selectedEmployee && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Employee Details</h2>
            <p><strong>First Name:</strong> {selectedEmployee.firstName}</p>
            <p><strong>Last Name:</strong> {selectedEmployee.lastName}</p>
            <p><strong>NIC:</strong> {selectedEmployee.nic1}</p>
            <p><strong>Role:</strong> {selectedEmployee.role}</p>
            <p><strong>Date of Birth:</strong> {new Date(selectedEmployee.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
            <p><strong>Contact Number:</strong> {selectedEmployee.contactNumber}</p>
            <p><strong>Email:</strong> {selectedEmployee.email1}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HrDetails;
