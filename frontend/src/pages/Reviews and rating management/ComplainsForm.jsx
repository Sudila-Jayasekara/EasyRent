import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ComplainsForm = () => {
    const [formData, setFormData] = useState({
        description: ''
    });
    
    // State to hold the rating for the driver reviews
    const [driverRating, setDriverRating] = useState(0);

    // State to hold the rating for the vehicle reviews
    const [vehicleRating, setVehicleRating] = useState(0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    // Function to handle rating change for the driver reviews
    const handleDriverRatingChange = (value) => {
        setDriverRating(value);
    };

    // Function to handle rating change for the vehicle reviews
    const handleVehicleRatingChange = (value) => {
        setVehicleRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const dataToSend = {
          description: formData.description,
          driverRating: driverRating, // Add driver rating value
          vehicleRating: vehicleRating // Add vehicle rating value
      };

        //send form data to the server
        axios.post('http://localhost:5556/api/complains/editcomplains', dataToSend)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        //clear the form after submit
        setFormData({ description: '' });
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-between min-h-screen">
                <div className="flex justify-center">
                    <div className="flex-1 max-w-md mt-10 bg-white shadow-md rounded px-8 pt-20 pb-8 mb-4">
                        <span className="block text-gray-700 text-sm font-bold mb-10 text-center " htmlFor="description">
                            Reviews & Ratings for Driver
                        </span>
                        <div className='flex flex-row'>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDriverRatingChange(index + 1)}
                                        className={`text-3xl mx-1 focus:outline-none ${
                                            index + 1 <= driverRating ? 'text-yellow-500' : 'text-gray-300'
                                            }`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            <div className="ml-10 mt-2">{driverRating === 0 ? 'Please rate' : `You rated: ${driverRating} stars`}</div>
                        </div>
                        <div className="mb-4">
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
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 max-w-md mt-10 bg-white shadow-md rounded px-8 pt-20 pb-8 mb-4">
                        <span className="block text-gray-700 text-sm font-bold mb-10 text-center " htmlFor="description">
                            Reviews & Ratings for vehicles
                        </span>
                        <div className='flex flex-row'>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleVehicleRatingChange(index + 1)}
                                        className={`text-3xl mx-1 focus:outline-none ${
                                            index + 1 <= vehicleRating ? 'text-yellow-500' : 'text-gray-300'
                                            }`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                            <div className="ml-10 mt-2">{vehicleRating === 0 ? 'Please rate' : `You rated: ${vehicleRating} stars`}</div>
                        </div>
                        <div className="mb-4">
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
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ComplainsForm;
