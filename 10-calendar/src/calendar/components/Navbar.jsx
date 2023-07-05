import React from 'react'
import { useAuthStore } from '../../hooks'


export const Navbar = () => {
  const { startLogout, user } = useAuthStore()
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className='navbar-brand'>
         <i className="fa fa-calendar"></i>
         &nbsp;
         Physiodevapp
      </span>

      <button 
        onClick={startLogout}
        className='btn btn-outline-danger'
      >
        <i className='fa fa-sign-out'></i>
        &nbsp;
        <span>Logout</span>
      </button>
    </div>
  )
}
