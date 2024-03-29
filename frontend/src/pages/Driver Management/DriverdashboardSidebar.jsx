import React from 'react'
import { Link } from 'react-router-dom'

const DriverdashboardSidebar = () => {
  return (
    <>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>Home</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Payments</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Vehicles</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Owners</Link>
    </button>
    </>
  )
}

export default DriverdashboardSidebar