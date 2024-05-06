import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const DataVehicle = () => {
  const [details, setDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const componentPDF = useRef(); // Create a ref for the component you want to print

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
    String(detail.vehicleNumber).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current, // Pass the ref of the component to print
    documentTitle: 'VehicleDetailsPDF', // Title of the generated PDF
    onAfterPrint: () => alert('Vehicle details saved in PDF'), // Optional callback after printing
  });

  
  

  return (
     
 
    <div className="container mx-auto ml-4 ">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search"
        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
      />
 <button onClick={generatePDF} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
  Generate PDF
</button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" ref={componentPDF}>
        {filteredDetails.map((detail, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{detail.brand}</h2>
            <p className="text-gray-600">{detail.model}</p>
            <p className="text-gray-600">{detail.vehicleNumber}</p>
            <p className="text-gray-600">{detail.modelYear}</p>
            <p className="text-gray-600">{detail.engineCapacity}</p>
            <p className="text-gray-600">{detail.mileage}</p>
            <p className="text-gray-600">{detail.totalSeats}</p>
            <p className="text-gray-600">{detail.startDate}</p>

            <div className="flex justify-between mt-4">
              <Link to={'/viewvehicle'}>
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
