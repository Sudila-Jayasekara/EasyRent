import React from 'react'
import Header from '../components/Header';
import StarRate from '../components/StarRate';
import RateVehicleForm from '../components/RateVehicleForm';
import DriverRateform from '../components/DriverRateform';
import { useNavigate } from 'react-router';

function Rate() {
    const navigate=useNavigate();
  return (
    <div>


      <div><Header></Header></div>
      
      <div className='rate_Veh'>
        <h1 className='rate_vehtext'>Rate for vehicle</h1>
        <br></br>
        <center><StarRate></StarRate></center>
        <div className='vehicleRateForm'><center><RateVehicleForm></RateVehicleForm></center></div>
        <div><button className='subButton_Vehicle'>Submit</button></div>
        <br></br>
       <center><button class="flex bg-[rgb(250,204,21);] p-4 font-bold rounded-3xl " onClick={()=>navigate('complainsForm')}>Complains to the vehicle</button></center>
       
      </div>

      <div className='rate_dri'>
        <h1 className='rate_dritext'>Rate for Driver</h1>
        <br></br>
        <center><StarRate></StarRate></center>
       <div className='driverRateForm'> <center><DriverRateform></DriverRateform></center></div>
       <button onClick={()=>navigate('ComplainsForm')} className='subButton_Driver'>Submit</button>
       <br></br>
       <br></br>
       <center><button class="flex bg-[rgb(250,204,21);] p-4 font-bold rounded-3xl ">Complains to the vehicle</button></center>
      </div> 
      
      </div>
    
  );
}

export default Rate;