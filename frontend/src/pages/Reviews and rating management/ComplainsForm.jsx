import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ComplainsForm = () => {
    const [vehicleid, setVehicleid] = useState('');
    const [vehicleDescription, setVehicleDescription] = useState('');
    const [driverDescription, setDriverDescription] = useState('');
    const [Rating, setRating] = useState(0);
    const navigate = useNavigate();

    const handleSaveData = () => {
        const data = {
            vehicleid,
            vehicleDescription,
            driverDescription,
            Rating
        };

        axios.post('http://localhost:5556/Complains', data)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert('An error occurred. Please check the console for details.');
                console.log(err);
            });
    };

    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="flex justify-center">
                <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className='flex flex-row'>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setRating(index + 1)}
                                className={`text-3xl mx-1 focus:outline-none ${
                                    index + 1 <= Rating ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                    <div className="ml-10 mt-2">{Rating === 0 ? 'Please rate' : `You rated: ${Rating} stars`}</div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicle_id">Vehicle Id</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id='vehicle_id'
                        type="text"
                        placeholder='vehicle ID'
                        name='vehicle_id'
                        value={vehicleid}
                        onChange={(e) => setVehicleid(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Driver_description">Review for Driver</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id='Driver_description'
                        type="text"
                        placeholder='Review for driver'
                        name='Driver_description'
                        value={driverDescription}
                        onChange={(e) => setDriverDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Vehicle_description">Review for Vehicle</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id='Vehicle_description'
                        type="text"
                        placeholder='Review for Vehicle'
                        name='Vehicle_description'
                        value={vehicleDescription}
                        onChange={(e) => setVehicleDescription(e.target.value)}
                        required
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleSaveData}
                >
                    Save
                </button>
                </form>
            </div>
            
        </div>
    );
};

export default ComplainsForm;
