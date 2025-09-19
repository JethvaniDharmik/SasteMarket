// THis file for check ny employ are avelible 
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedServices from '../components/RelatedServices'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const {serId} = useParams() 
  const {Services,currencySymbol, backendUrl, token, getServicesData} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [serInfo,setSerInfro] = useState(null)
  const [serSlots,setSerSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')

  const navigate = useNavigate()


  const fetchSerInfo = async () => {
    const serInfo  = Services.find(ser => ser._id === serId)
    setSerInfro(serInfo)
    
     }

  const gateAvailableSlots = async () =>{
    setSerSlots([])

     // getting current date
     let today = new Date()
     for (let i = 0; i < 7; i++) {
      // getting date with index 
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)


        if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }//if/else
            let timeSlots = [];


            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })


                let day = currentDate.getDate()
                let month = currentDate.getMonth()+1
                let year = currentDate.getFullYear()
               
                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = serInfo.slots_booked[slotDate] && serInfo.slots_booked[slotDate].includes(slotTime) ? false  : true
                 if (isSlotAvailable) {
                   // Add slot to array
              timeSlots.push({
                datetime: new Date(currentDate),
                time: formattedTime
            })
            
                 }
          
             
              // Increment current time by 30 minutes
              currentDate.setMinutes(currentDate.getMinutes() + 30);
            
            
              }//while
              setSerSlots(prev => ([...prev, timeSlots]))
    
    }// for





  }//gateAvailableSlots


  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try {
      const date = serSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year
      
      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', {serId, slotDate, slotTime }, {headers:{token}})
      if (data.success) {
        toast.success(data.message)
        getServicesData()
        navigate('/my-appointments')
      }else{
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }

  useEffect(()=>{
    fetchSerInfo()
  },[Services,serId])

  useEffect(() =>{
    gateAvailableSlots()
  },[serInfo])

  useEffect(()=>{
    console.log(serSlots);
    },[serSlots])

  return serInfo && (
    <div>
      {/* ---------- Services Details ----------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={serInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
           {/* ----- Ser Info : name, degree, experience ----- */}
           <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>
            {serInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
            </p>
            <div className='flex items-center gap-2 mt-1 text-gray-600'>
              <p>
                {serInfo.speciality}
              </p>
              <button className='py-0.5 px-2 border text-xs rounded-full'>{serInfo.experience}</button>
            </div>
             {/* ----- Ser About ----- */}
             <div>
              <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About <img className='w-3' src={assets.info_icon} alt="" /></p>
              <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{serInfo.about}</p> 
             </div>
             <p className='text-gray-600 font-medium mt-4'>
              Appointment fees : <span className='text-gray-800'>{currencySymbol}{serInfo.fees}</span>
             </p>
        </div>
      </div>
      
 {/* Booking slots */}
 <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
           <p >Booking slots</p>
           <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {
              serSlots.length && serSlots.map((items,index)=>(
                <div onClick={()=> setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-[#DDDDDD]'}`}>
                   <p>{items[0] && daysOfWeek[items[0].datetime.getDay()]}</p>
                  <p>{items[0] && items[0].datetime.getDate()}</p>
                        
                </div>
             ))
            }
           </div>
           {/*Time Slot*/}
            <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
              {
                serSlots.length && serSlots[slotIndex].map((items,index)=>(
                  <p onClick={()=>setSlotTime(items.time)} key={index} className={`text-sm font-light flex-shrink-0 py-2 px-5 rounded-full cursor-pointer ${items.time === slotTime ? 'bg-primary text-white' :'text-gray-400 border border-gray-300' } `}>
                    {items.time.toLowerCase()}
                  </p>
                ))
              }
            </div>
            {/* Booking Button */}
            <div>
              <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'>Book an appointment</button>
            </div>
</div>
              {/* Listing Releated Services */}
              <RelatedServices serId={serId} speciality={serInfo.speciality} />

    </div>
  )
}

export default Appointment
