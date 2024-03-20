import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-center space-x-2'>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Renter</Link>
        </span>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Vehicle</Link>
        </span>
       <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Booking</Link>
        </span>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Driver</Link>
        </span>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Owner</Link>
        </span>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Payment</Link>
        </span>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>HR</Link>
        </span>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Maintenance</Link>
        </span>
        <span className='bg-gray-200 text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
          <Link>Reviews</Link>
        </span>
    </div>
  )
}

export default Home