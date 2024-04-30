import React from'react'
import {Link} from 'react-router-dom'


const Owner = () =>{
  
    return (
      
      <div>
       <div>
  <nav className="flex flex-col bg-black w-60 h-28 px-4 tex-gray-900 border border-purple-900">
    <div className="flex flex-wrap mt-8">
      <div className="w-1/2">
        <img src="https://watermark.lovepik.com/photo/20211202/large/lovepik-private-car-driver-picture_501434302.jpg " className="mx-auto w-20 h-20 rounded-full" alt="Profile" />
      </div>
      <div className="w-1/2 mt-5">
        
        <button className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
      <Link to={'/ownerProfile'}>Profile</Link>
        </button>
      </div>
    </div>
    <div className="mt-10 mb-4">
      <ul className="ml-4">
       
          <a href="#">
            <button className="ml-2 bg-black text-white rounded px-12 mt-10  hover:bg-yellow-300">Home Page</button>
          </a>
        
        
          <a href="#">
          <button className="ml-2 bg-black text-white rounded px-11 mt-10   hover:bg-yellow-300">
            <Link to={'/datavehicle'}>View Vehicle</Link></button>
          </a>

          <a href="#">
          <button className="ml-2 bg-black text-white rounded px-14 mt-10   hover:bg-yellow-300">Booking</button>
          </a>
        
          <a href="#">
          <button className="ml-2 bg-black text-white rounded px-12 mt-10  hover:bg-yellow-300 ">Contact us</button>
          </a>
        {/* Repeat the structure for other list items */}
      </ul>
    </div>
  </nav>
</div>

      <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-3 ml-72 mb-40">
  


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
        <img className='w-full h-40 mb-40' src="https://www.pngitem.com/pimgs/m/200-2008635_car-footer-png-transparent-png.png" alt="car image"/>
      </div>

      </div>
    
    )
   
};
export default Owner