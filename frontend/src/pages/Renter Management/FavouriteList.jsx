import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FavouriteList = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user._id : null;
    const userrole = user ? user.userType : '';
    const [watchList, setWatchList] = useState([]);
    const [vehicleDetails, setVehicleDetails] = useState([]);

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:5556/api/${userrole}/${userId}`)
                .then(response => {
                    console.log('Watchlist:', response.data.wishList);
                    setWatchList(response.data.wishList);
                })
                .catch(error => {
                    console.error('Error fetching watchlist:', error);
                });
        }
    }, [userId, userrole]);

    useEffect(() => {
        const fetchVehicleDetails = async () => {
            const promises = watchList.map(vehicleId => {
                return axios.get(`http://localhost:5556/api/vehicle/${vehicleId}`);
            });

            try {
                const responses = await Promise.all(promises);
                const vehicleDetailsData = responses.map(response => response.data);
                setVehicleDetails(vehicleDetailsData);
            } catch (error) {
                console.error('Error fetching vehicle details:', error);
            }
        };

        fetchVehicleDetails();
    }, [watchList]);

    const handleLike = async (vehicleId) => {
        try {
            const response = await axios.patch(`http://localhost:5556/api/renter/${userId}/${vehicleId}`);
            console.log(response.data.message);
            if (watchList.includes(vehicleId)) {
                // If vehicle is already in watchlist, remove it
                const updatedWatchList = watchList.filter(item => item !== vehicleId);
                setWatchList(updatedWatchList);
            } else {
                // If vehicle is not in watchlist, add it
                const updatedWatchList = [...watchList, vehicleId];
                setWatchList(updatedWatchList);
            }
        } catch (error) {
            console.error('Error toggling vehicle like:', error);
        }
    };

    return (
        <div>
            <h1 className='font-extrabold text-5xl text-gray-800 text-center'>Favourite Vehicles</h1>
            <div className="container">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vehicleDetails.map((detail, index) => (
                        <div key={index} className="card_ui bg-gray-200 m-4 rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <a href="#" className="border-2 border-gray-200 rounded-lg p-1 flex items-center">
                                        <i className="fas fa-star text-yellow-500"></i>
                                        <span className="text-gray-700">4.7</span>
                                        <span className="text-gray-600">(109)</span>
                                    </a>
                                    <div className="bg-green-100 rounded-lg p-1">
                                        <span className="text-green-600">Available</span>
                                    </div>
                                </div>
                                <div>
                                    <button className="button_like" onClick={() => handleLike(detail._id)} data-vehicle-id={detail._id}>
                                        {/* Change heart icon based on whether the vehicle is in watchlist */}
                                        <i className={`far fa-heart ${watchList.includes(detail._id) ? 'text-red-500' : ''}`}></i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center py-8">
                                <Link to={`/selectbooking/${detail._id}`} className="car_img_content_link">
                                <figure className="car_img_content">
                                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                                        </figure>
                                </Link>
                            </div>
                            <div>
                                <p className="car_name text-gray-600">{detail.model}</p>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="car_model_link">
                                        <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title={detail.brand}>{detail.brand}</h2>
                                    </a>
                                    <p className="car_price text-gray-700">Rs.{detail.price} <span className="car_price_time">/per Week</span></p>
                                </div>
                            </div>
                            <div className="border-t-2 border-gray-200 mt-6 pt-6">
                                <ul className="grid grid-cols-3 gap-2">
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-sliders-h text-gray-600"></i>
                                        <span className="text-gray-600 truncate" title={detail.transmission}>{detail.transmission}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-tachometer-alt text-gray-600"></i>
                                        <span className="text-gray-600 truncate" title={detail.owner}>{detail.owner}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-user text-gray-600"></i>
                                        <span className="text-gray-600">{detail.totalSeats}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default FavouriteList;
