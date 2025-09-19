import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'

export const ServicesContext = createContext()

const ServicesContextProvider = (props) => {
    
     const backentUrl = import.meta.env.VITE_BACKEND_URL


     const [sToken, setSToken] = useState(localStorage.getItem('sToken')?localStorage.getItem('sToken'):'')

     const [appointments, setAppointments] = useState([])

     const [dashData, setDashData] = useState(false)

     const [profileData, setProfileData] = useState(false)

     const getAppointments = async () => {
        try {
            
           const {data} = await axios.get(backentUrl + '/api/services/appointments', {headers:{sToken}})
        if (data.success) {
            setAppointments(data.appointments)
            console.log(data.appointments)
            
        } else {
            toast.error(data.message)
        }

        } catch (error) {
           console.log(error);
           toast.error(error.message)
            
        }
     }


     const completeAppointment = async (appointmentId) => {
        
        try {
          
            const { data } = await axios.post(backentUrl + '/api/services/complete-appintment', {appointmentId}, {headers:{sToken}})
            if (data.success) {
                toast.success(data.message)
                getAppointments()
            }else{
                toast.error(data.message)
            }

           

        } catch (error) {
            console.log(error);
            toast.error(error.message) 
        }


     }

     const cancelAppointment = async (appointmentId) => {
        
        try {
          
            const { data } = await axios.post(backentUrl + '/api/services/cancel-appintment', {appointmentId}, {headers:{sToken}})
            if (data.success) {
                toast.success(data.message)
                getAppointments()
            }else{
                toast.error(data.message)
            }

           

        } catch (error) {
            console.log(error);
            toast.error(error.message) 
        }


     }



     const getDashData = async () => {
        try {
          
            const {data} = await axios.get(backentUrl + '/api/services/dashboard', {headers:{sToken}})
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
                
            }else{
                toast.error(data.message)
            }



        } catch (error) {
            console.log(error);
            toast.error(error.message) 
        }
     }
    
     const getProfileData = async () => {
        try {
           
            
            const {data} = await axios.get(backentUrl + '/api/services/profile', {headers:{sToken}})
            if (data.success) {
                setProfileData(data.profileData)
                console.log(data.profileData)
                
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message) 
        }
     }

    const value = {
     
     sToken,setSToken,
     backentUrl,
     appointments,
     setAppointments,
     getAppointments,
     completeAppointment,
     cancelAppointment,
     dashData,
     setDashData,
     getDashData,
     setProfileData,
     profileData,
     getProfileData

    }
    return (
        <ServicesContext.Provider value={value}> 
            {props.children}
        </ServicesContext.Provider>
    )
}

export default ServicesContextProvider