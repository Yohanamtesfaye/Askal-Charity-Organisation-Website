import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/askallogo.jpg';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
  const[nav,setNav] = useState(false);
  const handleNav = () =>{
    setNav(!nav);
    }
  return (
    <div className='flex justify-between px-8 pt- bg-white shadow-lg rounded-lg'>
        <div>
          <img src={logo} width={'70px'} alt="" />
        </div>
        <div className='flex justify-center items-center space-x-8'>
          <div className='hover:underline hover:text-red-600 font-bold p-0'><Link to='/' >Home</Link></div> 
          <div className='hover:underline hover:text-red-600 font-bold p-0'><Link to='/aboutus'  >About Us</Link></div>
          <div className='hover:underline hover:text-red-600 font-bold'> <Link to='/gallery' >Gallery</Link></div>
          <div className='hover:underline hover:text-red-600 font-bold '> <Link to='/contactus'  >Contact Us</Link></div>
          <div className='border-red-600 border text-red-500 font-bold '><Link to='/' ><div className=' py-2 px-10 hover:bg-red-500 hover:text-white '>Become A Familiy</div></Link></div> 
          <div className='border bg-green-600 text-white  py-4 px-8 font-bold rounded-md hover:border-green-600 hover:bg-white hover:text-green-600 '><Link to='/donate' className=''>Donate</Link></div>
        </div>
      
    </div>
  )
}

export default Navbar