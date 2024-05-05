import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const ViewRenterDetails = () => {
  const location = useLocation();
  const [renterDetail, setRenterDetail] = useState(null);
  const printtoPdf = useRef();
  const [accidentRecords, setAccidentRecords] = useState([]);

  useEffect(() => {
    setRenterDetail(location.state.renterDetail);
  }, [location.state.renterDetail]);

  const fetchAccidentRecords = async () => {
    try {
      const response = await fetch(`http://localhost:5556/api/risk/${renterDetail.nic}`);
      if (response.ok) {
        const data = await response.json();
        setAccidentRecords(data);
      } else {
        throw new Error('Failed to fetch accident records');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (renterDetail) {
      fetchAccidentRecords();
    }
  }, [renterDetail]);

  const handlePrint = useReactToPrint({
    content: () => printtoPdf.current,
    documentTitle: 'Renter Details',
    onAfterPrint: () => alert('Printed Successfully')
  });

  if (!renterDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div ref={printtoPdf}>
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
          <div className="relative">
            <img className="w-full h-48 object-cover" src={`http://localhost:5556/${renterDetail.profilePicture ? renterDetail.profilePicture.replace("public", "") : ''}`} alt="Profile Image" />
          </div>
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold">Renter Details</h2>
            <p><strong>Name:</strong> {renterDetail.username}</p>
            <p><strong>Email:</strong> {renterDetail.email}</p>
            <p><strong>Address:</strong> {renterDetail.address}</p>
            <p><strong>Phone Number:</strong> {renterDetail.phoneNumber}</p>
            <p><strong>NIC:</strong> {renterDetail.nic}</p>
          </div>
        </div>

        {accidentRecords.length > 0 && (
          <div className="my-4">
            <h2 className="text-xl font-semibold">Accident Records</h2>
            <ul className="list-disc pl-8">
              {accidentRecords.map(accident => (
                <li key={accident._id}>
                  <p><strong>Accident Date:</strong> {accident.accidentDate}</p>
                  <p><strong>Accident Address:</strong> {accident.accidentAddress}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePrint}>Download Report</button>
      </div>
    </div>
  );
};

export default ViewRenterDetails;
