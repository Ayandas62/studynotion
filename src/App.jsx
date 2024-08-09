import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Navbar from './component/common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import VerifyEmail from './pages/VerifyEmail';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Myprofile from './component/core/Dashboard/Myprofile';
import Error from './pages/Error';
import Setting from './component/core/Dashboard/Setting';
import EnrolledCourse from './component/core/Dashboard/EnrolledCourse';
import AddCourse from './component/core/Dashboard/AddCourse';

function App() {
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/update-password/:id' element={<UpdatePassword/>} />
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route element={<Dashboard/>}>
          <Route path='/dashboard/my-profile' element={<Myprofile/>} />
          <Route path='/dashboard/setting' element={<Setting/>} />
          <Route path='/dashboard/enrolled-courses' element={<EnrolledCourse/>} />
          <Route path='/dashboard/add-course' element={<AddCourse/>}/>

        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
