import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const Home = () => {
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
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>ComplainList</h1>
        <Link to='/complainsForm'>Create Complain</Link>
      </div>
      <table> {/* Added table tag for proper structure */}
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>Complain ID</th>
            <th className='border border-slate-600 rounded-md'>Vehicle ID</th>
            <th className='border border-slate-600 rounded-md'>Vehicle Description</th>
            <th className='border border-slate-600 rounded-md'>Driver Description</th>
            <th className='border border-slate-600 rounded-md'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complains.map((complaint, index) => (
            <tr key={complaint._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
              <td className='border border-slate-700 rounded-md text-center'>{complaint.vehicle_id}</td>
              <td className='border border-slate-700 rounded-md text-center'>{complaint.Vehicle_description}</td>
              <td className='border border-slate-700 rounded-md text-center'>{complaint.Driver_description}</td>
              <td className='flex justify-center gap-x-4'>
                <Link to={`/complains/details/${complaint._id}`}>
                  <BsInfoCircle className='text-xl text-green-800' />
                </Link>
                <Link to={`/complains/edit/${complaint._id}`}>
                  <AiOutlineEdit className='text-xl text-yellow-600' />
                </Link>
                <Link to={`/complains/delete/${complaint._id}`}>
                  <MdOutlineDelete className='text-xl text-yellow-600' />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
