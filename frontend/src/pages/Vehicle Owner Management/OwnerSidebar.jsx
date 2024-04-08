import React from 'react'
import {Link} from 'react-router-dom'


const OwnerSidebar = () =>{
    return(
        <>
      
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded my-30'>
        <Link>Home Page</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded my-25'>
        <Link>Booking</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded my-25'>
        <Link >View Vehicle</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded my-25'>
        <Link>Contact Us</Link>
        </button>
           
    </>
        
    )
}
export default OwnerSidebar