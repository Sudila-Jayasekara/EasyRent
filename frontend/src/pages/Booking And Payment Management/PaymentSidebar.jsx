import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSidebar = () => {
  return (
    <>                
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded '>
    <Link>Card Details</Link>
    </button>
    <button className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
    <Link>Payment History</Link>
    </button>
    </>
  )
}

export default PaymentSidebar