import React, { useState,useEffect} from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate,useParams } from "react-router-dom";

const ComplainsEdit = () => {
    const [formData, setFormData] = useState({
        vehicle_id: "",
        Driver_description: "",
        Vehicle_description: "",
        rating: "",
    });
    const{id}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5556/complains/${id}`)
        .then((res)=>{
            setFormData(res.data.formData)

    }).catch((err)=>{
        alert('An error happend, please cheack the console');
        console.log(err);
    })
    },[id])


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Send form data to the server
        axios
            .put(`http://localhost:5556/complains/${id}`, formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        // Clear the form after submit
        setFormData({
            vehicle_id: "",
            Driver_description: "",
            Vehicle_description: "",
            rating: "",
        });
       
    };

    return (
        <div>
            <Header></Header>
        <div className="flex flex-col justify-between min-h-screen">
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-9 pt-10 pb-8 mt-10">
                    {/* Rating buttons */}
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setFormData({ ...formData, rating: index + 1 })}
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicle_id">Vehicle Id</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="vehicle_id"
                            type="text"
                            placeholder="Vehicle ID"
                            name="vehicle_id"
                            value={formData.vehicle_id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Driver Description input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Driver_description">Review for Driver</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Driver_description"
                            type="text"
                            placeholder="Review for driver"
                            name="Driver_description"
                            value={formData.Driver_description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Vehicle Description input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Vehicle_description">Review for Vehicle</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Vehicle_description"
                            type="text"
                            placeholder="Review for Vehicle"
                            name="Vehicle_description"
                            value={formData.Vehicle_description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ComplainsEdit;
