import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Booking from './pages/Booking And Payment Management/Booking';
import Layout from './components/Layout';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/booking' element={<Layout><Booking/></Layout>}/>
    </Routes>
  )
}

export default App
