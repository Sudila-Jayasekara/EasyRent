import React from 'react'
import { Link } from 'react-router-dom'

const BookingSidebar = () => {
  return (
    <>
    <Link className='sidebarbutton'>Card Details</Link>
    <Link className='sidebarbutton'>Payment History</Link>
    </>
  )
}

export default BookingSidebar