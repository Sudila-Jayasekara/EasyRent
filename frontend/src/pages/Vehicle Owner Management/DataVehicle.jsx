import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DataVehicle = () => {
  const [details, setDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5556/api/vehicle/')
      .then(response => {
        console.log('Response data:', response.data);
        setDetails(response.data); // Assuming response.data is an array of vehicle details
      })
      .catch(error => {
        console.error('Error fetching vehicle:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5556/api/vehicle/${id}`)
      .then(() => {
        setDetails(details.filter(detail => detail._id !== id));
      })
      .catch(error => {
        console.error('Error deleting the vehicle:', error);
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDetails = details.filter((detail) =>
    Object.values(detail).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto ml-4 ">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDetails.map((detail, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{detail.brand}</h2>
            <p className="text-gray-600">{detail.model}</p>
            <p className="text-gray-600">{detail.modelYear}</p>
            <p className="text-gray-600">{detail.engineCapacity}</p>
            <p className="text-gray-600">{detail.mileage}</p>
            <p className="text-gray-600">{detail.totalSeats}</p>

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
    </div>
  );
};

export default DataVehicle;
