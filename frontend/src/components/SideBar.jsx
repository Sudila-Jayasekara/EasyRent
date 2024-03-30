import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import TestButtons from './TestButtons';
import PaymentSidebar from '../pages/Booking And Payment Management/PaymentSidebar';
import BookingSidebar from '../pages/Booking And Payment Management/BookingSidebar';
import VehicleSidebar from '../pages/Vehicle Management/VehicleSidebar';


const SideBar = ({children}) => {
  const location = useLocation();

  return (
    <div className='flex'>
        <div className='w-1/6 min-h-10 flex flex-col rounded-lg bg-yellow-400 py-5 px-5 mx-4 my-4 space-y-4 text-center '>
            {location.pathname === '/' && (
              <TestButtons/>
            )}
            {(location.pathname === '/booking') && (
                <BookingSidebar/>
            )}
            {(location.pathname=== '/payment') && (
                <PaymentSidebar/>
            )}
             {(location.pathname=== '/vehicleManager') && (
                <VehicleSidebar/>
            )}
           
        </div>
        <div className='flex-grow mr-4 my-4'>
          <div className='w-full py-2 px-4 bg-yellow-400 rounded-lg mb-4'>
            <span className='text-xl text-white font-bold'>Breadcumb</span>
          </div>
          <div>
              {children}
          </div>
        </div>
    </div>
  )
}

export default SideBar
