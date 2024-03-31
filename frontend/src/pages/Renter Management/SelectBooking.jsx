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
    <div className="bg-teal-100 h-screen flex flex-col justify-center items-center">
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
        <div className="absolute inset-0 flex">
          <div className="flex items-center justify-start w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              onClick={goToPrevSlide}
            >
              &#8592;
            </button>
          </div>
          <div className="flex items-center justify-end w-1/2">
            <button
              className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
              onClick={goToNextSlide}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute w-full flex items-center justify-center px-4">
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
    </div>
  );
};

export default SelectBooking;
