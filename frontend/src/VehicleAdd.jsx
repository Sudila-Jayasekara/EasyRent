import React from'react'
import {Link} from 'react-router-dom'


import { useState } from 'react';


 


const VehicleAdd = () =>{

  
    return (
      <div>
    <div className="py-6 bg-amber-300">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
      <div className="hidden lg:block lg:w-1/2 bg-cover" style={{backgroundImage: "url('https://wallpapercave.com/wp/wp4848993.jpg')"}}></div>
      <div className="w-full p-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-black text-center">EasyRent</h2>
      
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <a href="#" className="text-xs text-center text-red-600 font-bold uppercase  mt-4 mb-5">Welcome</a>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Brand</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Model</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Model Year</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Engine Capacity</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mileage</label>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">Total seats</label>
            
          </div>
          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="Number" />
        </div>
        <div className="mt-4">
        <label htmlFor="cover-photo" className="block text-sm font-bold leading-6 text-gray-700"> Add Image 1</label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
  <div className="text-center mb-1/2">
    <svg className="mx-auto h-6 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd"></path>
    </svg>
    <div className="mt-4 flex text-sm leading-6 text-gray-600">
      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
        <span>Upload a file</span>
        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
      </label>
      <p className="pl-1">or drag and drop</p>
    </div>
    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
  </div>
</div>
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
    
}
export default VehicleAdd