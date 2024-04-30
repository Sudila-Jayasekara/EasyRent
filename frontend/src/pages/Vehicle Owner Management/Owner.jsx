import React from 'react';
import { Link } from 'react-router-dom';

const Owner = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center gap-4 mt-3">
        <div className="Owner-container">
          <img className="w-80 h-60" src="https://res.cloudinary.com/comparis-cms/image/upload/v1641889300/carfinder/overview-pages/autokaufen/carweb-iStock-1053485392_h0smyf.jpg" alt="car photo" />
          <button className="btn">
            <Link to="/vehicleadd">Vehicle Details</Link>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center max-w-lg">
          <img className="w-80 h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFe8qnXIBFrvVcDo_zCVCrFhu9pZyt9QkTEZTceBSfLg&s" alt="driver photo" />
          <button className="btn">
            <Link to="/driveradd">Driver Details</Link>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center max-w-lg">
          <img className="w-80 h-full" src="https://media.istockphoto.com/id/1286940792/photo/woman-photographs-a-broken-car-on-smartphone-and-holds-insurance-documents-in-her-hands.jpg?s=612x612&w=0&k=20&c=EztFgrcZp44hQ7YO0GJVOxC9YDrz4rDs1IIPFpgTb9U=" alt="payment" />
          <button className="btn">
            <span className="px-1">Payments</span>
          </button>
        </div>
      </div>

      <div className="bg-slate-500 w-full">
        <img className="w-full h-40 mb-40" src="https://www.pngitem.com/pimgs/m/200-2008635_car-footer-png-transparent-png.png" alt="car image" />
      </div>
    </div>
  );
};

export default Owner;
