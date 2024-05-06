import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


const viewComplainsBYid=()=> {

    const navigate = useNavigate();
    const { vehicleId } = useParams();
    const [complains,setcomplains]=useState([])
    const[vehicle_id,setvehicleId]= useState(vehicleId); 


    useEffect(() => {
      axios
        .get(`http://localhost:5556/complains`)  
        .then(res => {
          setcomplains(res.data);   
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    
      
  return (
    <div>
      <Header></Header>
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Show Complains</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Vehicle ID :</span>
          <span>{complains.vehicle_id}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Rating(stars) :</span>
          <span>{complains.rating}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Vehicle Description :</span>
          <span>{complains.Vehicle_description}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Driver Description :</span>
          <span>{complains.Driver_description}</span>
        </div>
      </div>
    </div>
    </div>
  )

}
export default viewComplainsBYid
