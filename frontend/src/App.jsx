import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';
<<<<<<< Updated upstream
import BookingHistory from './pages/Booking And Payment Management/BookingHistory';
import Payment from './pages/Booking And Payment Management/Payment';
import Driverdashboard from './pages/Driver Management/Driverdashboard';

=======
import Driverdashboard from './pages/Driver Management/Driverdashboard';
>>>>>>> Stashed changes


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>} />
<<<<<<< Updated upstream

      <Route path='/booking'>
        <Route path='' element={<Layout><Booking/></Layout>} />
        <Route path='history' element={<Layout><BookingHistory/></Layout>} />
      </Route>

      <Route path='/payment'>
        <Route path='' element={<Layout><Payment/></Layout>} />
      </Route>

      <Route path='/driverdashboard'element={<Layout><Driverdashboard/></Layout>}/>
=======
      <Route path='/booking' element={<Layout><Booking/></Layout>} />
      <Route path='/driverdashboard' element={<Layout><Driverdashboard/></Layout>}/>
>>>>>>> Stashed changes
    </Routes>
  )
}

export default App
