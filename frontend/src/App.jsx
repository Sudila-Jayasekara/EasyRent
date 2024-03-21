import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';

import Landing from './pages/Renter Management/Landing';

import BookingHistory from './pages/Booking And Payment Management/BookingHistory';
import Payment from './pages/Booking And Payment Management/Payment';
import Signup from './pages/Signup';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>} />
     
      
      <Route path='/landing'element={<Layout><Landing/></Layout>}/>
       
      
       <Route path='/signup'>
       <Route path='' element={<Layout><Signup/></Layout>}/>
       </Route>
      <Route path='/booking'>
        <Route path='' element={<Layout><Booking/></Layout>} />
        <Route path='history' element={<Layout><BookingHistory/></Layout>} />
      </Route>

      <Route path='/payment'>
        <Route path='' element={<Layout><Payment/></Layout>} />
      </Route>
      

    </Routes>
  )
}

export default App
