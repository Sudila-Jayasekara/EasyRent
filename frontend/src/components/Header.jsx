import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-yellow-400 py-4 px-4 flex justify-between items-center'>
        <div>
            <span className='text-3xl text-white font-bold tracking-tight'>
                <Link to="/">EasyRent</Link>
            </span>
        </div>
        <div className='space-x-2 text-center'>
            <span className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
                <Link>Log in</Link>
            </span>
            <span className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
                <Link>Sign Up</Link>
            </span>
        </div>
    </div>
  )
}

export default Header
