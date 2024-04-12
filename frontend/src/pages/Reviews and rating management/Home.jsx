import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { Form, Link } from 'react-router-dom' 



const home =()=> {

    const[complains,setComplains]=useState([]);
    

useEffect(()=>{
  
  axios
  .get('http://localhost:5556/complains')
  .then((response.data.data));
  
})
.catch((error)=>{
  console.log(error);
  
})



  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>ComplainList</h1>
        <Link to='/complains/create'></Link>
      </div>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>Vehicle ID</th>
          <th className='border border-slate-600 rounded-md'>vehicle description</th>
          <th className='border border-slate-600 rounded-md'>Driver description</th>
        </tr>
      </thead>
      <tbody>
        {complains.map((complaint,index)=>{
          <tr key={complaint._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>{index+1}</td>
            <td className='border border-slate-700 rounded-md text-center'>{complaint.vehicle_id}</td>
            <td className='border border-slate-700 rounded-md text-center'>{complaint.Vehicle_description}</td>
            <td className='border border-slate-700 rounded-md text-center'>{complaint.Driver_description}</td>

          <div className='flex justify-center gap-x-4'>
            <Link to={`/complains/details/${complaint._id}`}>
            <BsInfoCircle className='text-2xl text-green-800'></BsInfoCircle>

            </Link>
            <Link to={`/complains/edit/${complaint._id}`}>
            <AiOutLineEdit className='text-2xl text-yellow-600'></AiOutLineEdit>
            </Link>

        
            <Link to={`/complains/delete/${complaint._id}`}>
            <AiOutLineEdit className='text-2xl text-yellow-600'></AiOutLineEdit>
            </Link>

            
            
          </div>

            
          </tr>
         

        })}
      </tbody>
    </div>
  )
  }

export default home;
