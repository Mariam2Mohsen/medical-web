/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-pascal-case */
// import './App.css';
// import Serviec from './component/Serviec';
// import Header from './component/Header';
// import Footer from './component/footer';
// eslint-disable-next-line no-unused-vars
import { Outlet, Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Nav from './component/Nav';
import DoctorsPage from './pages/DoctorsPage';
import Home from './pages/Home';

import Error from './pages/Error';
import DashLayout from './dashboard/DashLayout';
import HomeDash from './dashboard/HomeDash';
import DoctorApp from './dashboard/DoctorAPP';
import LabApp from './dashboard/LabApp';
import PharmcyApp from './dashboard/PharmcyApp';
import Patient from './dashboard/Patient';
import Neurology from './pages/Neurology';
import Ophthalmology from './pages/Ophthalmology';
import Dermatology from './pages/Dermatology';
import Gastroenterology from './pages/Gastroenterology';

import Pediatrics from './pages/Pediatrics';
import Nephrology from './pages/Nephrology';
import Cardiology from './pages/Cardiology';
import Gynecology from './pages/Gynecology';
import Oral_dental from './pages/Oral_dental ';
import LabPage from './pages/LabPage';
import Pharmacy from './pages/Pharmacy';
import Pat_log from './pages/Pat_log';
import Patient_SignUp from './pages/Patient_signUp';
import Doc_log from './pages/Doc_log';
import Doc_SignUp from './pages/Doc_signUp';
import Lab_log from './pages/Lab_log';
import Lab_SignUp from './pages/lab_signUp';
import Pharm_log from './pages/Pharm_log';
import Pharmacy_SignUp from './pages/pharm_signUp';
import FeadBackData from './pages/feadBackPage';
import FeedbackPageContact from './pages/feadbackcontact';
import AppChat from './pages/App';
import HospitalHomePage from './pages/HospitalPage';
import Login_page from './component/loginPage';
import SignUp_Page from './component/signUpPage';
// eslint-disable-next-line no-unused-vars
import HomeScreen from './component/homePage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />} >
    <Route index element={<HomeScreen />} />
    <Route path='/doctors' element={<DoctorsPage />}>
      {/* <Route index element={<Test/>}/> */}

    </Route>
    <Route path="/HomeScreen" element={<HomeScreen />} />
    <Route path="/Home" element={<Home/>} />

    <Route path="/neurology" element={<Neurology />} />

    <Route path="/ophthalmology" element={<Ophthalmology />} />
    <Route path="/Dermatology" element={<Dermatology />} />
    <Route path="/Gastroenterology" element={<Gastroenterology />} />
    <Route path='/Pediatrics' element={<Pediatrics />} />
    <Route path='/Nephrology' element={<Nephrology />} />
    <Route path='/Cardiology' element={<Cardiology />} />
    <Route path='/Gynecology' element={<Gynecology />} />
    <Route path='/Oral_dental' element={<Oral_dental />} />

    <Route path='/lab' element={<LabPage />} />
    <Route path='/pharmacy' element={<Pharmacy />} />
    
    <Route path='/Pat_log' element={<Pat_log />} />
    <Route path='/Patient_SignUp' element={<Patient_SignUp/>} />

    <Route path='/Doc_log' element={<Doc_log />} />
    <Route path='/Doc_SignUp' element={<Doc_SignUp />} />

    <Route path='/lab_log' element={<Lab_log />} />
    <Route path='/Lab_SignUp' element={<Lab_SignUp/>} />

    <Route path='/pharm_log' element={<Pharm_log />} />
    <Route path='/Pharmacy_SignUp' element={<Pharmacy_SignUp />} />

    <Route path='/FeadBackData' element={<FeadBackData />} />

    <Route path='/FeedbackPageContact' element={<FeedbackPageContact />} />

    <Route path='/AppChat' element={<AppChat />} />
    <Route path='/HospitalHomePage' element={<HospitalHomePage />} />
    <Route path='/Login_page' element={<Login_page />} />
    <Route path='/SignUp_Page' element={<SignUp_Page />} />


    
    <Route path="*" element={<Error />} />
    <Route path='/dashboard' element={<DashLayout />}>
      <Route index element={<HomeDash />} />
      <Route path='doctorapp' element={<DoctorApp />} />
      <Route path='labapp' element={<LabApp />} />
      <Route path='pharmacyapp' element={<PharmcyApp />} />
      <Route path='Patient' element={<Patient />} />

    </Route>

  </Route>

))

function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
function App() {
  return (


    <RouterProvider router={router} />

    // <div>
    //   <Nav/>
    //   <Header/>
    // <Home/>
    // <DoctorsPage/>
    // <Footer/>
    // </div>


  );
}

export default App;
