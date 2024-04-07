// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const TestButtons = () => {
  return (
    <>                
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
        <Link to={'/homerenter'}>Renter</Link>
        </button>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
        <Link>Vehicle</Link>
        </button>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
        <Link to={'/booking'}>Booking</Link>
        </button>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
        <Link to={'driver'}>Driver</Link>
        </button>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
        <Link>Owner</Link>
        </button>
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
        <Link to={'/payment'}>Payment</Link>
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
    </>
  )
}

export default TestButtons