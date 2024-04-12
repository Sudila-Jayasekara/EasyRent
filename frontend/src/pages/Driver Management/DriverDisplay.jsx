import React from 'react';

const DriverDisplay = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9 ml-9 mr-9">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Driver ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Driver name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Remove</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           
                        </th>
                        <td className="px-6 py-4">
                           
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           
                        </th>
                        <td className="px-6 py-4">
                           
                        </td>
                        <td className="px-6 py-4">
                           
                        </td>
                        
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="mt-4 ml-96 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Drivers</button>
        </div>
    );
};

export default DriverDisplay;
