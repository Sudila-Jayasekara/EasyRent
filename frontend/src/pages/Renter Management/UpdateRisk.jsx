import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

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
        const newErrors = { ...errors };
        if (name === 'username' && !/^[a-zA-Z\s]*$/.test(value)) {
            newErrors[name] = 'Only letters are allowed';
        } else {
            delete newErrors[name];
        }
        setErrors(newErrors);
        setEditableRiskDetail({ ...editableRiskDetail, [name]: value });
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
    };

    return (
        <div className="print:border print:border-gray-400 print:border-4 print:p-4">
            <form onSubmit={handleSubmit}>
                <div className="print:flex print:flex-col print:min-h-full print:overflow-auto">
                    {/* Header */}
                    
                    {/* Content */}
                    <div className="print:flex-1 print:p-8" ref={printRef}>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-blue-600">Risk Details</h2>
                            <div>
                                {/* Render form fields for editing */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <label htmlFor="username" className="font-bold text-lg text-black underline">Name:</label>
                                        <input type="text" id="username" name="username" value={editableRiskDetail.username} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        {errors['username'] && <p className="text-red-500">{errors['username']}</p>}

                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="font-bold text-lg text-black underline">Email:</label>
                                        <input type="email" id="email" name="email" value={editableRiskDetail.email} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="nic" className="font-bold text-lg text-black underline">NIC:</label>
                                        <input type="text" id="nic" name="nic" value={editableRiskDetail.nic} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phoneNumber" className="font-bold text-lg text-black underline">Phone Number:</label>
                                        <input type="text" id="phoneNumber" name="phoneNumber" value={editableRiskDetail.phoneNumber} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="address" className="font-bold text-lg text-black underline">Address:</label>
                                        <input type="text" id="address" name="address" value={editableRiskDetail.address} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accidentAddress" className="font-bold text-lg text-black underline">Accident Address:</label>
                                        <input type="text" id="accidentAddress" name="accidentAddress" value={editableRiskDetail.accidentAddress} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accidentDate" className="font-bold text-lg text-black underline">Accident Date:</label>
                                        <input type="date" id="accidentDate" name="accidentDate" value={editableRiskDetail.accidentDate} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accidentTime" className="font-bold text-lg text-black underline">Accident Time:</label>
                                        <input type="time" id="accidentTime" name="accidentTime" value={editableRiskDetail.accidentTime} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="accidentDescription" className="font-bold text-lg text-black underline">Accident Description:</label>
                                        <textarea id="accidentDescription" name="accidentDescription" rows="4" value={editableRiskDetail.accidentDescription} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="injuries" className="font-bold text-lg text-black underline">Injuries:</label>
                                        <input type="text" id="injuries" name="injuries" value={editableRiskDetail.injuries} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="legalAndInsuranceInfo" className="font-bold text-lg text-black underline">Legal and Insurance Info:</label>
                                        <textarea id="legalAndInsuranceInfo" name="legalAndInsuranceInfo" rows="4" value={editableRiskDetail.legalAndInsuranceInfo} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="vehiclenumber" className="font-bold text-lg text-black underline">Vehicle Number:</label>
                                        <input type="text" id="vehiclenumber" name="vehiclenumber" value={editableRiskDetail.vehiclenumber} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="print:bg-gradient-to-r from-blue-300 to-blue-500 print:py-4 print:px-8 print:border-t print:border-gray-400">
    <p className="print:text-center text-white font-bold">Easy Rent</p>
</div>

                </div>
                {/* Button to trigger printing and submit form */}
                <div className="mb-3  flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                        Save Changes 
                    </button>
                    
                </div>
            </form>
        </div>
    );
};

export default UpdateRisk;
