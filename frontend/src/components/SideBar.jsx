import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-1/6 flex flex-col rounded-lg bg-yellow-400 py-5 px-5 mx-4 my-4 space-y-4 text-center'>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
            <Link>Renter</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link>Vehicle</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link to={'/booking'}>Booking</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link>Driver</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link>Owner</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link>Payment</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link>HR</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link>Maintenance</Link>
            </button>
            <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
            <Link>Reviews</Link>
            </button>
        </div>
        <div className='flex-grow bg-yellow-100 my-4 mr-4'>
            {children}
        </div>
    </div>
    

  )
}

export default SideBar