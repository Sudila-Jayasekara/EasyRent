import React from'react'
import {Link} from 'react-router-dom'


const Owner = () =>{
  
    return (
      <div>
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 ">
  


        <div className="Owner-container">
          <img className='w-80 h-60 ml-9 ' src="https://res.cloudinary.com/comparis-cms/image/upload/v1641889300/carfinder/overview-pages/autokaufen/carweb-iStock-1053485392_h0smyf.jpg" alt="car photo" />
          <button className="flex items-center justify-center w-80 px-4 py-2 mt-4 ml-9 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          
          <Link to={'/vehicleadd'}>Vehicle Details</Link>
          </button>
          </div>

        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
          <img className='w-80 h-full ml-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFe8qnXIBFrvVcDo_zCVCrFhu9pZyt9QkTEZTceBSfLg&s" alt="driver photo" />
          <button className="flex items-center justify-center w-80 px-4 py-2 mt-4 ml-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          <Link to={'/driveradd'}>Driver Details</Link>
         
          </button>
       </div>

       <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
          <img className='w-80 h-full ml-2' src="https://media.istockphoto.com/id/1286940792/photo/woman-photographs-a-broken-car-on-smartphone-and-holds-insurance-documents-in-her-hands.jpg?s=612x612&w=0&k=20&c=EztFgrcZp44hQ7YO0GJVOxC9YDrz4rDs1IIPFpgTb9U=" alt="payment" />
          <button className="flex items-center justify-center w-80 px-4 py-2 mt-4 ml-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          <span className="px-1">Financial Reports</span>
          </button>
       </div>

    
      </div>
      <div className='bg-slate-500'>
        <img className='w-full h-40 mt-20' src="https://www.pngitem.com/pimgs/m/200-2008635_car-footer-png-transparent-png.png" alt="car image"/>
      </div>

      </div>
    
    )
   
};
export default Owner