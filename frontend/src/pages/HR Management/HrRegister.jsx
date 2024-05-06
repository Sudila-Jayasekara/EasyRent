import React from 'react';
import { Link } from 'react-router-dom';

const HrRegister = () => {
	return (
		<>
			<div className='wrapper flex justify-center items-center h-screen'>
				<form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

					<h1 className="block flex justify-center text-gray-700 text-xl font-bold mb-2">Register</h1>
					<div className='mb-4'>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder='Username' required/>
					</div>
					<div className='mb-4'>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder='Email' required/>
					</div>
					<div className="mb-6">
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder='Password' required />
					</div>
					<div className="mb-6">
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder='Confirm Password' required />
					</div>
					<div className="flex justify-center">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
							Register
						</button>
					</div>
					<div className='text-center mt-4'>
						<p className="text-gray-600 text-sm">Already have an account? <Link to={'/Login'} className="text-blue-500 hover:text-blue-800">Login</Link></p>
					</div>
				</form>
			</div>
		</>
	);
};

export default HrRegister;
