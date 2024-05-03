import React from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

import CreateBooking from './pages/Booking And Payment Management/CreateBooking';
import ShowBooking from './pages/Booking And Payment Management/ShowBooking';
import Layout from './components/Layout';
import Landing from './pages/Renter Management/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';
import RenterSidebar from './pages/Renter Management/RenterSidebar';
import Manageprofile from './pages/Renter Management/Manageprofile';
import RenterHome from './pages/Renter Management/RenterHome';
import SelectBooking from './pages/Renter Management/SelectBooking';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword.jsx';
import HrEmpRegister from './pages/HR Management/HrEmpRegister.jsx';
import HrPayroll from './pages/HR Management/HrPayroll.jsx';
import HrDetails from './pages/HR Management/HrDetails.jsx';
import HrDashboard from './pages/HR Management/HrDashboard.jsx';
import HrSalaryDetails from './pages/HR Management/HrSalaryDetails.jsx';
import HrEmpLeave from './pages/HR Management/HrEmpLeave.jsx';
import HrDetailsEdit from './pages/HR Management/HrDetailsEdit.jsx';
import HrLeaveDetails from './pages/HR Management/HrLeaveDetails.jsx';
import HrSalaryEdit from './pages/HR Management/HrSalaryEdit.jsx';
import HrDetailsRead from './pages/HR Management/HrDetailsRead.jsx';
import EmpDashbord from './pages/HR Management/EmpDashbord.jsx';










axios.defaults.baseURL='http://localhost:5556'
axios.defaults.withCredentials=true


const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Layout />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/landing'element={<Layout><Landing/></Layout>}/>
      <Route path='/profile'element={<Layout><Manageprofile/></Layout>}/>
      <Route path='/Rentersidebar'element={<Layout><RenterSidebar/></Layout>}/>
      <Route path='/homerenter' element={<Layout><RenterHome/></Layout>}/>
      <Route path='/selectbooking' title="Select Booking" element={<Layout><SelectBooking/></Layout>}/>
       
      <Route path='/booking/create' element={<CreateBooking/>}/>
      <Route path='/booking/details' element={<ShowBooking/>}/>
      <Route path='/empRegister' element={<Layout><HrEmpRegister/></Layout>}/>
      <Route path='/payroll' element={<Layout><HrPayroll/></Layout>}/>
      <Route path='/Details' element={<Layout><HrDetails/></Layout>}/>
      <Route path='/Dashboard' element={<Layout><HrDashboard/></Layout>}/>
      <Route path='/SalaryDetails' element={<Layout><HrSalaryDetails/></Layout>}/>
      <Route path='/EmpLeave' element={<Layout><HrEmpLeave/></Layout>}/>
      <Route path='/DetailsEdit/:id' element={<Layout><HrDetailsEdit/></Layout>} />
      <Route path='/LeaveDetails' element={<Layout><HrLeaveDetails/></Layout>}/>
      <Route path='/SalaryEdit/:id' element={<Layout><HrSalaryEdit/></Layout>}/>
      <Route path='/DetailsRead/:id' element={<Layout><HrDetailsRead/></Layout>}/>
      <Route path='/EmpDash' element={<Layout><EmpDashbord/></Layout>}/>
      
      

      
     
      
      
     
      
      
    </Routes>
    
  )
}

export default App
