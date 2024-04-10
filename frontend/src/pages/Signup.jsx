import React, { useState } from 'react';import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5556/auth/signup', {
        username,
        email,
        confirmPassword,
        password,
        phoneno,
        address,
      });
      if (response.data.status) {
        navigate('/login');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred while registering. Please try again.');
      }
    }
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
                    <h1 style={{ marginBottom: '5px' }} className="font-extrabold text-4xl text-center">
                      Login
                    </h1>
                    <p className="text-center">Text should be in here</p>
                  
                    <div className="justify-center flex flex-col py-6 sm-py-12">
                    {error && <span className="text-red-500">{error}</span>}
                      <label className="text-black font-extrabold" htmlFor="Username">
                        Username
                      </label>
                      <input
                        name="Username"
                        style={{ marginBottom: '10px' }}
                        placeholder="Username"
                        type="text"
                        className="pr-40 pl-2 py-1 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      {/* Render error message */}
                      
                      <label className="text-black font-extrabold" htmlFor="Username">
                        Email
                      </label>{' '}
                      <input
                        name="email"
                        style={{ marginBottom: '10px' }}
                        placeholder="Email"
                        type="email"
                        className="px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="text-black font-extrabold" htmlFor="Username">
                        Password
                      </label>{' '}
                      <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="text-black font-extrabold" htmlFor="Username">
                        Confirm Password
                      </label>{' '}
                      <input
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        className="px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label className="text-black font-extrabold" htmlFor="Username">
                        Phone Number
                      </label>{' '}
                      <input
                        name="phoneno"
                        placeholder="Phone Number"
                        type="tel"
                        className="px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                        onChange={(e) => setPhoneno(e.target.value)}
                      />
                      <label className="text-black font-extrabold" htmlFor="Username">
                        Address
                      </label>{' '}
                      <input
                        name="address"
                        placeholder="Address"
                        type="text"
                        className="px-2 py-2 outline-none border-2 border-gray-300 rounded-lg transition duration-200 ease-in-out hover:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-300 focus:ring"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <div style={{ marginTop: '10px' }}>
                        <label>
                          <input style={{ marginBottom: '5px' }} type="checkbox" className="checkbox" defaultChecked />
                          <span className="select-none">Remember me</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p className="text-center">
                      <button
                        type="submit"
                        className="transition rounded-lg duration-200 ease-in-out px-4 py-2 bg-indigo-500 text-white focus:ring-indigo-300 focus:ring hover:bg-indigo-600 select-none outline-none"
                      >
                        Login
                      </button>
                    </p>
                    <p style={{ marginTop: '5px' }} className="text-center font-normal">
                      No account?{' '}
                      <Link to="/login" className="text-indigo-500 hover:text-indigo-800">
                        Create one!
                      </Link>
                    </p>
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

export default Signup;
