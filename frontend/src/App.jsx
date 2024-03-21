import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';
import Payment from './pages/Booking And Payment Management/Payment';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout title="Home"><Home/></Layout>} />
      <Route path='/booking' element={<Layout title="Booking"><Booking/></Layout>} />
      <Route path='/payment' element={<Layout title="Payment"><Payment/></Layout>} />
    </Routes>
  )
}

export default App
