import React from 'react'
import { Link } from 'react-router-dom' 


const HrNew = () => {
	return ( 
	
	  <div className='wrapper flex justify-center items-center h-screen'>
		
		<form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
		
		  <h1 className="block flex justify-center text-gray-700 text-xl font-bold mb-2">Log In</h1>
		  <div className='mb-4'>
			<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Username' required/>
		  </div>
		  <div className="mb-6">
			<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder='Password' required />
		  </div> 
		  <div className="flex items-center justify-between mb-6">
			<label className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800">
			  <input className='mr-2 leading-tight' type='checkbox'/>Remember me
			</label>
			<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href='#'>Forgot Password?</a>
		  </div>
		  <div className="flex justify-center">
		  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
			<Link to={'/Register'} className="text-white no-underline">Login</Link>
		  </button></div>
		  <div className='text-center mt-4'>
			<p className="text-gray-600 text-sm">Don't have an account? <a className="text-blue-500 hover:text-blue-800" href='#'>Register</a></p>
		  </div>
		</form>
	  </div>
	);
  };
  
  export default HrNew;
