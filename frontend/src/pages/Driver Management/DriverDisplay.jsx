import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const DriverDisplay = () => {
    const [drivers, setDrivers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const response = await axios.get('http://localhost:5556/api/driver');
                setDrivers(response.data);
            } catch (error) {
                console.error('Error fetching drivers:', error);
            }
        };

        fetchDrivers();
    }, []);

    const handleRemoveDriver = async (driverId) => {
        try {
            await axios.delete(`http://localhost:5556/api/driver/${driverId}`);
            setDrivers(drivers.filter(driver => driver._id !== driverId));
        } catch (error) {
            console.error('Error removing driver:', error);
        }
    };

    const filteredDrivers = drivers.filter(driver =>
        driver.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto ">
            
            <div>
            <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Search
                </label>
                <div className="relative">
                    
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search drivers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => setSearchTerm('')}
                    >
                        Search
                    </button>
                </div>
            </form>

            </div>

            <div className='mt-9'>
            <table className="w-full border-collapse table-fixed">
                {/* Table headers */}
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Driver Name</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">NIC</th>
                        <th className="px-4 py-2">Phone Number</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                {/* Table body */}
                <tbody>
                    {filteredDrivers.map(driver => (
                        <tr key={driver._id} className="border-b">
                            <td className="px-4 py-2">{driver.username}</td>
                            <td className="px-4 py-2">{driver.address}</td>
                            <td className="px-4 py-2">{driver.nic}</td>
                            <td className="px-4 py-2">{driver.phoneNumber}</td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => handleRemoveDriver(driver._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
            
            <Link to="/signup">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Add Driver
                </button>
            </Link>
        </div>
    );
};

export default DriverDisplay;
