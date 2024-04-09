import React, { useState } from 'react';
import axios from 'axios';

const ComplainsForm = () => {
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
    const [rating, setRating] = useState(0); // State to hold the rating

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleRatingChange = (value) => {
      setRating(value);
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
        <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className='flex flex-row'>
                
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleRatingChange(index + 1)}
                    className={`text-3xl mx-1 focus:outline-none ${
                      index + 1 <= rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <div className="ml-2">{rating === 0 ? 'Please rate' : `You rated: ${rating} stars`}</div>
              </div>
                <div className="mb-4">
                    <span className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Reviews & Complains
                    </span>
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
           
        </div>
    );
};

export default ComplainsForm;
