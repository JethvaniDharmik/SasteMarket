import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Services = () => {

const { speciality } = useParams()
const [filterSer,setFilterSer] = useState([])
const [showFilter, setShowFilter] = useState(false)
const navigate = useNavigate()
const {Services} = useContext(AppContext)

const applyFilter  = () => {
  if (speciality) {
    setFilterSer(Services.filter(ser => ser.speciality === speciality))
  }else{
    setFilterSer(Services)
  }
}
useEffect(()=>{
  applyFilter()
},[Services,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the services specialist. </p>
          <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
          <div className={`flex flex-col gap-4 text-sm text-gray-600  ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
            <p onClick={()=> speciality === 'Plumber' ? navigate('/services') : navigate('/services/Plumber')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Plumber" ? "bg-primary text-black" : "" }`}>Plumber</p>
            <p onClick={()=> speciality === 'Painter' ? navigate('/services') : navigate('/services/Painter')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Painter" ? "bg-primary text-black" : "" }`}>Painter</p>
            <p onClick={()=> speciality === 'Carpenter' ? navigate('/services') : navigate('/services/Carpenter')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Carpenter" ? "bg-primary text-black" : "" }`}>Carpenter</p>
            <p onClick={()=> speciality === 'Electricaion' ? navigate('/services') : navigate('/services/Electricaion')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Electricaion" ? "bg-primary text-black" : "" } `}>Electricaion</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
              filterSer.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-100' src={item.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500 '>
                        <p className='w-2 h-2 bg-green-500 rounded-full '></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>

        ))
            }
          </div>
          </div>

    </div>
  )
}

export default Services
