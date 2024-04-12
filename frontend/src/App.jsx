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

import ShowComplains from './pages/Reviews and rating management/ShowComplains.jsx'
import ComplainsForm from './pages/Reviews and rating management/ComplainsForm.jsx'
import DeleteComplains from './pages/Reviews and rating management/DeleteComplains.jsx'
import EditComplains from './pages/Reviews and rating management/EditComplains.jsx'
import Home from './pages/Reviews and rating management/Home.jsx'



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
      <Route path='/signup' element={<Signup/>}/>

      
      <Route path='/booking/create' element={<Layout><CreateBooking/></Layout>}/>
      <Route path='/booking/history' element={<ShowBookingR/>}/>
      <Route path='/booking/check' element={<ShowBookingO/>}/>


      <Route path='/complains' element={<Home/>}/>//complains home
      <Route path='/complains/details/:id' element={<ShowComplains/>}/>//show complains
      <Route path='/complains/edit/:id' element={<EditComplains/>}/>//update
      <Route path='/complains/delete/:id' element={<DeleteComplains/>}/>//delete
      <Route path='/complainsForm' element={<ComplainsForm/>}/>// create a book
      
    

      
    </Routes>
    
  )
}

export default App;
