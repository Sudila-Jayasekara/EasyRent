import React from 'react';
import { Link } from 'react-router-dom';
import driver from '../Driver Management/driver.jpeg';

const DriverDashboard = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Link to={'/displaydates'}>
        <button className='bg-black text-white ml-10 h-16 w-60 mt-9'>Check Reserved Dates</button>
        </Link>
        <Link to={'/license'}>
          <button className='bg-black text-white h-16 ml-65 w-60 mx-48 my-10'>License Verification</button>
        </Link>
        <Link to={'/driverdisplay'}>
        <button className='bg-black text-white ml-10 h-16 w-60'>View Drivers</button>
        </Link>
        
      </div>
     
      <div>
       
        <img className="object-cover w-90  mt-10 ml-50  h-80 p-1 ring-2 ring-indigo-300 dark:ring-indigo-500" src={driver} alt="Thumbnail" />
      
      </div>
    </div>
  );
};

export default DriverDashboard;
