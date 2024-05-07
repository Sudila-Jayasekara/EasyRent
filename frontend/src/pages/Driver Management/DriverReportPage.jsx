import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const DriverReportPage = () => {
  const [driverReports, setDriverReports] = useState([]);

  useEffect(() => {
    fetchDriverReports();
  }, []);

  const fetchDriverReports = async () => {
    try {
      const response = await axios.get('http://localhost:5556/api/driverreport');
      setDriverReports(response.data);
    } catch (error) {
      console.error('Error fetching driver reports:', error);
    }
  };

  const handleUpdate = (id, report) => {
    // Construct the URL with report ID and parameters
    const url = `/driverreport/update/${id}?driverName=${encodeURIComponent(report.driverName)}&nic=${encodeURIComponent(report.nic)}&date=${encodeURIComponent(report.date)}&location=${encodeURIComponent(report.location)}&noOfDates=${encodeURIComponent(report.noOfDates)}&reason=${encodeURIComponent(report.reason)}`;
    // Redirect to the update page with URL parameters
    window.location.href = url;
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5556/api/driverreport/${id}`);
      setDriverReports(driverReports.filter(report => report._id !== id));
      console.log('Driver report deleted successfully');
    } catch (error) {
      console.error('Error deleting driver report:', error);
    }
  };

  const generatePDF = (report) => {
    const doc = new jsPDF();

    doc.setFont('helvetica');
    doc.setFontSize(18);
    doc.text(`Driver Report for ${report.driverName}`, 15, 15);

    doc.setFontSize(12);
    doc.text(`NIC: ${report.nic}`, 15, 30);
    doc.text(`Location: ${report.location}`, 15, 45);
    doc.text(`Date: ${report.date}`, 15, 60);
    doc.text(`No of Dates: ${report.noOfDates}`, 15, 75);
    doc.text(`Reason: ${report.reason}`, 15, 90);

    doc.save(`driver_report_${report.driverName}.pdf`);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Driver Reports</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver Name</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIC</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No of Dates</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
            <th className="px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {driverReports.map((report) => (
            <tr key={report._id}>
              <td className="px-6 py-4 whitespace-nowrap">{report.driverName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{report.nic}</td>
              <td className="px-6 py-4 whitespace-nowrap">{report.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{report.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">{report.noOfDates}</td>
              <td className="px-6 py-4 whitespace-nowrap">{report.reason}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => handleUpdate(report._id, report)} className="mr-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Update</button>
                <button onClick={() => handleDelete(report._id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
                <button onClick={() => generatePDF(report)} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Generate PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverReportPage;
