import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const ShowReplies = () => {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5556/Complains')
      .then((response) => {
        setComplains(response.data); // Assuming response.data contains an array of complaints
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
     
    <div className='p-4'>
     
        
     <center><table> {/* Added table tag for proper structure */}
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md p-2'>Complain ID</th>
            <th className='border border-slate-600 rounded-md p-2'>Vehicle ID</th>
            <th className='border border-slate-600 rounded-md p-2'>Reply</th>
           
            
            
          </tr>
        </thead>
        <tbody>
          {complains.map((complaint, index) => (
           <tr key={complaint._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
              <td className='border border-slate-700 rounded-md text-center'>{complaint.vehicle_id}</td>
              <td className='border border-slate-700 rounded-md text-center'></td>
              <td className='border border-slate-700 rounded-md text-center'>
              <div className="flex justify-center">
						<button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                        Delete</button></div> </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className="flex justify-center">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                        Edit</button></div> </td>
              
            </tr>
          ))}
        </tbody>
      </table></center> 
    </div>
    </div>
  );
};

export default ShowReplies;
