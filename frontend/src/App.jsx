import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ComplainsForm from './components/ComplainsForm';
import DcomplainsForm from './components/DcomplainsForm';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>}/>
     <Route path='/complainsFormVehicle' element={<ComplainsForm/>}></Route>
     <Route path='/ComplainsForDriver' element={<DcomplainsForm/>}></Route>
    </Routes>
  );
}

export default App;