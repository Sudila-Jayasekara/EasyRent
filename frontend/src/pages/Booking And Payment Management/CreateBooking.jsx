import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        serviceType: "",
        startDate: "",
        endDate: "",
        status: "pending",
        location: "",
        description: "",
    });
    const [renter, setRenter] = useState("119119119");
    const [vehicle, setVehicle] = useState("119119119");

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validate if end date is less than start date
        if (name === "endDate" && new Date(value) <= new Date(formData.startDate)) {
            alert("End date cannot be less than start date");
            return; // Exit early if validation fails
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFormData = {
            ...formData,
            renter,
            vehicle,
        };
        console.log(updatedFormData);
        //send form data to the server
        axios
            .post("http://localhost:5556/api/booking", updatedFormData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        //clear the form after submit
        setFormData({
            serviceType: "",
            startDate: "",
            endDate: "",
            status: "pending",
            location: "",
            description: "",
        });
    };
    const calculateDaysDifference = () => {
        if (formData.startDate && formData.endDate) {
            const startDate = new Date(formData.startDate);
            const endDate = new Date(formData.endDate);
            const differenceInTime = endDate.getTime() - startDate.getTime();
            const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
            return differenceInDays;
        }
        return "";
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
                            <p className="text-gray-700 mb-2">Name: Toyota Prius</p>
                            <p className="text-gray-700 ">Price: $25,000</p>
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
                                    <option value="approved" disabled>
                                        Approved
                                    </option>
                                    <option value="rejected" disabled>
                                        Rejected
                                    </option>
                                    <option value="cancelled" disabled>
                                        Cancelled
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="location"
                        >
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
                <div className="max-w-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4 space-y-3">
                            <div>
                                <span
                                    className="block text-gray-700 text-sm font-bold"
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
                            <div>
                                <label htmlFor="billImage" className="block text-gray-700 text-sm font-bold mb-2">
                                    Bill Image
                                </label>
                                <input
                                    type="file"
                                    id="billImage"
                                    name="bill"
                                    onChange={handleChange}
                                    accept="image/*" // Allow only image files
                                    required
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <span
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="description"
                        >
                            Generate Estimate Bill
                        </span>
                        Date Range: {calculateDaysDifference()}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
