import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bmwoffer from '../Vehicle Management/images/bmwoffer.png';
import prius from '../Vehicle Management/images/prius.jpeg';
import Hondavezel from '../Vehicle Management/images/Hondavezel.jpeg';

const AddedVehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        // Fetch vehicle data from the backend
        axios.get('http://localhost:5556/api/vehicle')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.error('Error fetching vehicles:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    const handleDelete = (id) => {
        // Delete vehicle with the given id
        axios.delete(`http://localhost:5556/api/vehicle/${id}`)
            .then(response => {
                setVehicles(vehicles.filter(vehicle => vehicle._id !== id)); // Use vehicle._id for consistency
            })
            .catch(error => {
                console.error('Error deleting vehicle:', error);
            });
    };

    const handleUpdate = (id) => {
        // Redirect or open a modal for updating the vehicle with the given id
        // Implement your update functionality here
    };

    return (
        <div tabIndex="0" className="focus:outline-none">
            <div className="mx-auto container py-4"> {/* Increased top and bottom padding */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Using CSS grid for responsive layout */}
                    {/* Render vehicle cards with fetched data */}
                    {vehicles.map(vehicle => (
                        <div key={vehicle._id} tabIndex="0" className="focus:outline-dotted border border-gray-200 rounded-lg p-4">
                            <div>
                                <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-red-200 py-1">Vehicle ID: {vehicle._id}</p>
                            </div>
                            <div>
                                <img src={bmwoffer} alt="Vehicle" /> {/* Use appropriate image based on vehicle make */}
                            </div>
                            <div className="bg-white mt-2">
                                <div className="flex items-center justify-between px-2 pt-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                        </svg>
                                    </div>
                                    <div className="bg-red-300 py-1.5 px-6 rounded-full" onClick={() => handleDelete(vehicle._id)}>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-black">Delete</p>
                                    </div>
                                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full" onClick={() => handleUpdate(vehicle._id)}>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Update</p>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="flex items-center">
                                        <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">{vehicle.model}</h2>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-2">Posted on {vehicle.createdAt}</p>
                                    </div>
                                    <p tabIndex="0" className="focus:outline-double text-wrap text-gray-600 mt-1">{vehicle.price}</p>
                                    <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-2">{vehicle.modelYear}</p>
                                    <div className="flex mt-2">
                                        <div>
                                            <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">{vehicle.transmission}</p>
                                        </div>
                                        <div className="pl-2">
                                            <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Seats: {vehicle.totalSeats}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between py-2">
                                        <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">{vehicle.mileage}</h2>
                                        <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddedVehicles;
