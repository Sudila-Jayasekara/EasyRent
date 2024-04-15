import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewRenter = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5556/api/driver/')
      .then(response => {
        console.log('Response data:', response.data);
        setDetails(response.data); // Assuming response.data is an array of renter details
      })
      .catch(error => {
        console.error('Error fetching Drivers:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5556/api/driver/${id}`)
      .then(() => {
        setDetails(details.filter(detail => detail._id !== id));
      })
      .catch(error => {
        console.error('Error deleting the driver:', error);
      });
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {details.map((detail, index) => (
        <div key={index} className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">{detail.username}</h2>
          <p className="text-gray-600">{detail.email}</p>
          <p className="text-gray-600">{detail.address}</p>
          <p className="text-gray-600">{detail.phoneNumber}</p>
          <div className="flex justify-between mt-4">
            <Link to={'/profile'}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                Update
              </button>
            </Link>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleDelete(detail._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewRenter;
