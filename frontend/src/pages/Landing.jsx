import React from 'react';
import Land from '../assets/Land.jpeg'

const Landing = () => {
  
   
      return (
        <section className="h-screen bg-cover " style={{backgroundImage: "url('https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
          <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
            <div className="max-w-2xl text-center">
              <h1 className="text-wrap sm:text-5xl capitalize tracking-widest text-blue-700 lg:text-5xl font-semibold">Welcome to EasyRent!</h1>
    
              <p className="mt-6 lg:text-1xl text-blue-600 font-normal">Unlock the Road to Freedom with Our Vehicle Rental Platform!</p>
    
              <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">LOG IN</button>
    
                <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">GET STARTED</button>
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    
    
    
    export default Landing;
    