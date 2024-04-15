import React from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

import CreateBooking from './pages/Booking And Payment Management/CreateBookingR.jsx';
import ShowBookingR from './pages/Booking And Payment Management/BookingHistory.jsx';
import ShowBookingO from './pages/Booking And Payment Management/CheckBooking.jsx';
import ShowComplains from './pages/Reviews and rating management/ShowComplains.jsx';
import EditComplains from './pages/Reviews and rating management/EditComplains.jsx';
import DeleteComplains from './pages/Reviews and rating management/DeleteComplains.jsx';
import ComplainsEdit from './pages/Reviews and rating management/EditComplains.jsx';

import Layout from './components/Layout';
import Landing from './pages/Renter Management/Landing';
import Signup from './pages/Signup';
import VehicleLand from './pages/Landing';
// import Signup from './pages/shared/Signup.jsx';
import Login from './pages/Login';
import RenterSidebar from './pages/Renter Management/RenterSidebar';
import Manageprofile from './pages/Renter Management/Manageprofile';
import RenterHome from './pages/Renter Management/RenterHome';
import SelectBooking from './pages/Renter Management/SelectBooking';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Displaydates from './pages/Driver Management/Displaydates';
import Driverprofile from './pages/Driver Management/Driverprofile';
import License from './pages/Driver Management/License';
import DriverDashboard from './pages/Driver Management/Driverdashboard';
import DriverDisplay from './pages/Driver Management/DriverDisplay';
import CommonSection from './pages/Vehicle Management/CommonSection';
import Data from './pages/Vehicle Management/Data';
import PageHelmet from './pages/Vehicle Management/PageHelmet';
import ViewRenter from './pages/Renter Management/ViewRenter';
import Logout from './pages/Logout';
import Logout from './pages/Logout.jsx';
import Profile from './pages/Renter Management/Manageprofile.jsx'

import VehicleSidebar from './pages/Vehicle Management/VehicleSidebar.jsx';
import VehicleManager from './pages/Vehicle Management/VehicleManager.jsx';
import ApprovedF from './pages/Vehicle Management/ApprovedF.jsx';
import Forms from './pages/Vehicle Management/Forms.jsx';
import Home from './pages/Reviews and rating management/Home.jsx'
import Vprofile from './pages/Vehicle Management/Profile.jsx'
import AddedVehicles from './pages/Vehicle Management/AddedVehicles.jsx'

// import Home from './pages/Home';
import CreateBooking from './pages/Booking And Payment Management/CreateBookingR';
import ShowBookingR from './pages/Booking And Payment Management/BookingHistory';
import ShowBookingO from './pages/Booking And Payment Management/CheckBooking';



axios.defaults.baseURL = 'http://localhost:5556';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Routes> 
      <Route path="/" element={<Layout />} />
      <Route path="/viewRenter" element={<Layout><ViewRenter/></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/landing" element={<Layout><Landing/></Layout>} />
      <Route path="/renterprofile" element={<Layout><Manageprofile/></Layout>} />
      <Route path="/Rentersidebar" element={<Layout><RenterSidebar/></Layout>} />
      <Route path="/homerenter" element={<Layout><RenterHome/></Layout>} />
      <Route path="/selectbooking" element={<Layout><SelectBooking/></Layout>} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/displaydate" element={<Layout><Displaydates/></Layout>} />
      <Route path="/driverprofile" element={<Layout><Driverprofile/></Layout>} />
      <Route path="/license" element={<Layout><License/></Layout>} />
      <Route path="/driverdashboard" element={<Layout><DriverDashboard/></Layout>} />
      <Route path="/driverdisplay" element={<Layout><DriverDisplay/></Layout>} />

      <Route path="/booking/create" element={<Layout><CreateBooking/></Layout>} />
      <Route path="/booking/history" element={<ShowBookingR />} />
      <Route path="/booking/check" element={<ShowBookingO />} />

      <Route path="/driver" element={<Layout><DriverDashboard/></Layout>} />
      <Route path="/vehiclemanager" element={<Layout><VehicleManager/></Layout>} />
      <Route path="/VehicleSidebar" element={<Layout><VehicleSidebar/></Layout>} />
      <Route path="/vehicledashboard" element={<Layout><VehicleDashboard/></Layout>} />
      <Route path="/Profile" element={<Layout><Profile/></Layout>} />
   
  
      {/* <Route path='/driver'>
        <Route path='' element={<Layout><DriverDashboard/></Layout>} />
      </Route> */}

      <Route path='/VehicleManager'>
        <Route path='' element={<Layout><VehicleManager/></Layout>} />
      </Route> 
       <Route path='/VehicleSidebar' element={<Layout><VehicleSidebar/></Layout>}/> 
      <Route path='/AddedVehicles' element={<Layout><AddedVehicles/></Layout>}/> 
      <Route path='/Profile' element={<Layout><Vprofile/></Layout>}/>
      <Route path='/ApprovedF' element={<Layout><ApprovedF/></Layout>}/>
      <Route path='/Forms' element={<Layout><Forms/></Layout>}/>
      


      <Route path='/landing'element={<Layout><VehicleLand/></Layout>}/>
      <Route path='/' element={<Layout />} />
      <Route path='/viewRenter' element={<Layout><ViewRenter/></Layout>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/resetPassword' element={<ResetPassword/>}/>
      <Route path='/landing'element={<Layout><Landing/></Layout>}/>
      <Route path='/profile'element={<Layout><Manageprofile/></Layout>}/>
      <Route path='/Rentersidebar'element={<Layout><RenterSidebar/></Layout>}/>
      <Route path='/homerenter' element={<Layout><RenterHome/></Layout>}/>
      <Route path='/selectbooking' title="Select Booking" element={<Layout><SelectBooking/></Layout>}/>
      <Route path='/signup' element={<Signup/>}/>

      
      <Route path='/booking/create' element={<Layout><CreateBooking/></Layout>}/>
      <Route path='/booking/history' element={<ShowBookingR/>}/>
      <Route path='/booking/check' element={<ShowBookingO/>}/>


      <Route path='/complains' element={<Home/>}/>//complains home
      <Route path='/complains/details/:id' element={<ShowComplains/>}/>//show complains
      <Route path='/complains/edit/:id' element={<EditComplains/>}/>//update
      <Route path='/complains/delete/:id' element={<DeleteComplains/>}/>//delete
      {/* <Route path='/complainsForm' element={<ComplainsForm/>}/>// create a book */}
      
    

      
    </Routes>
    
  )
}

export default App;
