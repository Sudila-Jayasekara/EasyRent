import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddedVehicles = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
            axios.get('http://localhost:5556/api/vehicle/')
                .then(response => {
                    console.log('Response data:', response.data);
                    setDetails(response.data);
                })
                .catch(error => {
                    console.error('Error fetching Vehicles:', error);
                });
        }, []);

    return (
        <div tabIndex="0" className="focus:outline-none">
            <div className="mx-auto container py-1">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                {details.map((detail, index) => (
                        <div key={index} tabIndex="0" className="focus:outline-dotted mx-2 w-72 xl:mb-6 mb-14">
                            <div>
                                <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-red-200 py-1">Vehicle ID : {vehicle._id}</p>
                            </div>
                            <div>
                                <img src={detail.image} alt={detail.name} tabIndex="0" className="focus:outline-none w-full min-h-0" />
                            </div>
                            <div className="bg-white">
                                <div className="flex items-center justify-between px-4 pt-4">
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
                                    <button className="bg-red-300 py-1.5 px-6 rounded-full focus:outline-none">
                                        <p className="text-xs text-black">Delete</p>
                                    </button>
                                    <button className="bg-yellow-200 py-1.5 px-6 rounded-full focus:outline-none">
                                        <p className="text-xs text-black">Update</p>
                                    </button>
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
