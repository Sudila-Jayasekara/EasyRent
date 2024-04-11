import { useEffect, useState } from "react"
import axios from "axios";


const ShowComplains =()=>{
    const[complains,setcomplains]=useState([]);
    const[filteredComplains,setFilteredcomplains]=useState([]);
    const vehicleId = "v001";

useEffect(()=>{
    axios.get('http://localhost:5556/api/complains')
    .then(response=>{
      console.log('Response data:', response.data);
      
      const filteredComplains = response.data.filter(complains => complains.vehicle_id === vehicleId);
      setcomplains(filteredComplains);
    })
    .catch(error=>{
        console.log('error fetching complains',error);
    });
},[vehicleId]);

const handleApprove = (vehicleId) => {
  // Call API to update comlains status to "approved"
  axios.patch(`http://localhost:5556/api/complains/${vehicleId}`)
    .then(response => {
      // Update local state after successful update
      setBookings(prevBookings => {
        return prevBookings.map(complains => {
          if (complains._id === vehicleId) {
            return { ...complains, status: 'approved' };
          } else {
            return complains;
          }
        });
      });
    })
    .catch(error => {
      console.error('Error approving booking:', error);
    });
};

const handleReject = (vehicleId) => {
  // Call API to update complains status to "rejected"
  axios.delete(`http://localhost:5556/api/booking/${vehicleId}`)
    .then(response => {
      // Update local state after successful update
      setBookings(prevBookings => {
        return prevBookings.map(complains => {
          if (complains._id === vehicleId) {
            return { ...complains};
          } else {
            return complains;
          }
        });
      });
    })
    .catch(error => {
      console.error('Error rejecting booking:', error);
    });
};






  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Complains Details</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
          
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Vehicle id
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Driver description
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Vehicle description
            </th>
            
          </tr>
        </thead>
        <tbody>
          {complains.map((complanining,index) => (
            <tr key={index} className="hover:bg-gray-100">

              <td className="py-2 px-4">{index+1}</td>
              <td className="py-2 px-4">{complanining.vehicle_id}</td>
              <td className="py-2 px-4">{complanining.Driver_description}</td>
              <td className="py-2 px-4">{complanining.Vehicle_description}</td>
              <td className="py-2 px-4">
              <>
                
                <button onClick={() => handleReject(complanining._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                </>
              </td>
            </tr>
            
            
          ))}
        </tbody>
      </table>
    </div>

  )
};

export default ShowComplains;
