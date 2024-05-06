import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const UpdateRisk = () => {
    const location = useLocation();
    const riskDetail = location.state.riskDetail;
    const printRef = useRef();
    const [errors, setErrors] = useState({});

    // State to hold the editable risk detail
    const [editableRiskDetail, setEditableRiskDetail] = useState(riskDetail);

    useEffect(() => {
        setEditableRiskDetail(riskDetail);
    }, [riskDetail]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        let newErrors = { ...errors };

        switch (name) {
            case 'username':
                newValue = value.replace(/[^a-zA-Z\s]/g, "");
                if (!newValue.trim()) {
                    newErrors[name] = 'Name is required';
                } else {
                    delete newErrors[name];
                }
                break;
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors[name] = 'Invalid email address';
                } else {
                    delete newErrors[name];
                }
                break;
            case 'nic':
                if (!/^\d{12}$/.test(value)) {
                    newErrors[name] = 'NIC must contain exactly 12 numbers';
                } else {
                    delete newErrors[name];
                }
                break;
            case 'phoneNumber':
                newValue = value.replace(/\D/g, "");
                if (newValue.length !== 10 || newValue.charAt(0) !== "0") {
                    newErrors[name] = "Phone number must start with 0 and contain exactly 10 digits";
                } else {
                    delete newErrors[name];
                }
                break;
            case 'accidentDate':
                if (value.trim() === "") {
                    newErrors[name] = "Accident date is required";
                } else {
                    delete newErrors[name];
                }
                break;
            case 'accidentTime':
                if (value.trim() === "") {
                    newErrors[name] = "Accident time is required";
                } else {
                    delete newErrors[name];
                }
                break;
            // Basic validation for other fields
            case 'accidentAddress':
            case 'accidentDescription':
            case 'injuries':
            case 'legalAndInsuranceInfo':
            case 'vehiclenumber':
                if (!value.trim()) {
                    newErrors[name] = 'This field is required';
                } else {
                    delete newErrors[name];
                }
                break;
            default:
                break;
        }

       


        setErrors(newErrors);
        setEditableRiskDetail({ ...editableRiskDetail, [name]: newValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/risk/${editableRiskDetail._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editableRiskDetail),
            });
            if (response.ok) {
                alert('Risk detail updated successfully');
            } else {
                console.error('Failed to update risk detail');
            }
        } catch (error) {
            console.error('Error occurred while updating risk detail:', error);
        }
    }

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Risk Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Name:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" name="username" value={editableRiskDetail.username} onChange={handleInputChange} />
                        {errors['username'] && <p className="text-red-500 text-xs italic">{errors['username']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" name="email" value={editableRiskDetail.email} onChange={handleInputChange} />
                        {errors['email'] && <p className="text-red-500 text-xs italic">{errors['email']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nic">NIC:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="nic" name="nic" value={editableRiskDetail.nic} onChange={handleInputChange} />
                        {errors['nic'] && <p className="text-red-500 text-xs italic">{errors['nic']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">Phone Number:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="phoneNumber" name="phoneNumber" value={editableRiskDetail.phoneNumber} onChange={handleInputChange} />
                        {errors['phoneNumber'] && <p className="text-red-500 text-xs italic">{errors['phoneNumber']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accidentAddress">Accident Address:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="accidentAddress" name="accidentAddress" value={editableRiskDetail.accidentAddress} onChange={handleInputChange} />
                        {errors['accidentAddress'] && <p className="text-red-500 text-xs italic">{errors['accidentAddress']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accidentDate">Accident Date:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" id="accidentDate" name="accidentDate" value={editableRiskDetail.accidentDate} onChange={handleInputChange} />
                        {errors['accidentDate'] && <p className="text-red-500 text-xs italic">{errors['accidentDate']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accidentTime">Accident Time:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" id="accidentTime" name="accidentTime" value={editableRiskDetail.accidentTime} onChange={handleInputChange} />
                        {errors['accidentTime'] && <p className="text-red-500 text-xs italic">{errors['accidentTime']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accidentDescription">Accident Description:</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="accidentDescription" name="accidentDescription" rows="4" value={editableRiskDetail.accidentDescription} onChange={handleInputChange}></textarea>
                        {errors['accidentDescription'] && <p className="text-red-500 text-xs italic">{errors['accidentDescription']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="injuries">Injuries:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="injuries" name="injuries" value={editableRiskDetail.injuries} onChange={handleInputChange} />
                        {errors['injuries'] && <p className="text-red-500 text-xs italic">{errors['injuries']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="legalAndInsuranceInfo">Legal and Insurance Info:</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="legalAndInsuranceInfo" name="legalAndInsuranceInfo" rows="4" value={editableRiskDetail.legalAndInsuranceInfo} onChange={handleInputChange}></textarea>
                        {errors['legalAndInsuranceInfo'] && <p className="text-red-500 text-xs italic">{errors['legalAndInsuranceInfo']}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehiclenumber">Vehicle Number:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="vehiclenumber" name="vehiclenumber" value={editableRiskDetail.vehiclenumber} onChange={handleInputChange} />
                        {errors['vehiclenumber'] && <p className="text-red-500 text-xs italic">{errors['vehiclenumber']}</p>}
                    </div>
                </div>
                {/* Submit button */}
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
    );
};

export default UpdateRisk;
