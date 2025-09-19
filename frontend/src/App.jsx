// App.jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// ✅ Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'

// ✅ Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// ✅ Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ⚡ make sure you import css also

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      {/* Toast container for notifications */}
      <ToastContainer />
      
      {/* Common components */}
      <Navbar />

      {/* Routes */}
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

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
