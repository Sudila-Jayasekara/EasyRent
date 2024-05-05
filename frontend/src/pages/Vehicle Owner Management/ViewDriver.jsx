import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DriverDisplay = () => {
    const [drivers, setDrivers] = useState([]);

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

    return (
        <div className="container mx-auto">
            <table className="w-full border-collapse table-fixed">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Driver Name</th>
                        <th className="px-4 py-2">Adsress</th>
                        <th className="px-4 py-2">NIC</th>
                        <th className="px-4 py-2">Phone Number</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map(driver => (
                        <tr key={driver._id} className="border-b">
                            <td className="px-4 py-2">{driver.username}</td>
                            <td className="px-4 py-2">{driver.address}</td>
                            <td className="px-4 py-2">{driver.nic}</td>
                            <td className="px-4 py-2">{driver.phoneNumber}</td>
                            <td className="px-4 py-2">
                                <button
                                   
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                >
                                    <Link to='/booking/check'>Assign</Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            

        </div>
    );
};

export default DriverDisplay;
