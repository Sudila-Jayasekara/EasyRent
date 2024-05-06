import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));
    const userType = user ? user.userType : '';

    if (!user) {
        // If user is null, handle accordingly (e.g., redirect to login page)
        // For example:
        // window.location.href = '/login';
        // or display a message
        return <div>User is not logged in</div>;
    }

    // Check if the current pathname is '/landing'
    if (location.pathname === '/' || location.pathname === '/landing' || location.pathname === '/logout' || location.pathname === '/login' || location.pathname === '/signup') {
        return null; // Don't render anything if the pathname is '/landing'
    }

    let dashboardLink, additionalLinks;

    switch (userType) {
        case 'owner':
            dashboardLink = '/ownerdashboard';
            additionalLinks = (
                <>
                    <li><Link to="/viewvehicle" className="block py-2 px-4 hover:bg-yellow-400">View Vehicle</Link></li>
                    <li><Link to="/AddedVehicles" className="block py-2 px-4 hover:bg-yellow-400">Added Vehicles</Link></li>
                    <li><Link to="/VehicleManager" className="block py-2 px-4 hover:bg-yellow-400">Vehicle Manager</Link></li>
                    <li><Link to="/ApprovedF" className="block py-2 px-4 hover:bg-yellow-400">Approved Forms</Link></li>
                    <li><Link to="/Forms" className="block py-2 px-4 hover:bg-yellow-400">Forms</Link></li>
                </>
            );
            break;

        case 'admin':
            dashboardLink = '/empDash';
            additionalLinks = (
                <>
                    <li><Link to="/empDash" className="block py-2 px-4 hover:bg-yellow-400">Dashboard</Link></li>
                    <li><Link to="/EmpRegister" className="block py-2 px-4 hover:bg-yellow-400">Employee Registration</Link></li>
                    <li><Link to="/dashboard" className="block py-2 px-4 hover:bg-yellow-400">Payroll</Link></li>
                    <li><Link to="/empLeave" className="block py-2 px-4 hover:bg-yellow-400">Leave</Link></li>
                    <li><Link to="/Details" className="block py-2 px-4 hover:bg-yellow-400">Details</Link></li>
                    <li><Link to="/leaveDetails" className="block py-2 px-4 hover:bg-yellow-400">Leave Details</Link></li>
                    <li><Link to="/salaryDetails" className="block py-2 px-4 hover:bg-yellow-400">Salary Details</Link></li>
                </>
            );
            break;

        // other cases...
        default:
            dashboardLink = '/dashboard'; // Default dashboard for unknown roles
            break;
    }

    return (
        <div className="bg-gray-900 text-white w-64 flex flex-col justify-between pt-5 h-screen overflow-y-auto">
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

export default SideBar;
