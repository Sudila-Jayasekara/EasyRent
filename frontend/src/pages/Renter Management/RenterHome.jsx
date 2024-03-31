import React, { useEffect } from 'react';
import carpng1 from '../Renter Management/carpng2.png';
import dushan from '../Renter Management/dushan.png';
import { Link } from 'react-router-dom';

const RenterHome = () => {
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
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      buttonsLike.forEach(item => {
        item.removeEventListener('click');
      });
    };
  }, []);

  return (
    <div >
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
        {/* Logo text or image */}
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
        {/* END Logo text or image */}

        {/* Search field */}
        <form className="mb-4 w-full md:mb-0 md:w-1/4">
          <label className="hidden" htmlFor="search-form">Search</label>
          <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
          <button className="hidden">Submit</button>
        </form>
        {/* END Search field */}

        {/* Global navigation */}
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
    <div className="container bg-slate-600">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="card_ui bg-white rounded-lg p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2">
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
                        <button className="button_like">
                            <i className="far fa-heart text-red-500"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center py-8">
                    <a href="#" className="car_img_content_link">
                        <figure className="car_img_content">
                            <img src="https://raw.githubusercontent.com/emmywebgiart/card_ui_vehicle_rent/master/img/ford_focus.png" alt="Ford Focus" className="w-4/5 md:w-full transition duration-300 ease-in-out transform hover:scale-110" />
                        </figure>
                    </a>
                </div>
                <div>
                    <p className="car_name text-gray-600">FORD</p>
                    <div className="flex justify-between items-center">
                        <a href="#" className="car_model_link">
                            <h2 className="car_model text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate" title="FOCUS">FOCUS</h2>
                        </a>
                        <p className="car_price text-gray-700">$500.00 <span className="car_price_time">/per Week</span></p>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 mt-6 pt-6">
                    <ul className="grid grid-cols-3 gap-2">
                        <li className="flex items-center gap-2">
                            <i className="fas fa-sliders-h text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Manual">Manual</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-tachometer-alt text-gray-600"></i>
                            <span className="text-gray-600 truncate" title="Kilometraje ilimitado">Kilometer Limit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <i className="fas fa-user text-gray-600"></i>
                            <span className="text-gray-600">5</span>
                        </li>
                    </ul>
                </div>
            </article>
            
            {/* More articles with similar structure */}
        </section>
    </div>
</main>

    </div>
  );
};



export default RenterHome