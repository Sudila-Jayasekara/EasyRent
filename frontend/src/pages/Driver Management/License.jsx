import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import license from '../Driver Management/driving.jpg';

const License = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="text-center text-4xl"> 
      License Verification
    </div>    
    <div className="grid grid-cols-2 gap-8  ml-40 justify-center items-center h-auto">
      {/* Left Column */}
      <div className="col-span-1 ">
        <div>
        <div className="text-2xl">
          <h2>Select your license type:</h2>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-none">
              {selectedItem || "Options"}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 ml-8 z-10 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => handleItemClick("Heavy Weighted License")}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block px-4 py-2 text-sm`}
                    >
                      Heavy Weighted License
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      onClick={() => handleItemClick("Light Weighted License")}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block px-4 py-2 text-sm`}
                    >
                      Light Weighted License
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      onClick={() => handleItemClick("Both")}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block w-full px-4 py-2 text-left text-sm`}
                    >
                      Both
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {selectedItem && <div>Selected item: {selectedItem}</div>}
        </div>
      </div>
      {/* Right Column */}
      <div className="col-span-1">
        <div>
          <img className="object-cover w-80 ml-94 h-75 p-2 mt-20 ring-2 ring-indigo-300 dark:ring-indigo-500" src={license} alt="License" />
        </div>
        
      </div>
      <div className="content-center ml-96">
    <h1>Upload your document here.</h1>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
    <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
  </div>
    </div>
    
    </div>
    
  );
};

export default License;
