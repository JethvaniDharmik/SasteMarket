import React from 'react'
import { useContext } from 'react'
import { ServicesContext } from '../../context/ServicesContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const ServicesAppointment = () => {
  
  const { sToken, appointments, getAppointments, completeAppointment, cancelAppointment, } = useContext(ServicesContext)  

  useEffect(()=>{
    if (sToken) {
      getAppointments()
    }
  },[sToken])
  
  return (
    <div className='w-full max-w-6xl m-5 '>
      
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll' >
        <div className='max-sm:hidden grid grid-cols-[0.5fr_3fr_3fr_3fr_1.75fr] gap-1 py-3 px-6 border-b'>
          <p>#</p>
          <p>Customer</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
          
        </div>
    {
      appointments.reverse().map((item,index)=>(
        <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_3fr_3fr_2.75fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' key={index}>
          <p className='max-sm:hidden'>{index+1}</p>
          <div className='flex items-center gap-2'>
            <img src={item.userData.image} className='w-8 rounded-full' alt="" /><p>{item.userData.name}</p>
          </div>
          
            <p >{item.slotDate}, {item.slotTime}</p>
            <p> ₹{item.amount}</p>
            {
              item.cancelled
              ? <p className='text-red-400 text-xs font-medium'>Cancelled</p> 
              : item.isCompleted 
              ? <p className='text-green-500 text-xs font-medium'>Completed</p>    
              :  <div className='flex' >
              <img onClick={()=>cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
              <img onClick={()=>completeAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
           </div>
                }
           
        </div>
      ))
    }
    
    
      </div>


    </div>
  )
}

export default ServicesAppointment
