import React from 'react'
import {Routes, Route} from 'react-router-dom';
import CreateBooking from './pages/Booking And Payment Management/CreateBooking';
import ShowBooking from './pages/Booking And Payment Management/ShowBooking';
import Layout from './components/Layout';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/booking/create' element={<CreateBooking/>}/>
      <Route path='/booking/details' element={<ShowBooking/>}/>
    </Routes>
  )
}

export default App
