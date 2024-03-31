import React from 'react'

const Landing = () => {
  return (
    <div className='bg-white  duration-300'>
        <div className="container flex">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                <div className=' order-2 sm:order-2'>
                    <img src={carpng2} alt="Super ar photo"/>
                </div>
                <div className='order-2 sm:order-1 space-y-5 sm:pr:32'>
                    <p className='text-2xl font-serif'>Welcome to the </p>
                    <h1 className='text-5xl lg:text-7xl font-semibold font-serif'> Easy Rent</h1>
                    <p>The best vehicle rentalManagement in srilanka since 2024</p>
                    <button className='bg-black text-white py-2 px-6 rounded-md hover:bg-gray-600 duration-300'>Get Started</button>

                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Landing