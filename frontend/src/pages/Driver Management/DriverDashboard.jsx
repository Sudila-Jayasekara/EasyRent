import React from 'react'
import thumbnail from '../Driver Management/thumbnail.jpeg'

const DriverDashboard = () => {
  return (
    <div>
      <div>
      <div>
        <button className='mx-0 bg-black text-white h-16 w-60'  > Check Reserved Dates</button>
      </div>
      <div>
        <button className='mx-40 bg-black text-white h-16 w-60 my-10'  > License Verification</button>
        <Link to={'/license'}></Link>
      </div>
      <div>
        <button className='mx-0 bg-black text-white h-16 w-60'  > Ratings and complaints</button>
      </div>
    </div>
    <div>
      <img className="object-cover w-60 h-40 p-1 mx-60 ring-2 ring-indigo-300 dark:ring-indigo-500" src={thumbnail}/>
    </div>
    </div>
  )
}

export default DriverDashboard