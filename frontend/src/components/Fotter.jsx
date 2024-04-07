import React from 'react'

const Footer = () => {
  return (
<div className='bg-yellow-400 py-4 px-4 flex justify-between items-center' >
    <div className='w-1/4'>
        <span className='text-lg text-white font-bold tracking-tight'>
            EasyRent
        </span>
    </div>
    <div className='w-1/2 text-center'>
        <span>© EasyRent.com</span>
    </div>
    <div className='w-1/4'>
        {/* You can put additional content here */}
    </div>
</div>

  )
}

export default Footer;
