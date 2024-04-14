import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // Retrieve user details from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user ? user.username : ''; // Extract user name

    return (
        <div className='bg-yellow-400 py-4 px-4 flex justify-between items-center'>
            <div className='w-1/4'>
                <span className='text-3xl text-white font-bold tracking-tight'>
                    <Link to="/">EasyRent</Link>
                </span>
            </div>
            <div className='w-2/4 text-center'>
                {/* Display user name if available */}
                {userName ? `Hello, ${userName}` : 'Hello, Guest'}
            </div>
            <div className='w-1/4 space-x-2 text-right'>
                <span className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
                    <Link to={'/login'}>Log in</Link>
                </span>
                {/* Uncomment to enable sign-up link */}
                {/* <span className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
                    <Link to='/signup'>Sign Up</Link>
                </span> */}
            </div>
        </div>
    );
};

export default Header;
