import React from 'react'
import { Link } from 'react-router-dom'
const VehicleSidebar = () => {
  return (
    <>
      <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
   <Link>Approved Forms</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Updated Forms</Link>
    </button>
    </>
  )
}

export default VehicleSidebar