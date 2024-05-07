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
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword.jsx';
import RiskNote from './pages/Renter Management/RiskNote.jsx';

// import HrEmpRegister from './pages/HR Management/HrEmpRegister.jsx';
// import HrPayroll from './pages/HR Management/HrPayroll.jsx';
// import HrDetails from './pages/HR Management/HrDetails.jsx';
import HrDashboard from './pages/HR Management/HrDashboard.jsx';
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




import Manageprofile from './pages/Renter Management/Manageprofile';
import RenterSidebar from './pages/Renter Management/RenterSidebar';
import RenterHome from './pages/Renter Management/RenterHome';
import SelectBooking from './pages/Renter Management/SelectBooking';

import VehicleDetails from './pages/Vehicle Management/VehicleDetails';// import FavouriteList from './pages/Renter Management/FavouriteList.jsx';
import FavouriteList from './pages/Renter Management/FavouriteList.jsx';
import ViewRenterDetails from './pages/Renter Management/ViewRenterDetails.jsx';
import VehicleManager from './pages/Vehicle Management/VehicleManager.jsx';
import VehicleSidebar from './pages/Vehicle Management/VehicleSidebar.jsx';
import VehicleMProfile from './pages/Vehicle Management/VehicleMProfile.jsx';
import Vehicles from './pages/Vehicle Management/Vehicles.jsx';
import ReviewsDetails from './pages/Vehicle Management/ReviewsDetails.jsx';
import Reply from './pages/Vehicle Management/Reply.jsx';
import ReplyList from './pages/Vehicle Management/ReplyList.jsx';
import UpdateReply from './pages/Vehicle Management/UpdateReply.jsx';
import RiskDetailsPage from './pages/Renter Management/RiskDetailsPage.jsx';
import PrintRisk from './pages/Renter Management/PrintRisk.jsx';




axios.defaults.baseURL = 'http://localhost:5556';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout><ErrorPage /></Layout>} />
      <Route path="/favlist" element={<Layout><FavouriteList/></Layout>} />
      <Route path="/" element={<Layout><Landing/></Layout> } />
      <Route path="/landing" element={<Layout><Landing/></Layout>} />
      <Route path="/viewRenter" element={<Layout><ViewRenter/></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/risk-details" element={<Layout><RiskDetailsPage /></Layout>} />
      <Route path="/printrisk/:nic" element={<Layout><PrintRisk/></Layout>}/>
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/renterprofile" element={<Layout><Manageprofile/></Layout>} />
      <Route path="/Rentersidebar" element={<Layout><RenterSidebar/></Layout>} />
      <Route path="/homerenter" element={<Layout><RenterHome/></Layout>} />
      <Route path="/renterdetail/:nic" element={<Layout><ViewRenterDetails/></Layout>} />
      <Route path="/risknote/:nic" element={<Layout><RiskNote/></Layout>} />
      <Route path="/selectbooking/:vehicleId" element={<Layout><SelectBooking/></Layout>} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/displaydate" element={<Layout><Displaydates/></Layout>} />
      <Route path="/driverprofile" element={<Layout><Driverprofile/></Layout>} />
      <Route path="/license" element={<Layout><License/></Layout>} />
      <Route path="/driverdashboard" element={<Layout><DriverDashboard/></Layout>} />
      <Route path="/driverdisplay" element={<Layout><DriverDisplay/></Layout>} />

      <Route path="/hrdashboard" element={<Layout><HrDashboard/></Layout>} />

      <Route path="/complains" element={<Home/>}/>
      <Route path="/complains/details/:id" element={<ShowComplains/>}/>
      <Route path="/complains/edit/:id" element={<EditComplains/>}/>
      <Route path="/complains/delete/:id" element={<DeleteComplains/>}/>
      <Route path="/complainsForm" element={<ComplainsForm/>}/>

      <Route path="/owner" element={<Layout><Owner/></Layout>} />
      <Route path="/vehicleadd" element={<VehicleAdd/>}/>
      <Route path="/driveradd" element={<DriverAdd/>}/>
      <Route path="/ownersidebar" element={<Layout><OwnerSidebar/></Layout>}/>
      <Route path="/dataVehicle" element={<Layout><DataVehicle/></Layout>}/>
      <Route path='/vehiclemanager' element={<Layout><VehicleManager/></Layout>}/>
      <Route path="/ownerProfile" element={<Layout><OwnerProfile/></Layout>} />
      <Route path="/viewvehicle" element={<ViewVehicle/>}/>
      <Route path="/VehicleMProfile" element={<Layout><VehicleMProfile/></Layout>}/>
      <Route path="/VehicleDetails/:vehicleId" element={<Layout><VehicleDetails/></Layout>}/>
      <Route path="/VehicleSideBar" element={<Layout><VehicleSidebar/></Layout>}/>
      <Route path="/Vehicles" element={<Layout><Vehicles/></Layout>}/>
      <Route path="/ReviewsDetails" element={<Layout><ReviewsDetails/></Layout>}/>
      <Route path="/Reply/:id" element={<Layout><Reply/></Layout>}/>
  
      <Route path="/showreply" element={<Layout><ReplyList/></Layout>}/>
      <Route path='/update-reply/:id' element={<Layout><UpdateReply/></Layout>}/>


      <Route path='/bp' element={<Layout><BookingAndPayment/></Layout>}/>
      <Route path='/booking/create/:vehicleId' element={<Layout><CreateBooking/></Layout>}/>
      <Route path='/booking/update/:bookingId' element={<Layout><UpdateBooking/></Layout>}/>
      <Route path='/booking/history' element={<Layout><ShowBooking/></Layout>}/>
      <Route path='/booking/check' element={<Layout><CheckBooking/></Layout>}/>
      <Route path='/booking/approved' element={<Layout><ApprovedBookings/></Layout>}/>
      <Route path='/booking/rejected' element={<Layout><RejectBookings/></Layout>}/>
      <Route path='/booking/pending' element={<Layout><PendingBookings/></Layout>}/>

      <Route path='/payment' element={<Layout><Payment/></Layout>}/>
      <Route path='/payment/generateBill/:bookingId' element={<Layout><GenerateBill/></Layout>}/>
      <Route path='/payment/displayBill/:bookingId' element={<Layout><DisplayBill/></Layout>}/>
      
    </Routes>
  );
}

export default App;
