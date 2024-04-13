import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HrSalaryDetails = () => {
  const [payrollEntries, setPayrollEntries] = useState([]);

  useEffect(() => {
    const fetchPayrollEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5556/api/payroll');
        setPayrollEntries(response.data.data);
      } catch (error) {
        console.error('Error fetching payroll entries:', error);
      }
    };

    fetchPayrollEntries();
  }, []);

  const handleDelete = async (entry) => {
    try {
      await axios.delete(`http://localhost:5556/api/payroll/${entry._id}`);
      setPayrollEntries(payrollEntries.filter(item => item._id !== entry._id));
      alert('Payroll entry deleted successfully');
    } catch (error) {
      console.error('Error deleting payroll entry:', error);
      alert('Failed to delete payroll entry');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Salary Details</h2>
      <div className="payroll-container">
        <table className="table-auto w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Employee Name</th>
              <th className="px-4 py-2">Hours Worked</th>
              <th className="px-4 py-2">Hourly Rate</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payrollEntries.map((entry) => (
              <tr key={entry._id} className="border-b">
                <td className="px-4 py-2">{entry.employeeName}</td>
                <td className="px-4 py-2">{entry.hoursworked}</td>
                <td className="px-4 py-2">{entry.hourlyrate}</td>
                <td className="px-4 py-2">{entry.total}</td>
                <td className="action-button">
                <button className="bg-yellow-400 hover:bg-yellow-700 text-white font-bold py-1 px-1 rounded mr-2" onClick={() => handleEdit(employee)}>
                Update
                </button>

               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(employee)}>
               Delete
               </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrSalaryDetails;
