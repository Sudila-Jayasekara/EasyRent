import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const DeleteComplains=()=>  {

  const navigate = useNavigate();
  const { id } = useParams();

const handleDeleteComplains=()=>{
  axios
  .delete(`http://localhost:5555/complains/${id}`)  
  .then(()=>{
    navigate('/');
})
  .catch((err)=>{
    console.log(err);
        })
}



  return (
    <div className='p-4'>
      
      <h1 className='text-3xl my-4'>Delete Complain</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>
      <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteComplains}
        >
          yes, delete it
        </button>
        </div>

    </div>
  )
}

export default DeleteComplains
