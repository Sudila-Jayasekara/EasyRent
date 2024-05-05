import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print'
import {useLocation} from 'react-router-dom'

const RiskNote = () => {
   const location = useLocation();
   const renterdetail=location.state.renterDetail;


    const printtoPdf = useRef();

    const handlePrint = useReactToPrint({
      content: () => printtoPdf.current,
      documentTitle: 'Renter Details',
      onAfterPrint: () => alert('Printed Successfully')
    });

  return (
    <div>
         <section className="py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Accident Details
              </h6>
              <button onClick={handlePrint} className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                Download Info
              </button>
            </div>
          </div> <div ref={printtoPdf}>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
           
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Name
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={renterdetail.username} disabled />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email address
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={renterdetail.email} disabled/>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Phone Number
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={renterdetail.phoneNumber} disabled />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      NIC
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={renterdetail.nic} disabled/>
                  </div>
                </div>
              </div>
  
              <hr className="mt-6 border-b-1 border-blueGray-300" />
  
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
               Customer Address
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Address
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={renterdetail.address} disabled/>
                  </div>
                </div>
                
              </div>
  
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <hr className="mt-6 border-b-1 border-blueGray-300" />
  
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
               Where the Accident Taken Place
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Address
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Enter Where the accident happened' />
                  </div>
                </div>
                
              </div>
  
              <hr className="mt-6 border-b-1 border-blueGray-300" />
  
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Accident
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Description
                    </label>
                    <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder='Short Description about the Accident' rows="4"></textarea>
                  </div>
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Accident Photos
                    </label>
                    <input type="file" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                    <label className="block uppercase text-blueGray-600 text-xs mt-2 font-bold mb-2" htmlFor="grid-password">
                      Injuries
                    </label>
                    <input type="text" placeholder='details About Injuries' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  />
                    <label className="block uppercase mt-2 text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                    Legal and Insurance Information
                    </label>
                    <input type="text" placeholder='details about Legal and Insuarance Information' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  
    </div>
  )
}

export default RiskNote