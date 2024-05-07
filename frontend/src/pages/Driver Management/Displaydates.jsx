import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Displaydates = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5556/api/booking/')
      .then(response => {
        console.log('Response data:', response.data);
        setDetails(response.data); // Assuming response.data is an array of booking details
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5556/api/booking/${id}`)
      .then(() => {
        setDetails(details.filter(detail => detail._id !== id));
      })
      .catch(error => {
        console.error('Error deleting the booking:', error);
      });
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US'); // Adjust locale as needed
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9 ml-9 mr-9">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Notice
          <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">Click reject button if you can't attend on the assigned date only .</p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3">
              End Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {details.map(detail => (
            <tr key={detail._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {detail.location}
              </td>
              <td className="px-6 py-4">
                {detail.description}
              </td>
              <td className="px-6 py-4">
                {formatDate(detail.startDate)}
              </td>
              <td className="px-6 py-4">
                {formatDate(detail.endDate)}
              </td>
              <td className="px-6 py-4 text-right">
                <button onClick={() => handleDelete(detail._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Displaydates;
