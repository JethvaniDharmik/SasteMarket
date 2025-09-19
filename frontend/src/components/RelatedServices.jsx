import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedServices = ({speciality,serId}) => {
     
    const {Services} = useContext(AppContext)
    const navigate = useNavigate()

    const [relSer,setRelSer] = useState([])



useEffect(()=>{
    if (Services.length > 0 && speciality) {
        const servicesData = Services.filter((ser)=> ser.speciality === speciality && ser._id !== serId) 
        setRelSer(servicesData)
    }
},[Services,speciality,serId])

 return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
    <h1 className='text-3xl font-medium'>Top Services to Book</h1>
    <p className='sm:w-1/3 text-center text-sm'>Simply browse our extensive list of trusted services.</p>
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
      {relSer.slice(0,2).map((item,index)=>(
          <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-blue-100' src={item.image} alt="" />
              <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                      <p className='w-2 h-2 bg-green-500 rounded-full '></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
          </div>

      ))}
    </div>
    <button onClick={()=>{navigate('/services'); scrollTo(0,0)}} className='bg-[#9400d3] text-white px-12 py-3 rounded-full mt-10'>more</button>
  </div>
  )
}

export default RelatedServices
