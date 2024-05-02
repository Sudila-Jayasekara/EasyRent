import React from 'react'



const VehicleDetails = () => {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4 mb-28 bg-white">
        <div className="p-2 md:p-4  justifyContent: 'center'">
          <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            
            <h2 className="mx-auto pl-6 text-2xl font-bold text-red-700 sm:text-center ml-96">Vehicle Details </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5">
                <img className="object-fill  w-full h-64 p-0 " src="https://m.atcdn.co.uk/ect/media/w600/1f7b79c7f1c54528a05e2fe338b76ae5.jpg"alt="vehicle image" />
                <div className="flex flex-col space-y-5 sm:ml-8">
                  <button type="button" className="py-3.5 px-3 ml-18 text-base font-medium text-indigo-100 focus:outline-none bg-black rounded-lg border border-indigo-200 hover:bg-slate-700 focus:z-10 focus:ring-4 focus:ring-indigo-200  ">
                    Change picture
                  </button>
                  <button type="button" className="py-3.5 px-7 text-base font-medium text-black focus:outline-none bg-blackrounded-lg border border-black rounded hover:bg-slate-700 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                    Delete picture
                  </button>
                </div>
              </div>
             
             
              <div className="mx-auto block max-w-lg rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark ml-52">
                <form className='w-96 '>
                  <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                      <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Brand</label>
                      <input type="text" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                    </div>
                    
                    <div>
                      <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900">Model</label>
                      <input type="text" id="model" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" pattern="" required />
                    </div>
                    
                    <div>
                      <label htmlFor="totalSeatsr" className="block mb-2 text-sm font-medium text-gray-900">Total Seats</label>
                      <input type="number" id="totalSeats" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" pattern="[0][0-9]{3}[0-9]{3}[0-9]{3}" required />
                    </div>
                  </div>
                  <div>
                      <label htmlFor="modelYear" className="block mb-2 text-sm font-medium text-gray-900">Model Year</label>
                      <input type="text" id="modelYear" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" pattern="" required />
                    </div>
                    
                  <div className="mb-6">
                    <label htmlFor="engineCapacity" className="block mb-2 mt-4 text-sm font-medium text-gray-900">Engine Capacity</label>
                    <input type="text" id="engineCapacity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="mileage" className="block mb-2 text-sm font-medium text-gray-900"> Mileage</label>
                    <input type="text" id="mileage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                  </div>
                 
                  
                  <button type="submit" className="text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Book</button>
                  <button type="submit" className="text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Reviews</button>
                  </form>
   
   </div>
 </div>
</div>

          </div>
      </main>
    </div>
    </div>
  );
}

export default VehicleDetails;