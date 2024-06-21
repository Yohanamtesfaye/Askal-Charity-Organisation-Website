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
    <div>
      <div>
      <AiOutlineMenu size={24} onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden text-red-600"/>
      <div className='pl-4  sm:hidden'>
          <img src={logo} width={'50px'} alt="" />
          </div>
      {
        nav?
        <div>
          
          <div onClick={handleNav} className="fixed w-full  flex flex-col justify-center items-center  bg-white">
          
          <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
          <a href=""> <span className="hover:underline text-red-500 font-bold ">Home</span></a>

          </div>
          <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
          <a href="" onClick={handleNav} ><span className="hover:underline text-red-500 font-bold  ">About Us</span></a>

          </div>
          <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
          <a href="" onClick={handleNav}  ><span className="hover:underline text-red-500 font-bold ">Gallery</span></a>

          </div>
          <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
          <a href="" onClick={handleNav}><span className="hover:underline text-red-500 font-bold ">Contact Us</span></a>

          </div>
          <div class="relative group">
          <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
          <a href="" onClick={handleNav}><span className="hover:underline text-red-500 font-bold ">Become a Family</span></a>
          <div class="absolute bg-white w-full text-center text-red-500 shadow-lg rounded-md py-2 px-4 hidden group-hover:block">
                <ul>
                  <li><a href="/" className='hover:underline'>Volunteer</a></li>
                  <li><a href="/" className='hover:underline'>Member</a></li>
                </ul>
              </div>
          </div>
          </div>
          <div className='shadow-xl p-4 rounded-2xl w-56 m-2 text-center'>
          <a href="" onClick={handleNav} ><span className="hover:underline text-red-500 font-bold ">Donate</span></a>

          </div>
      </div> 
        </div>
         :
        ''//empty
      }
          <div className='hidden md:flex justify-between px-8  bg-white shadow-lg rounded-lg'>
            <div>
              <img src={logo} width={'70px'} alt="" />
            </div>
            <div className='flex justify-center items-center space-x-8'>
              <div className='hover:underline hover:text-red-600 font-bold p-0'><Link to='/' >Home</Link></div> 
              <div className='hover:underline hover:text-red-600 font-bold p-0'><Link to='/aboutus'  >About Us</Link></div>
              <div className='hover:underline hover:text-red-600 font-bold'> <Link to='/gallery' >Gallery</Link></div>
              <div className='hover:underline hover:text-red-600 font-bold '> <Link to='/contactus'  >Contact Us</Link></div>
              <div class="relative group">
              <div className='border-red-600 border text-red-500 font-bold '><Link to='/' ><div className=' py-2 px-10 hover:bg-red-500 hover:text-white '>
               Become A Familiy</div></Link></div> 
              <div class="absolute bg-white w-full text-center text-red-500 shadow-lg rounded-md py-2 px-4 hidden group-hover:block">
                <ul>
                  <li><a href="/" className='hover:underline'>Volunteer</a></li>
                  <li><a href="/" className='hover:underline'>Member</a></li>
                </ul>
              </div>
            </div>
              
              <div className='border bg-green-600 text-white  py-4 px-8 font-bold rounded-md hover:border-green-600 hover:bg-white hover:text-green-600 '><Link to='/donate' className=''>Donate</Link></div>
            </div>

      </div>
      
      
    </div>
    </div>
   
  )
}

export default Navbar