import React from 'react';

const Reply = () => {
	return (
		<>
			<div className='wrapper flex justify-center items-center h-screen'>
				<form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

					<h1 className="block flex justify-center text-gray-700 text-xl font-bold mb-2">Reply Form</h1>
                    
					<div className='mb-4'>
                        <label>Complain Id</label>
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" required/>
					</div>
					<div className='mb-4'>
                        <label>Review for vehicle</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"  required/>
                          </div>
                          <div className='mb-4'>
                        <label>Review for Driver</label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"  required/>
                          </div>
                          <div>
                          <label>Reply</label>
                
						<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" required />
					</div>
					
					<div className="flex justify-center">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
							Submit
						</button>
                       
					</div>
					
				</form>
			</div>
		</>
	);
};
export default Reply;