import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import Header from '../../components/Header';

const Home = () => {
  const [complains, setComplains] = useState([]);
  const user = localStorage.getItem('id');

  useEffect(() => {
    axios
      .get(`http://localhost:5556/Complains`)
      .then((response) => {
        setComplains(response.data); // Assuming response.data contains an array of complaints
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header></Header>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8'>ComplainList</h1>

        </div>
        <center>
          <table> {/* Added table tag for proper structure */}
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md p-2'>Complain ID</th>
                <th className='border border-slate-600 rounded-md p-2'>Vehicle ID</th>
                <th className='border border-slate-600 rounded-md p-2'>Rating(Stars)</th>
                <th className='border border-slate-600 rounded-md p-2'>Vehicle Description</th>
                <th className='border border-slate-600 rounded-md p-2'>Driver Description</th>
                <th className='border border-slate-600 rounded-md p-2'>Reply</th>
                <th className='border border-slate-600 '>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complains.map((complaint, index) => (
                complaint.id === user && ( // Check if complaint ID matches user ID
                  <tr key={complaint._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{complaint.vehicle_id}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{complaint.rating}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{complaint.Vehicle_description}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{complaint.Driver_description}</td>
                    <td className='border border-slate-700 rounded-md text-center'>{complaint.reply}</td>
                    <td className='border border-slate-600  text-center flex justify-center gap-x-4'>
                      <Link to={`/complains/details/${complaint._id}`}>
                        <BsInfoCircle className='text-xl text-green-800 mt-2 ml-1 mr-1' />
                      </Link>
                      <Link to={`/complains/edit/${complaint._id}`}>
                        <AiOutlineEdit className='text-xl text-yellow-600 mt-2 ml-1 mr-1' />
                      </Link>
                      <Link to={`/complains/delete/${complaint._id}`}>
                        <MdOutlineDelete className='text-xl text-yellow-600 mt-2 ml-1 mr-1' />
                      </Link>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
};

export default Home;
