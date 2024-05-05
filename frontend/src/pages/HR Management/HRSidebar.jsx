import React from 'react'
import { Link } from 'react-router-dom'

const HRSidebar = () => {
  return (
    <>     
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>Dashboard</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Employee</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Payroll</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Leave</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Profile</Link>
    </button>
</>
  )
}

export default HRSidebar