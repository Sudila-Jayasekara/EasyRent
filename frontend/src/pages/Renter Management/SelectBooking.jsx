import React, { useState } from 'react';

// Import car images
import car1 from '../Renter Management/carpng.png';
import car2 from '../Renter Management/carpng2.png';
import car3 from '../Renter Management/carpng.png';
import car4 from '../Renter Management/carpng2.png';
import car5 from '../Renter Management/carpng.png';

const carImages = [car1, car2, car3, car4, car5];

const SelectBooking = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Change activeSlide to start from 0
  const totalSlides = carImages.length; // Total number of slides

  const goToSlide = (slide) => {
    setActiveSlide(slide);
  };

  const goToPrevSlide = () => {
    setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides); // Ensure the index wraps around
  };

  const goToNextSlide = () => {
    setActiveSlide((activeSlide + 1) % totalSlides); // Ensure the index wraps around
  };

  return (
    <div className="bg-teal-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto relative">
        {/* Car Image */}
        <div className="p-24 font-bold text-5xl h-64 flex items-center bg-teal-500 text-white rounded-lg">
          <img
            src={carImages[activeSlide]}
            alt={`Car ${activeSlide + 1}`}
            className="block"
          />
        </div>

        {/* Prev/Next Arrows */}
        <div className="flex inset-0 flex">
          <div className="flex items-center justify-start w-1/2">
            <button
              className="bg-black text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              onClick={goToPrevSlide}
            >
              &#8592;
            </button>
          </div>
          <div className="flex items-center justify-end w-1/2 bottom--5">
            <button
              className="bg-black text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
              onClick={goToNextSlide}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute w-full flex items-center justify-center px-4 bottom-12">
          {carImages.map((_, index) => (
            <button
              key={index}
              className={`flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg ${
                activeSlide === index ? 'bg-orange-600' : 'bg-teal-300'
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="pricing-table-2 py-20 md:py-12">
  <div className="container mx-auto px-4">

    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-medium text-black mb-4 md:mb-6">Pricing Plans</h1>
      <p className="text-gray-500 xl:mx-12">You have main 3 pricing packages..You an customize it with your preference</p>
    </div>

    <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">

      <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
        <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Per Kilometer</h4>
            <p className="text-gray-600">Kilometers</p>
          </div>
          <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
            <div className=""><span className="text-4xl font-semibold">$19</span></div>
          </div>
          <div className="p-6">
            <ul className="leading-loose">
              <li>Upto 100 km</li>

            </ul>
            <div className="mt-6 py-4">
              <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
        <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Professional</h4>
            <p className="text-gray-600">For large scale projects</p>
          </div>
          <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
            <div><span className="text-4xl font-semibold">$29</span> /year</div>
          </div>
          <div className="p-6">
            <ul className="leading-loose">
              <li>Upto 50 uses</li>
              <li>Max 500 items/month</li>
              <li>1000 queries/month</li>
              <li>Full statistics</li>
              <li>Email Support</li>
            </ul>
            <div className="mt-6 py-4">
              <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
        <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
          <div className="p-6 md:py-8">
            <h4 className="font-medium leading-tight text-2xl mb-2">Power User</h4>
            <p className="text-gray-600">For multi large scale projects</p>
          </div>
          <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
            <div className=""><span className="text-4xl font-semibold">$39</span> /year</div>
          </div>
          <div className="p-6">
            <ul className="leading-loose">
              <li>Unlimited uses</li>
              <li>Unlimited items/month</li>
              <li>Unlimited queries/month</li>
              <li>Full statistics</li>
              <li>Email &amp; Phone Support</li>
            </ul>
            <div className="mt-6 py-4">
              <button className="bg-indigo-600 text-xl text-white py-2 px-6 rounded hover:bg-indigo-700 transition-colors duration-300">Get Started</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>

    </div>
  );
};

export default SelectBooking;

