import React from 'react'
import { Link } from 'react-router-dom'

const TestButtons = () => {
  return (
    <>
      <Link to={'/renter'} className='sidebarbutton'>
        Renter
      </Link>
      <Link to={'/vehicle'} className='sidebarbutton'>
        Vehicle
      </Link>
      <Link to={'/driver'} className='sidebarbutton'>
        Driver
      </Link>
      <Link to={'/owner'} className='sidebarbutton'>
        Owner
      </Link>
      <Link to={'/booking'} className='sidebarbutton'>
        Booking
      </Link>
      <Link to={'/payment'} className='sidebarbutton'>
        Payment
      </Link>
      <Link to={'/hr'} className='sidebarbutton'>
        HR
      </Link>
      <Link to={'/maintenance'} className='sidebarbutton'>
        Maintenance
      </Link>
      <Link to={'/reviews'} className='sidebarbutton'>
        Reviews
      </Link>
    </>
  )
}

export default TestButtons
