
import React from 'react';
import { Link } from 'react-router-dom';
//import thumbnail from '../Driver Management/thumbnail.jpeg';

const DriverDashboard = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link to={'/displaydate'}>
        <button className='bg-black ml-7 text-white h-16 mt-5 w-60'>Check Reserved Dates</button>
        </Link>
        <Link to={'/license'}>
          <button className='bg-black text-white h-16 w-60 mx-48 my-10'>License Verification</button>
        </Link>
        <Link to={'/driverdisplay'}>
        <button className='bg-black ml-7 text-white h-16 w-60'>View Drivers</button>
        </Link>
        
      </div>
      <div>
        <img className="object-cover w-96 mt-5 ml-20 h-96 p-1 ring-2 ring-indigo-300 dark:ring-indigo-500" src={thumbnail} alt="Thumbnail" />
      </div>
    </div>
  );
};

export default DriverDashboard;
