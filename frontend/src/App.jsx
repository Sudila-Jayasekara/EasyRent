import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ComplainsForm from './components/ComplainsForm';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>}/>
     <Route path='/complainsForm' element={<ComplainsForm/>}></Route>
    </Routes>
  );
}

export default App;