import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';

import BookingHistory from './pages/Booking And Payment Management/BookingHistory';
import Payment from './pages/Booking And Payment Management/Payment';
import DriverdashboardSidebar from './pages/Driver Management/DriverdashboardSidebar';
import DriverDashboard from './pages/Driver Management/DriverDashboard';
import DriverManage from './pages/Driver Management/DriverManage.jsx';
import Driverprofile from './pages/Driver Management/Driverprofile.jsx';




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
      
      <Route path='/managedriver' element={<Layout><DriverManage/></Layout>}/>
       <Route path='/driver' element={<Layout><DriverDashboard/></Layout>}/>
      
      
main
    </Routes>
  )
}

export default App
