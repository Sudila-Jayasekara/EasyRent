import React from 'react'
import {Link} from 'react-router-dom'


const OwnerSidebar = () =>{
    return(
       <>
       <div className="flex flex-col items-center space-y-5">
          
            <img className="object-cover w-40 h-40 mb-1 p-1 rounded-full ring-2 dark:ring-red-700" src= "https://watermark.lovepik.com/photo/20211202/large/lovepik-private-car-driver-picture_501434302.jpg" alt="profile pic" />
            <button className='bg-red-700 text-white hover:bg-black hover:text-white font-bold py-2 text-xl   px-10 rounded-3xl  '>
        <Link to={'/ownerProfile'}>Profile</Link>
        </button>
        </div>
     

<div className="container">
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2  mt-12 px-14 rounded my-30 '>
        <Link>Home Page</Link>
        </button>

         
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 mt-10  px-16 rounded my-25'>
        <Link>Booking</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 mt-10 px-12 rounded my-25'>
        <Link to={'/viewvehicle'} >View Vehicle</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 mt-10 px-14 rounded my-25'>
        <Link>Contact Us</Link>
        </button>
      </div>
        </>
        
    )
}
export default OwnerSidebar