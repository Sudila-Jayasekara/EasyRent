/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'

const ResetPassword = () => {

  const [password, setPassword] = useState('');

 
  const navigate=useNavigate()

  const registerUser = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:5556/auth/resetpassword',{
      password, 
     
    }).then(response=>{
      if(response.data.status){
        navigate('/login')
      }

    }).catch(err=>{
      console.log(err)
    });
  };

  return (
    <div>
      <form onSubmit={registerUser}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-8">
        <div className="relative py-3 sm:max-w-fit sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-indigo-500 from-indigo-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-xl mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 style={{marginBottom: "5px"}} className="font-extrabold text-4xl text-center">Reset Password</h1>
                  <p className="text-center">Text should be in here</p>
                  
                  <div className="justify-center flex flex-col py-6 sm-py-12">
                  <label className='text-black font-extrabold' htmlFor='Username'>Password</label>  <input name="password" placeholder="Password" type="password" className="px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring" onChange={(e)=>setPassword(e.target.value)} />
                  <div style={{marginTop: "10px"}}>
                      <label>
                        <input style={{marginBottom: "5px"}} type="checkbox" className="checkbox" defaultChecked />
                        <span className="select-none">Remember me</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p className="text-center"> 
                    <button type="submit" className="transition rounded-lg duration-200 ease-in-out px-4 py-2 bg-indigo-500 text-white focus:ring-indigo-300 focus:ring hover:bg-indigo-600 select-none outline-none">Login</button>
                  </p>
                  <p style={{marginTop: "5px"}} className="text-center font-normal">No account? <Link to='/login' className="text-indigo-500 hover:text-indigo-800">Create one!</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
};

export default ResetPassword;
