import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

const Header = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user ? user.username : '';
    const userrole = user ? user.userType : '';

    const isLandingPage = location.pathname === '/';
    if (location.pathname === '/landing' || location.pathname === '/') {
        return null; // Don't render anything if the pathname is '/landing'
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const renderAuthLinks = () => {
        if (!user) {
            return (
                <Fragment>
                    <span className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
                        <Link to={'/login'}>Log in</Link>
                    </span>
                    <span className='bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded'>
                        <Link to='/signup'>Sign Up</Link>
                    </span>
                </Fragment>
            );
        }
    };

    const renderUserMenu = () => {
        if (user) {
            return (
                <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
    className="h-8 w-8 rounded-full"
    src={`http://localhost:5556/${user.profilePicture.replace("public", "")}`}
    alt="profile picture"
/>

                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to={
                                            userrole === 'renter' ? '/renterprofile' :
                                                userrole === 'driver' ? '/driverprofile' :
                                                    userrole === 'owner' ? '/owner-profile' :
                                                        '/'
                                        }
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Your Profile
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="/favlist"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Watch List
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="/logout"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Sign out
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            );
        }
    };
    const renderNavigationLinks = () => {
        return (
            <Fragment>
                    <Link to={'/contact'} className='text-white font-bold mr-5'>Contact Us</Link>
            </Fragment>
        );
    };
    
    if (isLandingPage) {
        return null; // Don't render the header on the landing page
    }

    return (
        <div className={`bg-yellow-400 py-4 px-4 ${isLandingPage ? '' : 'mb-10'} flex justify-between items-center`}>
            <div className='w-1/3'>
                <span className='text-3xl text-white font-bold tracking-tight'>
                    <Link to="/homerenter">EasyRent</Link>
                </span>
            </div>

            <div className='w-2/3 space-x-2 text-right'>
                {renderNavigationLinks()}
                {renderAuthLinks()}
            </div>

            {renderUserMenu()}
        </div>
    );
};

export default Header;
