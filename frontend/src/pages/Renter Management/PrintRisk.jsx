import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const PrintRisk = () => {
    const location = useLocation();
    const riskDetail = location.state.riskDetail;
    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: 'Risk Details',
        onAfterPrint: () => alert('Printed Successfully')
    });

    return (
        <div className="container mx-auto px-4">
            <div className="mt-8">
                <div ref={printRef} className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-4">Risk Details</h2>
                    <div>
                        <p className="mb-2"><span className="font-semibold">Name:</span> {riskDetail.username}</p>
                        <p className="mb-2"><span className="font-semibold">Email:</span> {riskDetail.email}</p>
                        <p className="mb-2"><span className="font-semibold">Address:</span> {riskDetail.address}</p>
                        <p className="mb-2"><span className="font-semibold">Phone Number:</span> {riskDetail.phoneNumber}</p>
                        <p className="mb-2"><span className="font-semibold">NIC:</span> {riskDetail.nic}</p>
                        <p className="mb-2"><span className="font-semibold">Accident Happened:</span> {riskDetail.accidentAddress}</p>
                        <p className="mb-2"><span className="font-semibold">Date:</span> {riskDetail.accidentDate}</p>
                        <p className="mb-2"><span className="font-semibold">Time:</span> {riskDetail.accidentTime}</p>
                        <p className='mb-2'><span className='font-semibold'>Accident Description:</span> {riskDetail.accidentDescription}</p>
                        <p className='mb-2'><span className='font-semibold'>Vehicle Number:</span>{riskDetail.vehiclenumber}</p>
                        <p className='mb-2'><span className='font-semibold'>Injuries:</span>{riskDetail.injuries}</p>
                        <p className="mb-2"><span className="font-semibold">Legal and Insurance Info:</span> {riskDetail.legalAndInsuranceInfo}</p>
                        {riskDetail.accidentPhotos.map((photo, index) => (
                            <img
                            key={index}
                            className="mb-4"
                            src={`/uploads/accident/${photo}`} // Use relative path
                            alt={`Accident Photo ${index + 1}`}
                        />
                        
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Print Details
                </button>
            </div>
        </div>
    );
};
  
export default PrintRisk;
