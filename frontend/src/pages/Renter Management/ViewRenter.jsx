import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewRenter = () => {
  const [details, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('nic');
  const [filteredDetails, setFilteredDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5556/api/renter/')
      .then(response => {
        console.log('Response data:', response.data);
        setDetails(response.data);
        setFilteredDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching Renters:', error);
      });
  }, []);

  useEffect(() => {
    const filterResults = () => {
      const filteredResults = details.filter(detail => {
        if (searchOption === 'nic') {
          return detail.nic.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchOption === 'email') {
          return detail.email.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchOption === 'address') {
          return detail.address.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchOption === 'phoneNumber') {
          return detail.phoneNumber.includes(searchTerm);
        }
        return true;
      });
      setFilteredDetails(filteredResults);
    };

    filterResults();
  }, [searchTerm, searchOption, details]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5556/api/renter/${id}`)
      .then(() => {
        setDetails(details.filter(detail => detail._id !== id));
      })
      .catch(error => {
        console.error('Error deleting the renter:', error);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center">
        <select
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
          className="border p-2 m-2 rounded"
        >
          <option value="nic">NIC</option>
          <option value="email">Email</option>
          <option value="address">Address</option>
          <option value="phoneNumber">Phone Number</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchOption}`}
          className="border p-2 m-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDetails.map((detail, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{detail.username}</h2>
            <p className="text-gray-600">{detail.email}</p>
            <p className="text-gray-600">{detail.address}</p>
            <p className="text-gray-600">{detail.phoneNumber}</p>
            <p className='text-gray-600'>{detail.nic}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/renterdetail/${detail.nic}`} state={{ renterDetail: detail }}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                  View Details
                </button>
              </Link>
              <Link to={`/risknote/${detail.nic}`} state={{ renterDetail: detail }}>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                  Risk Note
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

export default ViewRenter;
