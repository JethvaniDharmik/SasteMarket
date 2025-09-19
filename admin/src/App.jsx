import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard'
import AllApointments from './pages/Admin/AllApointments'
import AddServices from './pages/Admin/AddServices'
import ServicesList from './pages/Admin/ServicesList'
import { ServicesContext } from './context/ServicesContext'
import ServicesDashborad from './pages/Services/ServicesDashborad'
import ServicesAppointment from './pages/Services/ServicesAppointment'
import ServicesProfile from './pages/Services/ServicesProfile'

const App = () => {
  const {aToken} = useContext(AdminContext)
  const {sToken} = useContext(ServicesContext)
  
  return  aToken || sToken ?(
    <div className='bg-[#F8F9FD]'>
       <ToastContainer />
       <Navbar />
       <div className='flex items-start'>
        <Sidebar />
        <Routes>
          {/* Admin Route */ }
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-apointments' element={<AllApointments />} />
          <Route path='/add-services' element={<AddServices />} />
          <Route path='/services-list' element={<ServicesList />} />
          
          {/* Services Route */}
          <Route path='/services-dashborad' element={<ServicesDashborad />} />
          <Route path='/services-appointments' element={<ServicesAppointment />} />
          <Route path='/services-profile' element={<ServicesProfile />} />
          
        </Routes>
       </div>
    </div>
  ):(
    <>
    <Login />
    <ToastContainer />
    </>
  )
}

export default App
