import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    address: '',
    nic: '',
    email: ''
  });

  const user = JSON.parse(localStorage.getItem('user'));
  const id = user ? user._id : '';
  const userName = user ? user.username : '';
  const phoneNumber = user ? user.phoneNumber : '';
  const address = user ? user.address : '';
  const nic = user ? user.nic : '';
  const email = user ? user.email : '';

  useEffect(() => {
    setFormData({
      username: userName,
      phoneNumber: phoneNumber,
      address: address,
      nic: nic,
      email: email
    });
  }, [userName, phoneNumber, address, nic, email]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5556/api/owner/${id}`)
      .then(() => {
        localStorage.removeItem('user');
        navigate('/logout');
      })
      .catch(error => {
        console.error('Error deleting the owner:', error);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:5556/api/owner/${id}`, formData)
      .then(response => {
        console.log('Updated successfully:', response);
        localStorage.setItem('user', JSON.stringify(response.data));
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error updating the owner:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fileRef = useRef(null);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
          <div className="p-2 md:p-4  justifyContent: 'center'">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="mx-auto pl-6 text-2xl font-bold sm:text-xl ml-10">Public Profile</h2>
              <h1 className="mx-auto pl-6 text-2xl font-bold text-blue-900 sm:text-xl ml-10">Vehicle Owner</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5">
                  <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500" onClick={() => fileRef.current.click()} src="https://watermark.lovepik.com/photo/20211202/large/lovepik-private-car-driver-picture_501434302.jpg" alt="Bordered avatar" />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                      Change picture
                    </button>
                    <button type="button" className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                      Delete picture
                    </button>
                  </div>
                </div>
                <div className="mx-auto block max-w-lg rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
                  <form className='w-96' onSubmit={handleUpdate}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                      <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" value={formData.username} onChange={handleChange} required />
                      </div>
                      <div>
                        <label htmlFor="nic" className="block mb-2 text-sm font-medium text-gray-900">NIC</label>
                        <input type="text" id="nic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" value={formData.nic} onChange={handleChange} required />
                      </div>
                      <div>
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" pattern="[0-9]{10}" value={formData.phoneNumber} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900"> E-mail</label>
                      <input type="email" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the email here" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900"> Address</label>
                      <input type="text" id="adress" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the address here" value={formData.address} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Update Details</button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <h1 className='underline border-l-black text-xl font-bold py-2 text-red-700'>Delete Account</h1>
              <div className="text-center p-5 flex-auto justify-center bg-red-300 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-700 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl font-bold py-4">Are you sure?</h2>
                <p className="text-sm text-blue-800 px-8">Do you really want to delete your account? </p>
                <div className="p-3 mt-2 text-center space-x-4 md:block">
                  <button className="mb-2 md:mb-0 bg-red-500 border border-red-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600" onClick={() => handleDelete(id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OwnerProfile;
