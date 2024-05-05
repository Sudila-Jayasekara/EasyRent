import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

import Layout from './components/Layout';

import Owner from './pages/Vehicle Owner Management/Owner';
import VehicleAdd from './pages/Vehicle Management/VehicleAdd.jsx';
import DriverAdd from './pages/Driver Management/DriverAdd.jsx';
import OwnerProfile from './pages/Vehicle Owner Management/OwnerProfile';
import ViewVehicle from './pages/Vehicle Management/ViewVehicle.jsx';
import DataVehicle from './pages/Vehicle Owner Management/DataVehicle';

import ShowComplains from './pages/Reviews and rating management/ShowComplains.jsx';
import EditComplains from './pages/Reviews and rating management/EditComplains.jsx';
import DeleteComplains from './pages/Reviews and rating management/DeleteComplains.jsx';

//Booking  imports
import BookingAndPayment from './pages/Booking And Payment Management/BookingAndPayment.jsx';
import CreateBooking from './pages/Booking And Payment Management/CreateBooking.jsx';
import ShowBooking from './pages/Booking And Payment Management/BookingHistory.jsx';
import CheckBooking from './pages/Booking And Payment Management/CheckBooking.jsx';
import UpdateBooking from './pages/Booking And Payment Management/UpdateBooking.jsx';
import ApprovedBookings from './pages/Booking And Payment Management/ApprovedBookings.jsx';
import RejectBookings from './pages/Booking And Payment Management/RejectedBookings.jsx';
import PendingBookings from './pages/Booking And Payment Management/PendingBookings.jsx';

//Payment imports
import Payment from './pages/Booking And Payment Management/Payment.jsx';
import GenerateBill from './pages/Booking And Payment Management/GenerateBill.jsx'; 
import DisplayBill from './pages/Booking And Payment Management/DisplayBill.jsx';


import Landing from './pages/Landing.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout.jsx';


import RiskNote from './pages/Renter Management/RiskNote.jsx';

// import HrEmpRegister from './pages/HR Management/HrEmpRegister.jsx';
// import HrPayroll from './pages/HR Management/HrPayroll.jsx';
// import HrDetails from './pages/HR Management/HrDetails.jsx';
// import HrDashboard from './pages/HR Management/HrDashboard.jsx';
// import HrSalaryDetails from './pages/HR Management/HrSalaryDetails.jsx';
// import HrEmpLeave from './pages/HR Management/HrEmpLeave.jsx';
// import HrDetailsEdit from './pages/HR Management/HrDetailsEdit.jsx';
// import HrLeaveDetails from './pages/HR Management/HrLeaveDetails.jsx';
// import HrSalaryEdit from './pages/HR Management/HrSalaryEdit.jsx';

import Displaydates from './pages/Driver Management/Displaydates';
import Driverprofile from './pages/Driver Management/Driverprofile';
import License from './pages/Driver Management/License';
import DriverDashboard from './pages/Driver Management/Driverdashboard';
import DriverDisplay from './pages/Driver Management/DriverDisplay';
import OwnerSidebar from './pages/Vehicle Owner Management/OwnerSidebar.jsx';
import ViewRenter from './pages/Renter Management/ViewRenter';
import Home from './pages/Reviews and rating management/Home.jsx';
import ComplainsForm from './pages/Reviews and rating management/ComplainsForm.jsx';
import VehicleSidebar from './pages/Vehicle Management/vehicleSidebar.jsx';
import VehicleManager from './pages/Vehicle Management/vehicleManager.jsx';
import ApprovedF from './pages/Vehicle Management/ApprovedF.jsx';
import Forms from './pages/Vehicle Management/Forms.jsx';
import Vprofile from './pages/Vehicle Management/Profile.jsx';
import AddedVehicles from './pages/Vehicle Management/AddedVehicles.jsx';
import Manageprofile from './pages/Renter Management/Manageprofile';
import RenterSidebar from './pages/Renter Management/RenterSidebar';
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
import EmpDashbord from './pages/HR Management/EmpDashbord.jsx';











axios.defaults.baseURL = 'http://localhost:5556';
axios.defaults.withCredentials = true;

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
      <Route path='/EmpDash' element={<Layout><EmpDashbord/></Layout>}/>
      

      
     
      
      
     
      
      
    </Routes>
  );
}

export default App;
