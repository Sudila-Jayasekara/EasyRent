import { useEffect, useState } from "react"
import axios from "axios"

const ShowComplains =()=>{
    const[complains,setcomplains]=useState([]);
}
useEffect(()=>{
    axios.get('http://localhost:5556/api/complains')
    .then(response=>{
        console.log('Response data:',response.data.data)
        setcomplains(response.data.data);
    })
    .catch(error=>{
        console.error('error fetching complains',error);
    });
},[]);

function ShowComplains() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Complains Details</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
             Trip id
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Vehicle id
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Driver description
            </th>
            <th className="py-2 px-4 text-left font-medium text-gray-900 uppercase tracking-wider">
              Vehicle description
            </th>
            {/* Add more table headers for other booking details */}
          </tr>
        </thead>
        <tbody>
          {complains.map(complanining => (
            <tr key={complanining.vehicle_id} className="hover:bg-gray-100">
              <td className="py-2 px-4">{complanining.trip_id}</td>
              <td className="py-2 px-4">{complanining.vehicle_id}</td>
              <td className="py-2 px-4">{complanining.Driver_description}</td>
              <td className="py-2 px-4">{complanining.Vehicle_description}</td>
              {/* Add more table cells for other booking details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default ShowComplains
