import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex items-center px-1'>
        <div className='flex items-center'>
          <img width="75" src="logo.png" alt="" />
          <h1 className='text-2xl font-semibold'>Admin DashBoard</h1>
        </div>
    </div>
  )
}

export default Navbar 