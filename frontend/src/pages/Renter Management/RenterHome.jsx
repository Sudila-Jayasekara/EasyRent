import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RenterHome = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const renterId = user ? user._id : null;
    const [details, setDetails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleLike = async (renterId, vehicleId) => {
        try {
            const response = await axios.patch(`http://localhost:5556/api/renters/${renterId}/favorite/${vehicleId}`);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error liking item:', error);
        }
    };

    useEffect(() => {
        axios.get('http://localhost:5556/api/vehicle/')
            .then(response => {
                console.log('Response data:', response.data);
                setDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching Renters:', error);
            });
    }, []);

    useEffect(() => {
        const buttonsLike = document.querySelectorAll(".button_like");
        buttonsLike.forEach(item => {
            item.addEventListener('click', () => {
                const buttonIcon = item.querySelector('i');
                if (buttonIcon.classList.contains("far")) {
                    buttonIcon.classList.remove("far");
                    buttonIcon.classList.add("fas", "like_icon");
                } else {
                    buttonIcon.classList.add("far");
                    buttonIcon.classList.remove("fas", "like_icon");
                }
                const vehicleId = item.dataset.vehicleId;
                handleLike(renterId, vehicleId);
            });
        });

        return () => {
            buttonsLike.forEach(item => {
                item.removeEventListener('click', () => {
                    const vehicleId = item.dataset.vehicleId;
                    handleLike(renterId, vehicleId);
                });
            });
        };
    }, [renterId]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDetails = details.filter(detail => {
        return detail.brand.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
                <div className="flex items-center justify-between mb-4 md:mb-0">
                    <h1 className="leading-none text-2xl text-grey-darkest">
                        <a className="no-underline text-grey-darkest hover:text-black" href="#">
                            Easy Rent
                        </a>
                    </h1>
                    <a className="text-black hover:text-orange md:hidden" href="#">
                        <i className="fa fa-2x fa-bars"></i>
                    </a>
                </div>
                <form className="mb-4 w-full md:mb-0 md:w-1/4">
                    <label className="hidden" htmlFor="search-form">Search</label>
                    <input
                        className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
                        placeholder="Search by category"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className="hidden">Submit</button>
                </form>
                <nav>
                    <ul className="list-reset  md:flex md:items-center">
                        <li className="md:ml-4">
                            <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                                Products
                            </a>
                        </li>
                        <li className="md:ml-4">
                            <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                                About
                            </a>
                        </li>
                        <li className="md:ml-4">
                            <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
            <main className="main">
                <div className="container bg-white">
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredDetails.map((detail, index) => (
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
                                        <button className="button_like" onClick={() => handleLike(renterId, detail._id)} data-vehicle-id={detail._id}>
                                            Add to wish list <i className="far fa-heart text-red-500"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center py-8">
                                    <Link to={`/booking/create/${detail._id}`} className="car_img_content_link">
                                        <figure className="car_img_content">
                                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                                        </figure>
                                    </Link>
                                </div>
                                <div>
                                    <p className="car_name text-gray-600">{detail.model}</p>
                                    <div className="flex justify-between items-center">
                                        <a href="#" className="car_model_link">
                                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">{detail.brand}</h2>
                                        </a>
                                        <p className="car_price text-gray-700">Rs.{detail.price} <span className="car_price_time">/per Week</span></p>
                                    </div>
                                </div>
                                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                                    <ul className="grid grid-cols-3 gap-2">
                                        <li className="flex items-center gap-2">
                                            <i className="fas fa-sliders-h text-gray-600"></i>
                                            <span className="text-gray-600 truncate" title="Manual">{detail.transmission}</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">{detail.owner}</span>
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
            </main>
        </div>
    );
};

export default RenterHome;
