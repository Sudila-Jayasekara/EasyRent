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
