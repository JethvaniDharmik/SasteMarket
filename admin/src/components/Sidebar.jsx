import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ServicesContext } from '../context/ServicesContext'

const Sidebar = () => {
   
    const {aToken} = useContext(AdminContext)
    const {sToken} = useContext(ServicesContext)
  
    return (
    <div className='min-h-screen bg-white border-r'>
    {
        aToken && <ul className='text-[#515151] mt-5'>

        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
        </NavLink>
       
        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/all-apointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointment</p>
        </NavLink>
        
        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/add-services'}>
            <img src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Services</p>
        </NavLink>
      
        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/services-list'} >
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Services List</p>
        </NavLink>


        </ul>
    }


{
        sToken && <ul className='text-[#515151] mt-5'>

        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/services-dashborad'}>
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
        </NavLink>
       
        <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/services-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointment</p>
        </NavLink>
        
        
      
       


        </ul>
    }
   
    </div>
  )
}

export default Sidebar
