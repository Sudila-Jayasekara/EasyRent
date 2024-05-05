import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const ComplainsEdit = () => {
    const [formData, setFormData] = useState({
        vehicleId: "",
        driverDescription: "",
        vehicleDescription: "",
        rating: 0,
    });
    const { id } = useParams();
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5556/complains/${id}`)
            .then((res) => {
                setFormData(res.data); // Assuming res.data has the same structure as formData
            })
            .catch((err) => {
                setError('An error occurred while fetching data');
                console.error(err);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5556/complains/${id}`, formData)
            .then((response) => {
                console.log(response.data);
                // Optionally, you can navigate the user to another page upon successful submission
            })
            .catch((error) => {
                setError('An error occurred while submitting data');
                console.error(error);
            });
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col justify-between min-h-screen">
                
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-9 pt-10 pb-8 mt-2">
                        {/* Rating buttons */}
                        <center><b>Edit Rating & Reviews</b></center>
                        <br></br>
                        <div className="flex items-center mb-4 mt-3">
                            {[...Array(5)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleRatingChange(index + 1)}
                                    className={`text-3xl mx-1 focus:outline-none ${
                                        index + 1 <= formData.rating ? 'text-yellow-500' : 'text-gray-300'
                                    }`}
                                >
                                    ★
                                </button>
                            ))}
                            <div className="ml-10 mt-2">{formData.rating === 0 ? 'Please rate' : `You rated: ${formData.rating} stars`}</div>
                        </div>

                        {/* Vehicle ID input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleId">Vehicle Id</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="vehicleId"
                                type="text"
                                placeholder="Vehicle ID"
                                name="vehicleId"
                                value={formData.vehicleId}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Driver Description input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverDescription">Review for Driver</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="driverDescription"
                                type="text"
                                placeholder="Review for driver"
                                name="driverDescription"
                                value={formData.driverDescription}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Vehicle Description input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleDescription">Review for Vehicle</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="vehicleDescription"
                                type="text"
                                placeholder="Review for Vehicle"
                                name="vehicleDescription"
                                value={formData.vehicleDescription}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Error handling */}
                        {error && <p className="text-red-500">{error}</p>}

                        {/* Submit button */}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ComplainsEdit;
