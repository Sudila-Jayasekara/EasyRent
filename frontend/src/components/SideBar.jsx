import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();

    // Check if the current pathname is '/landing'
    if (location.pathname === '/landing' || location.pathname === '/logout' || location.pathname === '/login' || location.pathname === '/signup') {
        return null; // Don't render anything if the pathname is '/landing'
    }

    const user = JSON.parse(localStorage.getItem('user'));
    const userType = user ? user.userType : '';
    let dashboardLink, additionalLinks;

    switch (userType) {
        case 'owner':
            dashboardLink = '/ownerdashboard';
            additionalLinks = (
                <>
                    <li><Link to="/viewvehicle" className="block py-2 px-4 hover:bg-yellow-400">view vehicle</Link></li>
                    <li><Link to="/AddedVehicles" className="block py-2 px-4 hover:bg-yellow-400">Added Vehicles</Link></li>
                    <li><Link to="/VehicleManager" className="block py-2 px-4 hover:bg-yellow-400">VehicleManager</Link></li>
                    <li><Link to="/ApprovedF" className="block py-2 px-4 hover:bg-yellow-400">Approved Forms</Link></li>
                    <li><Link to="/Forms" className="block py-2 px-4 hover:bg-yellow-400">Forms</Link></li>
                </>
            );
            break;
        case 'driver':
            dashboardLink = '/driverprofile';
            additionalLinks = (
                <>
                    <li> <Link to="/displaydate" className="block py-2 px-4 hover:bg-yellow-400">Display dates</Link></li>
                    <li> <Link to="/license" className="block py-2 px-4 hover:bg-yellow-400">license</Link></li>
                    <li> <Link to="/driverdisplay" className="block py-2 px-4 hover:bg-yellow-400">All Drivers</Link></li>
                </>
            );
            break;
        case 'renter':
            dashboardLink = '/renterprofile';
            additionalLinks = (
                <>
                    <li><Link to="/homerenter" className="block py-2 px-4 hover:bg-yellow-400">All Vehicles</Link></li>
                    <li><Link to="/booking/history" className="block py-2 px-4 hover:bg-yellow-400">Bookings</Link></li>
                    <li><Link to="/viewRenter" className="block py-2 px-4 hover:bg-yellow-400">viewRenters</Link></li>
                </>
            );
            break;
        case 'hr':
            dashboardLink = '/hrprofile';
            additionalLinks = (
                <>
                    <li>

                    </li>
                </>
            );
            break;
        default:
            dashboardLink = '/dashboard'; // Default dashboard for unknown roles
            break;
    }

    return (
        <div className="bg-gray-900 text-white w-64 flex flex-col justify-between pt-5">
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">Welcome {user.username}</h2>
                <ul className="space-y-2">
                    <li>
                        <Link to={dashboardLink} className="block py-2 px-4 hover:bg-yellow-400">Profile</Link>
                    </li>
                    {additionalLinks}
                </ul>
            </div>

            <div className="p-4 flex-grow"> {/* Use flex-grow to push the logout button to the bottom */}
                <p></p>
            </div>
            <div className='pl-4'>
                <p>{userType} profile</p>
            </div>
            <div className="p-4">
                <Link to="/logout" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Logout</Link>
            </div>

        </div>
    );

};

export default Sidebar;