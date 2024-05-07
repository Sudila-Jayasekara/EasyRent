import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RiskDetailsPage = ({ formData, photos }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5556/api/risk')
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching Risk Details:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5556/api/risk/${id}`)
      .then(() => {
        setDetails(details.filter(detail => detail._id !== id));
      })
      .catch(error => {
        console.error('Error deleting the risk detail:', error);
      });
  };

  const handleViewMore = (index) => {
    // Implement your logic to handle the "View More" button click
    console.log(`View more details for index ${index}`);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {details.map((risk, index) => (
        <div key={index} className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">{risk.username}</h2>
          <p className="text-gray-600">Email: {risk.email}</p>
          <p className="text-gray-600">Phone Number: {risk.phoneNumber}</p>
          <p className='text-gray-600'>NIC: {risk.nic}</p>
          
          <h1 className='font-bold text-2xl mt-2'>Accident Details</h1>
          <p className='text-gray-600'>Accident Happened : {risk.accidentAddress}</p>
          <p className='text-gray-600'>Date: {risk.accidentDate}</p>
          <p className='text-gray-600'>Time: {risk.accidentTime}</p>
          <p className='text-gray-600'>Legal and Insuarance Info: {risk.legalAndInsuranceInfo}</p>
          <div className="flex justify-between mt-4">
            <Link to={`/printrisk/${risk.nic}`} state={{ riskDetail: risk }}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                View Details
              </button>
            </Link>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleDelete(risk._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RiskDetailsPage;
