import React from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

import CreateBooking from './pages/Booking And Payment Management/CreateBooking';
import ShowBooking from './pages/Booking And Payment Management/ShowBooking';
import Layout from './components/Layout';
import Landing from './pages/Renter Management/Landing';
// import Signup from './pages/Signup';
import Signup from './pages/shared/Signup.jsx';
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
       
      <Route path='/booking/create' element={<Layout><CreateBooking/></Layout>}/>
      <Route path='/booking/details' element={<ShowBooking/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
    </Routes>
    
  )
}

export default App
