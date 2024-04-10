import React from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';



import BookingHistory from './pages/Booking And Payment Management/BookingHistory';
import Payment from './pages/Booking And Payment Management/Payment';
import DriverdashboardSidebar from './pages/Driver Management/DriverdashboardSidebar';
import DriverDashboard from './pages/Driver Management/DriverDashboard';
import Displaydates from './pages/Driver Management/Displaydates';
import Driverprofile from './pages/Driver Management/Driverprofile';
import License from './pages/Driver Management/License';



import CreateBooking from './pages/Booking And Payment Management/CreateBookingR.jsx';
import ShowBookingR from './pages/Booking And Payment Management/BookingHistory.jsx';
import ShowBookingO from './pages/Booking And Payment Management/CheckBooking.jsx';


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



axios.defaults.baseURL='http://localhost:5556'
axios.defaults.withCredentials=true


const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Layout><Home/></Layout>} />

      <Route path='/booking' element={<Layout><Booking/></Layout>} />
      <Route path='/driverdashboard' element={<Layout><DriverdashboardSidebar/></Layout>}/>

     
      <Route path='/driverprofile' element={<Layout><Driverprofile/></Layout>}/>

      <Route path='/booking'>
        <Route path='' element={<Layout><Booking/></Layout>} />
        <Route path='history' element={<Layout><BookingHistory/></Layout>} />
      </Route>

      <Route path='/payment'>
        <Route path='' element={<Layout><Payment/></Layout>} />
      </Route>
      

      
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


      
      <Route path='/driver' element={<Layout><DriverDashboard/></Layout>}/>
      <Route path='/license' element={<Layout><License/></Layout>}/>
      <Route path='/displaydates' element={<Layout><Displaydates/></Layout>}/>
      
      

    </Routes>
    
  )
}

export default App
