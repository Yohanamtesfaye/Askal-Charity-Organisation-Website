import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/askallogo.jpg';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='font-meri'>
      <div>
        <AiOutlineMenu size={24} onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden text-red-600"/>
        <div className='pl-4 sm:hidden'>
          <img src={logo} width={'50px'} alt="logo" />
        </div>
        {
          nav ?
          <div className='max-md:mb-[500px]'>
            <div onClick={handleNav} className="fixed w-full flex flex-col justify-center items-center bg-white">
              <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
                <Link to='/' onClick={handleNav}><span className="hover:underline text-red-500 font-bold">Home</span></Link>
              </div>
              <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
                <Link to='/aboutus' onClick={handleNav}><span className="hover:underline text-red-500 font-bold">About Us</span></Link>
              </div>
              <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
                <Link to='/gallery' onClick={handleNav}><span className="hover:underline text-red-500 font-bold">Gallery</span></Link>
              </div>
              <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
                <Link to='/contactus' onClick={handleNav}><span className="hover:underline text-red-500 font-bold">Contact Us</span></Link>
              </div>
              <div className="relative group shadow-xl p-4 rounded-2xl w-56 m-2 text-center">
                <div className="hover:underline text-red-500 font-bold">Become a Family</div>
                <div className="absolute bg-white w-full text-center text-red-500 shadow-lg rounded-md py-2 px-4 hidden group-hover:block">
                  <ul>
                    <li><Link to='/registervolunteer' onClick={handleNav} className='hover:underline'>Volunteer</Link></li>
                    <li><Link to='/registermember' onClick={handleNav} className='hover:underline'>Member</Link></li>
                    <li><Link to='/registerpartner' onClick={handleNav} className='hover:underline'>Partner</Link></li>
                    <li><Link to='/registersupporter' onClick={handleNav} className='hover:underline'>Supporter</Link></li>
                  </ul>
                </div>
              </div>
              <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
                <Link to='/donate' onClick={handleNav}><span className="hover:underline text-red-500 font-bold">Donate</span></Link>
              </div>
            </div>
          </div> : ''
        }
        <div className='hidden md:flex justify-between px-8 bg-white shadow-lg rounded-lg'>
          <div>
            <img src={logo} width={'70px'} alt="logo" />
          </div>
          <div className='flex justify-center items-center space-x-8'>
            <div className='hover:underline hover:text-red-600 font-bold p-0'><Link to='/'>Home</Link></div>
            <div className='hover:underline hover:text-red-600 font-bold p-0'><Link to='/aboutus'>About Us</Link></div>
            <div className='hover:underline hover:text-red-600 font-bold'><Link to='/gallery'>Gallery</Link></div>
            <div className='hover:underline hover:text-red-600 font-bold'><Link to='/contactus'>Contact Us</Link></div>
            <div className="relative group">
              <div className='border-red-600 border text-red-500 font-bold'>
                <div className='py-2 px-10 bg-red-500 text-white hover:bg-red-700'>Become A Family</div>
                <div className="absolute bg-white w-full text-center text-red-500 shadow-lg rounded-md py-2 px-4 hidden group-hover:block z-50">
                  <ul>
                    <li><Link to='/registervolunteer' className='hover:underline text-red-500'>Volunteer</Link></li>
                    <li><Link to='/registermember' className='hover:underline text-red-500'>Member</Link></li>
                    <li><Link to='/registerpartner' className='hover:underline text-red-500'>Partner</Link></li>
                    <li><Link to='/registersupporter' className='hover:underline text-red-500'>Supporter</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='border bg-green-600 text-white py-4 px-8 font-bold rounded-md hover:border-green-600 hover:bg-white hover:text-green-600'>
              <Link to='/donate'>Donate</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
