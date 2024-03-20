import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';
import Landing from './pages/Renter Management/Landing';


const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Layout><Home/></Layout>} />
      <Route path='/booking' element={<Layout><Booking/></Layout>} />
      <Route path='/' element={<Layout><Landing/></Layout>} />
    </Routes>
  )
}

export default App