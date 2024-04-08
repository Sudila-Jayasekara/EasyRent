import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';
import BookingHistory from './pages/Booking And Payment Management/BookingHistory';
import Payment from './pages/Booking And Payment Management/Payment';
import DriverDashboard from './pages/Driver Management/DriverDashboard';
import Owner from './pages/Vehicle Owner Management/Owner';
import VehicleAdd from './VehicleAdd';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>} />

      <Route path='/booking'>
        <Route path='' element={<Layout><Booking/></Layout>} />
        <Route path='history' element={<Layout><BookingHistory/></Layout>} />
      </Route>

      <Route path='/payment'>
        <Route path='' element={<Layout><Payment/></Layout>} />
      </Route>
      
      <Route path='/driver'>
        <Route path='' element={<Layout><DriverDashboard/></Layout>} />
      </Route>

      <Route path='/owner'>
        <Route path='' element={<Layout><Owner/></Layout>} />
      </Route>
      <Route path='/vehicleadd' element={<VehicleAdd/>}/>

      

      
    </Routes>
  )
}

export default App
