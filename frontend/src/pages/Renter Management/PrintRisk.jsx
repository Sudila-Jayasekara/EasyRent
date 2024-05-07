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

    const accidentPhotos = riskDetail.accidentPhotos;

    return (
        <div className="print:border print:border-gray-400 print:border-4 print:p-4">
            <div className="print:flex print:flex-col print:min-h-full print:overflow-auto">
                {/* Header */}
                <div className="print:bg-gray-100 print:py-4 print:px-8 print:border-b print:border-gray-400">
                    <h1 className="print:text-3xl print:font-bold print:text-blue-600 print:text-center">Easy Rent</h1>
                </div>
                {/* Content */}
                <div className="print:flex-1 print:p-8" ref={printRef}>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6 text-blue-600">Risk Details</h2>
                        <div>
                            <h1 className='font-bold text-lg text-black underline'>User Details</h1>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Name:</span> {riskDetail.username}</p>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Email:</span> {riskDetail.email}</p>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Address:</span> {riskDetail.address}</p>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Phone Number:</span> {riskDetail.phoneNumber}</p>
                            <p className="mb-4"><span className="font-semibold text-gray-800">NIC:</span> {riskDetail.nic}</p>
                            <h1 className='font-bold text-lg text-black underline'>Accident Details</h1>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Accident Happened:</span> {riskDetail.accidentAddress}</p>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Date:</span> {riskDetail.accidentDate}</p>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Time:</span> {riskDetail.accidentTime}</p>
                            <p className='mb-4'><span className='font-semibold text-gray-800'>Accident Description:</span> {riskDetail.accidentDescription}</p>
                            <p className='mb-4'><span className='font-semibold text-gray-800'>Vehicle Number:</span>{riskDetail.vehiclenumber}</p>
                            <p className='mb-4'><span className='font-semibold text-gray-800'>Injuries:</span>{riskDetail.injuries}</p>
                            <p className="mb-4"><span className="font-semibold text-gray-800">Legal and Insurance Info:</span> {riskDetail.legalAndInsuranceInfo}</p>
                            {/* Images */}
                            <div className="flex flex-wrap -mx-4">
                                {accidentPhotos && accidentPhotos.map((photo, index) => (
                                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4">
                                        <img 
                                            src={`http://localhost:5556/${photo.replace("public", "")}`} 
                                            alt={`Accident ${index + 1}`} 
                                            className="w-full h-64 object-cover rounded-lg shadow"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="print:bg-gray-100 print:py-4 print:px-8 print:border-t print:border-gray-400">
                    <p className="print:text-center text-gray-600">Easy Rent</p>
                </div>
            </div>
            {/* Button to trigger printing */}
            <div className="mt-8 flex justify-center">
                <button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                    Print Details
                </button>
            </div>
        </div>
    );
};
  
export default PrintRisk;
