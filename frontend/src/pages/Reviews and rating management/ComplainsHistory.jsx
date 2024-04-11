import React, { useEffect } from 'react'
import axios from 'axios';



const ComplainsHistory = () => {
    const [complains, setcomplains] = useState([]);
    const vehicleId = "v001";
  
    useEffect(()=>{
        axios.get(`http://localhost:5556/api/complains`)
        .then(response=>{
        console.log('Response data:', response.data);
        // Filter the complains based on renter ID
        const filteredComplains = response.data.filter(Complaning => Complaning.vehicle_id === renterId);
        setcomplains(filteredComplains);
    })
    .catch(error => {
        console.error('Error fetching complains:', error);
      });

    },[]);



function ComplainsHistory() {
  return (
   
       <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              vehicle Id
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
            Vehicle description
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
            Vehicle description
            </th>
            </tr>
            </thead>
            <tbody>
                {complains.map((Complaning,index)=>(
                    <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{Complaning.vehicle_id}</td>
                    <td className="py-2 px-4">{Complaning.Driver_description}</td>
                    <td className="py-2 px-4">{Complaning.Vehicle_description}</td>

                    
                  </tr>
                ))}
            </tbody>
            </table>
    </div>
  )
}
};
export default ComplainsHistory;
