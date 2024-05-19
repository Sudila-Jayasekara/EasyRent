//latest booking create
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams(); 

    const [formData, setFormData] = useState({
        serviceType: "",
        startDate: "",
        endDate: "",
        status: "pending",
        location: "",
        description: "",
    });
    const [renter_id, setRenterId] = useState("");
    const [renter_nic, setRenterNIC] = useState("");
    const [vehicle_id, setVehicleId] = useState(vehicleId); 
    const [vehicle, setVehicle] = useState([]);
    const [estimatePrice, setEstimatePrice] = useState(null);
    const [dateDifference, setDateDifference] = useState(null);
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        // Extract user details from localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        setRenterId(user._id);
        setRenterNIC(user.nic);

        // Display user ID and NIC
        console.log("User ID:", user._id);
        console.log("User NIC:", user.nic);
        console.log("User",user);

        // Fetch vehicle data
        axios.get(`http://localhost:5556/api/vehicle/${vehicle_id}`)
            .then(response => {
                setVehicle(response.data);
            })
            .catch(error => {
                console.error('Error fetching vehicle:', error);
            });
    }, [vehicle_id]);

    useEffect(() => {
        // Calculate date difference
        const startDate = new Date(formData.startDate);
        const endDate = new Date(formData.endDate);
        const differenceInTime = endDate.getTime() - startDate.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        setDateDifference(differenceInDays);
    }, [formData.startDate, formData.endDate]);

    useEffect(() => {
        // Calculate estimate price
        if (dateDifference !== null && vehicle.price) {
            const price = dateDifference * vehicle.price;
            setEstimatePrice(price);
        } else {
            setEstimatePrice(null);
        }
    }, [dateDifference, vehicle.price]);

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
      
        // Validate if end date is less than start date
        if (name === "endDate" && new Date(value) <= new Date(formData.startDate)) {
          alert("End date cannot be less than or equal to start date");
          return; // Exit early if validation fails
        }
      
        // Validate if start date is less than today's date
        if (name === "startDate" && new Date(value) < today) {
          alert("Start date cannot be less than today's date");
          return; // Exit early if validation fails
        }
      
        setFormData({ ...formData, [name]: value });
      };
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send form data to the server to create a booking
            const bookingResponse = await axios.post("http://localhost:5556/api/booking", {
                ...formData,
                renter_id,
                vehicle_id,
                renter_nic,
            });
            const booking_id = bookingResponse.data._id;
            // Create a payment object with the booking ID and estimate price
            const paymentData = {
                booking_id,
                estimatePrice,
            };
            // Send payment data to the server
            const paymentResponse = await axios.post("http://localhost:5556/api/payment", paymentData);
            console.log(paymentResponse.data);
            // Clear the form after submit
            setFormData({
                serviceType: "",
                startDate: "",
                endDate: "",
                status: "pending",
                location: "",
                description: "",
            });
            // Navigate to booking history or any other desired page
            navigate('/booking/history');
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex justify-center space-x-5 mt-5 "
            >
                <div className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <span className="text-3xl font-bold mb-6 block">
                        {" "}
                        Place your <span className="text-yellow-400">Bookings</span>
                    </span>
                    <div className="flex justify-between shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
                        <div className="w-1/4">
                            <img
                                src="https://i.ikman-st.com/wedding-car-rent-toyota-prius-for-sale-kegalle/0159247c-e138-44d6-8d6a-cf05e98359da/780/585/fitted.jpg"
                                alt="Image"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-2/4">
                            <p className="text-gray-700 mb-2">Brand: {vehicle.brand}</p>
                            <p className="text-gray-700 mb-2">Model: {vehicle.model}</p>
                            <p className="text-gray-700 ">Price for a day: Rs.{vehicle.price}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="w-1/2 pr-3">
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="startDate"
                                >
                                    Start Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="startDate"
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    min={today}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="serviceType"
                                >
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
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="endDate"
                                >
                                    End Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="endDate"
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    min={formData.startDate}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="status"
                                >
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
                                    {/* <option value="approved" disabled>
                                        Approved
                                    </option>
                                    <option value="rejected" disabled>
                                        Rejected
                                    </option>
                                    <option value="cancelled" disabled>
                                        Cancelled
                                    </option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="location" 
                        >
                            Location (where do you want to travel)
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
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}

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
                <div className="max-w-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4 space-y-3">
                            <div>
                                <span
                                    className="block text-gray-700 text-sm font-bold mt-10"
                                    htmlFor="description"
                                >
                                    Approved Documents
                                </span>
                                <ul className="list-disc pl-5">
                                    <li className="text-red-500">Driving Licence</li>
                                    <li className="text-red-500">National Identity Card</li>
                                    <li className="text-red-500">Any Kind Of Bill</li>
                                </ul>
                            </div>
                            {/* <div>
                                <label htmlFor="billImage" className="block text-gray-700 text-sm font-bold mb-2">
                                    Bill Image
                                </label>
                                <input
                                    type="file"
                                    id="billImage"
                                    name="bill"
                                    onChange={handleChange}
                                    accept="image/*" // Allow only image files
                                    //required
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div> */}
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <span className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Generate Estimate Bill
                        </span>
                        Date Range: {dateDifference !== null ? dateDifference : 'N/A'} <br />
                        {estimatePrice !== null ? (
                            <p>
                                Estimate Price for Trip: Rs.{estimatePrice}
                            </p>
                        ) : (
                            <p>Please select start and end dates to calculate estimate price.</p>
                        )}
                    </div>

                </div>
            </form>
        </div>
    );
};

export default BookingForm;
