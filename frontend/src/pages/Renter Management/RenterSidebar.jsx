import React from 'react'
import { Link } from 'react-router-dom'

const RenterSidebar = () => {
  return (
    <>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>Account Details</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>Bookings</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>Watch List</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>History</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>Contact Us</Link>
    </button>
   
  <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
    log Out
    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>

    </>
  )
}

export default RenterSidebar