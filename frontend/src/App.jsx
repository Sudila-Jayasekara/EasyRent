import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';

import Booking from './pages/Booking And Payment Management/Booking';
import BookingHistory from './pages/Booking And Payment Management/BookingHistory';
import Payment from './pages/Booking And Payment Management/Payment';

import DriverDashboard from './pages/Driver Management/DriverDashboard';

import VehicleManager from './pages/Vehicle Management/VehicleManager';
import Profile from './pages/Vehicle Management/Profile';
import VehicleSidebar from './pages/Vehicle Management/VehicleSidebar';
import AddedVehicles from './pages/Vehicle Management/AddedVehicles';
import ApprovedF from './pages/Vehicle Management/ApprovedF';
import Forms from './pages/Vehicle Management/Forms';


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

      <Route path='/VehicleManager'>
        <Route path='' element={<Layout><VehicleManager/></Layout>} />
      </Route>
      <Route path='/VehicleSidebar' element={<Layout><VehicleSidebar/></Layout>}/>
      <Route path='/AddedVehicles' element={<Layout><AddedVehicles/></Layout>}/>
      <Route path='/Profile' element={<Layout><Profile/></Layout>}/>
      <Route path='/ApprovedF' element={<Layout><ApprovedF/></Layout>}/>
      <Route path='/Forms' element={<Layout><Forms/></Layout>}/>
      


  </Routes>
  )
}

export default App
