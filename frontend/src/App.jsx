import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';
import Driverdashboard from './pages/Driver Management/Driverdashboard';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>} />
      <Route path='/booking' element={<Layout><Booking/></Layout>} />
      <Route path='/driverdashboard' element={<Layout><Driverdashboard/></Layout>}/>
    </Routes>
  )
}

export default App
