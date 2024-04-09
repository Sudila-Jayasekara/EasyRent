import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking And Payment Management/Booking';
import Payment from './pages/Booking And Payment Management/Payment';
import HR from './pages/HR Management/HrDashboard';
import HrNew from './pages/HR Management/HrNew';
import HrRegister from './pages/HR Management/HrRegister';
import HrEmpRegister from './pages/HR Management/HrEmpRegister';
import HrSalary from './pages/HR Management/HrSalary';





 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout title="Home"><Home/></Layout>} />
      <Route path='/booking' element={<Layout title="Booking"><Booking/></Layout>} />
      <Route path='/payment' element={<Layout title="Payment"><Payment/></Layout>} />
      <Route path='/HR' element={<Layout title="HI"><HR/></Layout>} />
      <Route path='/log1' element={<Layout title="Sign up"><HrNew/></Layout>}/>
      <Route path='/Register' element={<Layout><HrRegister/></Layout>}/>
      <Route path='/EmpRegister' element={<Layout><HrEmpRegister/></Layout>}/>
      <Route path='/Salary' element={<Layout><HrSalary/></Layout>}/>
     
    </Routes>
  )
}

export default App
