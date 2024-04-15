import React from 'react'
import { Link } from 'react-router-dom'
const VehicleSidebar = () => {
  return (
    <>
      <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mb-60 my-70'>
   <Link>Approved Forms</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mb-60 my-60'>
   <Link to ={'/vehicledashboard'}>Added Vehicles</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mb-60 my-60'>
    <Link>Updated Forms</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mb-60 my-60'>
    <Link to ={'/Profile'}>Profile</Link>
    </button>
    </> 
  )
}

export default VehicleSidebar