import React from 'react';

const Displaydates = () => {
   
                                                                                                
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-9 ml-9 mr-9">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                     Notice
                    <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">Click reject button if you can't attend on the assigned date only .</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Booking ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Driver ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            No. of dates
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reject</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">

                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reject</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                        </th>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reject</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Displaydates;
