import React from 'react'
import {Link} from 'react-router-dom'


const OwnerSidebar = () =>{
    return(
       <>
       <div className="flex flex-col items-center space-y-5">
          <Link to={'/ownerprofile'}>
            <img className="object-cover w-40 h-40 mb-36 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500" src= "https://i.pinimg.com/564x/d1/8c/29/d18c29bc0636c509280a896b3dd2bccc.jpg" alt="profile pic" />
          </Link>
        </div>
     
        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2   px-4 rounded my-30'>
        <Link>Home Page</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 mb-5 px-4 rounded my-25'>
        <Link>Booking</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 mb-5 px-4 rounded my-25'>
        <Link >View Vehicle</Link>
        </button>

        <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 mb-5 px-4 rounded my-25'>
        <Link>Contact Us</Link>
        </button>
      
        </>
        
    )
}
export default OwnerSidebar