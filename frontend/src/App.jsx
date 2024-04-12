import React from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

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

import Displaydates from './pages/Driver Management/Displaydates.jsx';

import Driverprofile from './pages/Driver Management/Driverprofile.jsx';
import License from './pages/Driver Management/License.jsx';
import DriverDashboard from './pages/Driver Management/Driverdashboard.jsx';
import DriverDisplay from './pages/Driver Management/DriverDisplay.jsx';

import DriverdashboardSidebar from './pages/Driver Management/DriverdashboardSidebar.jsx';


import ViewRenter from './pages/Renter Management/ViewRenter';
 


axios.defaults.baseURL='http://localhost:5556'
axios.defaults.withCredentials=true


const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Layout />} />
      <Route path='/viewRenter' element={<Layout><ViewRenter/></Layout>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/landing'element={<Layout><Landing/></Layout>}/>
      <Route path='/profile'element={<Layout><Manageprofile/></Layout>}/>
      <Route path='/Rentersidebar'element={<Layout><RenterSidebar/></Layout>}/>
      <Route path='/homerenter' element={<Layout><RenterHome/></Layout>}/>
      <Route path='/selectbooking' title="Select Booking" element={<Layout><SelectBooking/></Layout>}/>
      <Route path='/signup' element={<Signup/>}/>
      
      <Route path='/displaydate' element={<Layout><Displaydates/></Layout>}/>
      <Route path='/driverprofile' element={<Layout><Driverprofile/></Layout>}/>
      <Route path='/license' element={<Layout><License/></Layout>}/>
      <Route path='/displaydates' element={<Layout><Displaydates/></Layout>}/>
      <Route path='/driverdashboard' element={<Layout><DriverDashboard/></Layout>}/>
      <Route path='/driverdisplay' element={<Layout><DriverDisplay/></Layout>}/>


      <Route path='/booking/create' element={<Layout><CreateBooking/></Layout>}/>
      <Route path='/booking/history' element={<ShowBookingR/>}/>
      <Route path='/booking/check' element={<ShowBookingO/>}/>

      
    </Routes>
    
  )
}

export default App
