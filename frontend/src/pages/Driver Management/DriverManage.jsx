import React from 'react'
import DriverDashboard from './DriverDashboard'

const DriverManage = () => {
  return (
    <div>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
        <Link>Check Reserved Dates</Link>
        </button>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
        <Link>License Verification</Link>
        </button>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
        <Link>Ratings and Complaints</Link>
        </button>
    </div>
     
  )
}

export default DriverDashboard