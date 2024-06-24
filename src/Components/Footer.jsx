import React from 'react'
import { FaFacebook, FaYoutube, FaPhone, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-green-200 w-full font-meri' >
       <div className='flex flex-col md:grid md:grid-cols-3 gap-4 lg:pt-32 lg:px-32 lg:mx-36 pb-8'>
        <div className='font-bold text-xs  mt-4 mx-8'>
          <p>Askal Charity Association</p>
          <p>Eventhough nothing we have, we share what we have</p>
          <p>&copy; Copyright 2024 Askal Charity Association</p>
        </div>
        <div className='flex mx-8'>
        <div className='font-bold lg:mx-8 mx-4  text-sm'>
          <p className='py-2'>Askal</p>
          <ul className='text-green-600 '>
            <li className='py-2 hover:underline '><Link to='/' >Home</Link></li>
            <li className='py-2 hover:underline '><Link to='/aboutus'  >About Us</Link></li>
            <li className='py-2 hover:underline'><Link to='/contactus'  >Contact Us</Link></li>
            <li className='py-2 hover:underline'> <Link to='/gallery' >Gallery</Link></li>
          </ul>
        </div>
        <div className='font-bold text-sm mx-4 lg:mx-8'>
            <p className='p-2'>Support Us</p>
              <ul>
                <li className='py-1'>CBE Bank Account: 1000448386377</li>
                <li className='py-1'>Become an active donor</li>
              </ul>
        </div>
        </div>
        <div className="lg:mx-6 ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.0671939036934!2d38.76078781430639!3d8.965956092443042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85fbbfe0b54f%3A0x610ea25afab8859f!2sAskal%20Charity%20Association!5e0!3m2!1sen!2set!4v1676996859338!5m2!1sen!2set" className='w-64 m-3'></iframe>
            <div className='flex justify-center items-center space-x-8 mt-6 lg:ml-4 p-2 text-customGreen'>
              <a href='https://www.facebook.com/profile.php?id=100068994266379'  className='group hover:text-green-500'> <FaFacebook size={30} className='transform transition-transform duration-300 group-hover:scale-125' /></a>
               <a href='https://www.youtube.com/@askalcharityoffical9800' className='group hover:text-green-500'>  <FaYoutube size={30} className='transform transition-transform duration-300 group-hover:scale-125' /></a>
               <a href='mailto:askalcharityassociation@gmail.com'  className='group hover:text-green-500'><MdEmail size={30} className='transform transition-transform duration-300 group-hover:scale-125' /></a>
                <a href='https://askalcharityassociation.org/tel:+251902404444'  className='group hover:text-green-500'><FaPhone size={30} className='transform transition-transform duration-300 group-hover:scale-125' /></a>
                <a href='https://t.me/Askal_Charity_volunteers' className='group hover:text-green-500'>
                <FaTelegram className='transform transition-transform duration-300 group-hover:scale-125' size={30}  />
                </a>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Footer