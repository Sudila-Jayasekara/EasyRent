import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import PaymentSidebar from '../pages/Booking And Payment Management/PaymentSidebar';
// import BookingSidebar from '../pages/Booking And Payment Management/BookingSidebar';
const SideBar = ({ children }) => {
  const location = useLocation();

  return (
    <div className='flex'>
      <div className='w-3/4 min-h-80 flex flex-col rounded-lg py-4 px-4 mx-4 my-4 space-y-4'>
        {location.pathname.startsWith('/booking') && (
          <BookingSidebar />
        )}
        {location.pathname.startsWith('/payment') && (
          <PaymentSidebar /> // Assuming PaymentSidebar also needs button styles
        )}
      </div>
    </div>
  )
}

export default SideBar