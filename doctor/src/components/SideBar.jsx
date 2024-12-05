import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets_admin/assets.js'
import { DoctorContext } from '../Context/DoctorContext.jsx'

function SideBar() {
    const {dToken} = useContext(DoctorContext)

  return (
    <div className='min-h-screen bg-white border-r '>
        {
            dToken && 
                <ul className='text-{#515151} mt-5'>
                    <NavLink className={({isActive}) => `flex items-center gap-3 py-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-dashboard'}>
                        <img src={assets.home_icon} alt="" />
                        <p className='hidden md:block'>Dashboard</p>
                    </NavLink>

                    <NavLink className={({isActive}) => `flex items-center gap-3 py-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-appointments'}>
                        <img src={assets.appointment_icon} alt="" />
                        <p className='hidden md:block'>Appointments</p>
                    </NavLink>

                    <NavLink className={({isActive}) => `flex items-center gap-3 py-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-profile'}>
                        <img src={assets.people_icon} alt="" />
                        <p className='hidden md:block'>Profile</p>
                    </NavLink>
                </ul>
        }
    </div>
  )
}

export default SideBar