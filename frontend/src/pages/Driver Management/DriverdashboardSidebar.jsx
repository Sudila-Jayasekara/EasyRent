import React from 'react'
import { Link } from 'react-router-dom'

const DriverdashboardSidebar = () => {
  return (
    <>
    <div>
     <div className="flex flex-col items-center space-y-5">
                <Link to={'/driverprofile'}>
                <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=htmlFormat&fit=crop&w=500&q=60" alt="Bordered avatar" />
                </Link>
                </div>
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
    <Link to={'/managedriver'}>Owners</Link>
    </button>
    </div>
    </>
  )
}

export default DriverdashboardSidebar