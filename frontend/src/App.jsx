import React from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

import CreateBooking from './pages/Booking And Payment Management/CreateBooking.jsx';
import ShowBooking from './pages/Booking And Payment Management/BookingHistory.jsx';
import CheckBooking from './pages/Booking And Payment Management/CheckBooking.jsx';
import UpdateBooking from './pages/Booking And Payment Management/UpdateBooking.jsx';
import ApprovedBookings from './pages/Booking And Payment Management/ApprovedBookings.jsx';
import RejectBookings from './pages/Booking And Payment Management/RejectedBookings.jsx';
import PendingBookings from './pages/Booking And Payment Management/PendingBookings.jsx';

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
import ViewRenter from './pages/Renter Management/ViewRenter';
import Logout from './pages/Logout.jsx';


axios.defaults.baseURL='http://localhost:5556'
axios.defaults.withCredentials=true


const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Layout />} />
      <Route path='/viewRenter' element={<Layout><ViewRenter/></Layout>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/landing'element={<Layout><Landing/></Layout>}/>
      <Route path='/profile'element={<Layout><Manageprofile/></Layout>}/>
      <Route path='/Rentersidebar'element={<Layout><RenterSidebar/></Layout>}/>
      <Route path='/homerenter' element={<Layout><RenterHome/></Layout>}/>
      <Route path='/selectbooking' title="Select Booking" element={<Layout><SelectBooking/></Layout>}/>
      <Route path='/signup' element={<Signup/>}/>

      <Route path='/booking/create' element={<Layout><CreateBooking/></Layout>}/>
      <Route path='/booking/update/:bookingId' element={<Layout><UpdateBooking/></Layout>}/>
      <Route path='/booking/history' element={<Layout><ShowBooking/></Layout>}/>
      <Route path='/booking/check' element={<Layout><CheckBooking/></Layout>}/>
      <Route path='/booking/approved' element={<Layout><ApprovedBookings/></Layout>}/>
      <Route path='/booking/rejected' element={<Layout><RejectBookings/></Layout>}/>
      <Route path='/booking/pending' element={<Layout><PendingBookings/></Layout>}/>
      
    </Routes>
    
  )
}

export default App
