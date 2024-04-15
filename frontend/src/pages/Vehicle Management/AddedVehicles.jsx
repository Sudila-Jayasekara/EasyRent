import React from 'react';
import bmwoffer from '../Vehicle Management/images/bmwoffer.png'
import prius from '../Vehicle Management/images/prius.jpeg'
import Hondavezel from '../Vehicle Management/images/Hondavezel.jpeg'

const AddedVehicles = () => {
    return (
        <div tabIndex="0" className="focus:outline-none">
            <div className="mx-auto container py-1">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {/* Card 1 */}
                    <div tabIndex="0" className="focus:outline-dotted mx-2 w-72 xl:mb-6 mb-14">
                    <div>
                         <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-red-200 py-1">Vehicle ID : 01</p>
                            </div>
                        <div>
                            <img src={prius} tabIndex="0" className="focus:outline-none w-full min-h-0" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-red-300 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-black">Delete</p>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Update</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">Prius 3rd Gen</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">Posted on 11 April 11.24am,Wennappuwa,Puttalam</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-double text-wrap text-gray-600 mt-1">Rs 6990.00</p>
                                <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-6">1 month 6999rs day 3300km </p>
                                 <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-gray-200 py-1">Auto</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-gray-200 py-1">Petrol</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Puttalam,Rentals</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 1 Ends */}
                    {/* Card 2 */}
                    <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-14">
                    <div>
                         <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-red-200 py-1">Vehicle ID : 02</p>
                            </div>
                        <div>
                            <img src={Hondavezel} tabIndex="0" className="focus:outline-none w-full h-52" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-red-300 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-black">Delete</p>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Update</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">Vezel</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">Posted on 12th April 3.14pm,Ratmalana,Colombo</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-double text-wrap text-gray-600 mt-1">Rs 10,000</p>
                                <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-3">Honda Vezel RS for rent</p>
                                <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-0">Long term Preferred</p>
                                <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-0 ">Monthly 250,000/-</p>
                                <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-0">Minimun period 10 days</p>

                                 <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-gray-200 py-1">Auto</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-gray-200 py-1">Petrol</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Colombo,Rentals</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 Ends */}
                    {/* Card 3 */}
                    <div tabIndex="0" className="focus:outline-none max-w-72 w-72 xl:mb-0 mb-0">
                    <div>
                         <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-red-200 py-1">Vehicle ID : 03</p>
                            </div>
                        <div>
                            <img src={bmwoffer} tabIndex="0" className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-red-300 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-black">Delete</p>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Update</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">Vezel</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-2-">Rs 10,000</p>
                                 <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-gray-200 py-1">Auto</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-gray-200 py-1">Petrol</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-10">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Colombo,Rentals</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 Ends */}
                    {/* Card 4 */}
                    <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                    <div>
                         <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-5 bg-red-200 py-1">Vehicle ID : 04</p>
                            </div>
                        <div>
                            <img src={bmwoffer} tabIndex="0" className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-red-300 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-black">Delete</p>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Update</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">Vezel</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-double text-xs text-gray-600 mt-3">Rs 10,000</p>
                                 <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Auto</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Petrol</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Colombo,Rentals</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 Ends */}
                </div>
            </div>
        </div>
    );
}

export default AddedVehicles;
