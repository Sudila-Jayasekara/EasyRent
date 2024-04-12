import React from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

// import Home from './pages/Home';
// import Booking from './pages/Booking And Payment Management/Booking';
// import BookingHistory from './pages/Booking And Payment Management/BookingHistory';
// import Payment from './pages/Booking And Payment Management/Payment';
//import DriverDashboard from './pages/Driver Management/DriverDashboard';
import Owner from './pages/Vehicle Owner Management/Owner';
import VehicleAdd from './VehicleAdd';
import DriverAdd from './DriverAdd';
import OwnerProfile from './pages/Vehicle Owner Management/OwnerProfile';
import ViewVehicle from './ViewVehicle';

import CreateBooking from './pages/Booking And Payment Management/CreateBookingR.jsx';
import ShowBookingR from './pages/Booking And Payment Management/BookingHistory.jsx';
import ShowBookingO from './pages/Booking And Payment Management/CheckBooking.jsx';

import Layout from './components/Layout';
import Landing from './pages/Renter Management/Landing';
import Signup from './pages/Signup';
// import Signup from './pages/shared/Signup.jsx';
import Login from './pages/Login';
import RenterSidebar from './pages/Renter Management/RenterSidebar';
import Manageprofile from './pages/Renter Management/Manageprofile';
import RenterHome from './pages/Renter Management/RenterHome';
import SelectBooking from './pages/Renter Management/SelectBooking';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword.jsx';
import OwnerSidebar from './pages/Vehicle Owner Management/OwnerSidebar.jsx';



axios.defaults.baseURL='http://localhost:5556'
axios.defaults.withCredentials=true


const App = () => {
  return (
    <Routes>
      
      {/* <Route path='/driver'>
        <Route path='' element={<Layout><DriverDashboard/></Layout>} />
      </Route> */}

      <Route path='/owner'>
        <Route path='' element={<Layout><Owner/></Layout>} />
      </Route>
      <Route path='/vehicleadd' element={<VehicleAdd/>}/>
      <Route path='/driveradd' element={<DriverAdd/>}/>
      <Route path='/ownersidebar' element={<Layout><OwnerSidebar/></Layout>}/>
      
      
      <Route path='/ownerProfile'>
        <Route path='' element={<Layout><OwnerProfile/></Layout>} />
      </Route>
      <Route path='/viewvehicle' element={<ViewVehicle/>}/>
      <Route path='/' element={<Layout />} />
      {/* <Route path='/signup' element={<Signup/>} /> */}
      <Route path='/login' element={<Login/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/landing'element={<Layout><Landing/></Layout>}/>
      <Route path='/profile'element={<Layout><Manageprofile/></Layout>}/>
      <Route path='/Rentersidebar'element={<Layout><RenterSidebar/></Layout>}/>
      <Route path='/homerenter' element={<Layout><RenterHome/></Layout>}/>
      <Route path='/selectbooking' title="Select Booking" element={<Layout><SelectBooking/></Layout>}/>
      <Route path='/signup' element={<Signup/>}/>

      
      <Route path='/booking/create' element={<Layout><CreateBooking/></Layout>}/>
      <Route path='/booking/history' element={<ShowBookingR/>}/>
      <Route path='/booking/check' element={<ShowBookingO/>}/>

      
    </Routes>
    
  )
}

export default App
