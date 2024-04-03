import React from 'react'

const DriverDashboard = () => {
  return (
    <div>
      <div>
        <button className='mx-0 bg-black text-white h-16 w-60'  > Check Reserved Dates</button>
      </div>
      <div>
        <button className='mx-40 bg-black text-white h-16 w-60 my-10'  > License Verification</button>
      </div>
      <div>
        <button className='mx-0 bg-black text-white h-16 w-60'  > Ratings and complaints</button>
      </div>
    </div>
  )
}

export default DriverDashboard