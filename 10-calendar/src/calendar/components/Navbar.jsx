import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className='navbar-brand'>
         <i className="fa fa-calendar"></i>
         &nbsp;
         Physiodevapp
      </span>

      <button className='btn btn-outline-danger'>
        <i className='fa fa-sign-out'></i>
        <span>Logout</span>
      </button>
    </div>
  )
}
