import React from 'react'
import { useContext } from 'react'
import { ServicesContext } from '../../context/ServicesContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { AdminContext } from '../../context/AdminContext'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const ServicesProfile = () => {
   const { sToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(ServicesContext)
    

    const updateProfile = async () => {

       try {
        
        const updateData = {
          available: profileData.available
        }

        const {data } = await axios.post(backendUrl + '/api/services/updare-profile', updateData,{headers:{sToken}})
         if (data.success) {
          toast.success(data.message)
          setIsEdit(false)
          getProfileData()
         }else{
          toast.error(data.message)
         }

       } catch (error) {
        toast.error(error.message)
        console.log(error)
        
       }

    }
   
   const [isEdit, setIsEdit] = useState(false)
    useEffect(()=>{
     if (sToken) {
       getProfileData()
     }
   },[sToken])
  
  return profileData && (
    <div>
      <div className='flex gap-1 pt-2'>
      <input onChange={()=> isEdit && setProfileData(prev => ({...prev,available: !prev.available})) } checked={profileData.available} type="checkbox" name="" id="" />
      <label htmlFor="">Available</label>
      </div>
      {
        isEdit
        ?<button onClick={updateProfile } className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save</button>
        :<button onClick={()=>setIsEdit(true) } className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
      }
      
      
    </div>
  )
}

export default ServicesProfile
