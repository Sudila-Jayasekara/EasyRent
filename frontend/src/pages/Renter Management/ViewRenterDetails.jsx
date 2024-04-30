import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const ViewRenterDetails = () => {
  const location = useLocation();
  const renterDetail = location.state.renterDetail;
  const printtoPdf = useRef();

  const handlePrint = useReactToPrint({
    content: () => printtoPdf.current,
    documentTitle: 'Renter Details',
    onAfterPrint: () => alert('Printed Successfully')
  });

  return (
    <div>
      <div ref={printtoPdf}>

       
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-blue-400">
          <div className="relative">
            <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
          </div>
          <div className="px-6 py-4">
          <h2>Name: {renterDetail.username}</h2>
        <p>Email: {renterDetail.email}</p>
        <p>Address: {renterDetail.address}</p>
        <p>Phone Number: {renterDetail.phoneNumber}</p>
        <p>NIC: {renterDetail.nic}</p>
          </div>
        </div>
      </div>
      
      <button className='bg-gradient-to-r from-red-400 to-yellow-500 text-white font-bold py-2 px-4 rounded' onClick={handlePrint}>Download Report</button>
    </div>
  );
};

export default ViewRenterDetails;
