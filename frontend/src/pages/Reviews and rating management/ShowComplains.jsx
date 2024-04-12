import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ShowComplains() {
  const [complains, setComplains] = useState({});
  const { id } = useParams();

  useEffect(() => {    
    axios
      .get(`http://localhost:5556/complains/${id}`)
      .then((response) => {
        setComplains(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // Added id to the dependency array to re-fetch data when id changes

  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Show Complains</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Vehicle ID</span>
          <span>{complains._id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Vehicle Description</span>
          <span>{complains.Vehicle_description}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Driver Description</span>
          <span>{complains.Driver_description}</span>
        </div>
      </div>
    </div>
  );
}

export default ShowComplains;
