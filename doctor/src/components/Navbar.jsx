import React, { useContext } from 'react'
import {assets} from '../assets/assets_admin/assets.js'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../Context/DoctorContext.jsx';

function NavBar() {

  const {dToken,setDToken,aToken,setAToken} = useContext(DoctorContext)

  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    dToken && localStorage.removeItem('dToken');
    dToken && setDToken('');
  }
  
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
          Doctor
        </p>
      </div>

      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default NavBar