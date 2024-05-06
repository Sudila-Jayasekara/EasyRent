import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReviewsDetails = () => {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5556/Complains')
      .then((response) => {
        setComplains(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className='p-4'>
        <center>
          <table>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md p-2'>Complain ID</th>
                <th className='border border-slate-600 rounded-md p-2'>Vehicle ID</th>
                <th className='border border-slate-600 rounded-md p-2'>Reviews for Vehicles</th>
                <th className='border border-slate-600 rounded-md p-2'>Reviews for Drivers</th>
                <th className='border border-slate-600 rounded-md p-2'>Reply</th>
              </tr>
            </thead>
            <tbody>
              {complains.map((complaint, index) => (
                <tr key={complaint._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{complaint.vehicle_id}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{complaint.Vehicle_description}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{complaint.Driver_description}</td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    <button type="button" className="py-2 px-6 ml-36 text-base font-medium text-black focus:outline-none bg-amber-500 rounded-lg border border-indigo-200 hover:bg-slate-700 focus:z-10 focus:ring-4 focus:ring-indigo-200">
                      <Link to={`/reply/${complaint._id}`}>Reply</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
};

export default ReviewsDetails;
