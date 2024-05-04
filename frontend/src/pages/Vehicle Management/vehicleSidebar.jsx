import React from 'react'
import { Link } from 'react-router-dom'
const VehicleSidebar = () => {
  return (
    <>
      
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mb-60 my-60'>
    <Link to ={'/AddedVehicles'}>Added Vehicles</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mb-60 my-60'>
    <Link to ={'/VehicleMProfile'}>Profile</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded mb-60 my-60'>
    <Link to ={'/Reviews'}>Show Reviews and complains</Link>
    </button>
   

    </>
  )
}

export default VehicleSidebar