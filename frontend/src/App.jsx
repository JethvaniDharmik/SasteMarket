// this file used for link to all pages or componets 
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Services from './pages/services'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
     {/* thay both of tham are components */}
      <ToastContainer />
      <Navbar />
      {/* thay all routes link multipal link to each to other  */}
      {/* and router use for without load any page move to next page  */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:speciality" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/my-appointments" element={<MyAppointments />} />
      <Route path="/appointment/:serId" element={<Appointment />} />
      </Routes>
    {/* also one components */}
      <Footer />
    </div>
  )
}

export default App
