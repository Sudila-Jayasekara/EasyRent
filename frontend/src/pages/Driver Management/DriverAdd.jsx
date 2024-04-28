import React from'react'
import {Link} from 'react-router-dom'



const DriverAdd = () =>{
    
return(
    <div>
    <div className="py-6 bg-amber-300">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
      <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage: "url('https://st3.depositphotos.com/1177973/13591/i/450/depositphotos_135912482-stock-photo-chauffeur-driving-a-car.jpg')"}}></div>
      <div className="w-full p-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-black text-center">EasyRent</h2>
      
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <a href="#" className="text-xs text-center text-red-600 font-bold uppercase  mt-4 mb-5">Welcome</a>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contact No</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">NIC</label>
            
          </div>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-8">
          <button className="bg-black text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Submit</button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <Link to={'/owner'}>
          <a href="#" className="text-xs text-black uppercase">Back</a>
          </Link>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
      </div>
    </div>
  </div>
  </div>
  
)
 
    
};
export default DriverAdd