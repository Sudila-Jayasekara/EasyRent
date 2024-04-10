import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        renter: '',
        vehicle: '',
        serviceType: '',
        startDate: '',
        endDate: '',
        status: 'pending',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        //send form data to the server
        axios.post('http://localhost:5556/api/booking', formData)
            .then(response => {
            console.log(response.data);
            })
            .catch(error => {
            console.error(error);
            });

        //clear the form after submit
        setFormData({
            renter: '',
            vehicle: '',
            serviceType: '',
            startDate: '',
            endDate: '',
            status: 'pending',
            location: '',
            description: ''
        });
    };

    return (
        <div className='flex justify-center space-x-5 mt-10 '>
        <div className="max-w-md"> 
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex justify-between mb-4">
                    <div className="w-1/2 pr-3">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="renter">
                                Renter ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="renter"
                                type="text"
                                placeholder="Renter ID"
                                name="renter"
                                value={formData.renter}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                                Start Date
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="startDate"
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceType">
                                Service Type
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="serviceType"
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Service Type</option>
                                <option value="rent">Rent</option>
                                <option value="hire">Hire</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-1/2 pl-3">
                      <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicle">
                                  Vehicle ID
                              </label>
                              <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="vehicle"
                                  type="text"
                                  placeholder="Vehicle ID"
                                  name="vehicle"
                                  value={formData.vehicle}
                                  onChange={handleChange}
                                  required
                              />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                                End Date
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="endDate"
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                Status
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="pending">Pending</option>
                                <option value="approved" disabled>Approved</option>
                                <option value="rejected" disabled>Rejected</option>
                                <option value="cancelled" disabled>Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
        <div className="max-w-md">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <span className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Required Documents
                    </span>
                    <ul className="list-disc pl-5">
                        <li className='text-red-500'>Driving Licence</li>
                        <li className='text-red-500'>National Identity Card</li>
                        <li className='text-red-500'>Any Kind Of Bill</li>
                    </ul>
                </div>
            </div>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Generate Estimate Bill
                </span>
            </div>
        </div>
    </div>
    );
};

export default BookingForm;
