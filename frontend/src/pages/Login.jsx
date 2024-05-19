import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/state';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      // Check if the user is the special admin
      if (email === 'admin@gmail.com' && password === 'admin1234') {
        // Special admin login
        const adminUser = {
          email: 'admin@gmail.com',
          userType: 'admin' // Add userType 'admin' for the special admin
        };
        const token = 'your-special-admin-token'; // Generate a special admin token
        localStorage.setItem('user', JSON.stringify(adminUser));
        localStorage.setItem('token', token);
        dispatch(setLogin({ user: adminUser, token }));
        navigate('/hrdashboard');
      } else {
        // Normal user login
        const response = await Axios.post('api/auth/login', { email, password });
        const { status, user, token } = response.data;
        if (status) {
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('token', token);
          dispatch(setLogin({ user, token }));
          switch (user.userType) {
            case 'renter':
              navigate('/homerenter');
              break;
            case 'owner':
              navigate('/ownerprofile');
              break;
            case 'driver':
              navigate('/driverprofile');
              break;
            case 'employee':
              navigate('/hrdashboard');
              break;
            case 'vehiclemanager':
              navigate('/VehicleManager');
              break;
            default:
              setError('Invalid user type');
              break;
          }
        } else {
          setError('Invalid email or password');
        }
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
      console.error('Login Failed', err.message);
    }
  };
return(
  
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
          <div>
            <h1 className="text-3xl font-extrabold text-center mb-8">
              Easy Rent
            </h1>
          </div>
          </div>
          <div className="mt-12 flex flex-col items-center">
           
            <form onSubmit={loginUser} className="w-full flex-1 mt-8">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               
              />
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Sign Up</span>
              </button>
            </form>
            <p className="mt-6 text-base text-gray-600 text-center">
              Don't You have an account?
              <a href="/signup" className="border-b border-gray-500 text-blue-600 font-bold border-dotted">
                Signin
              </a>
            </p>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
