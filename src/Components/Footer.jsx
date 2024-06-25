import React from 'react'
import { FaFacebook, FaYoutube, FaPhone, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
  
    <>
    
    <div style={{ background: 'linear-gradient(180deg, #BFF0B3 0%, #A3DBA3 100%)' }} className='bg-green-100 lg:flex items-center justify-center'>
    <div className=''>
      <div className='flex justify-center items-center space-x-8 pt-6 mt-6 lg:ml-4 p-2 text-gray-600'>
        <a href='https://www.facebook.com/profile.php?id=100068994266379' className='group hover:text-green-500'>
          <FaFacebook size={30} className='transform transition-transform duration-300 group-hover:scale-125' />
        </a>
        <a href='https://www.youtube.com/@askalcharityoffical9800' className='group hover:text-green-500'>
          <FaYoutube size={30} className='transform transition-transform duration-300 group-hover:scale-125' />
        </a>
        <a href='mailto:askalcharityassociation@gmail.com' className='group hover:text-green-500'>
          <MdEmail size={30} className='transform transition-transform duration-300 group-hover:scale-125' />
        </a>
        <a href='https://askalcharityassociation.org/tel:+251902404444' className='group hover:text-green-500'>
          <FaPhone size={30} className='transform transition-transform duration-300 group-hover:scale-125' />
        </a>
        <a href='https://t.me/Askal_Charity_volunteers' className='group hover:text-green-500'>
          <FaTelegram className='transform transition-transform duration-300 group-hover:scale-125' size={30} />
        </a>
      </div>
      <div className=''>
        <ul className='text-green flex justify-evenly m-2 my-6 '>
          <li className='py-1 hover:underline '>
            <Link to='/'>Home</Link>
          </li>
          <li className='py-1 hover:underline '>
            <Link to='/aboutus'>About Us</Link>
          </li>
          <li className='py-1 hover:underline'>
            <Link to='/contactus'>Contact Us</Link>
          </li>
          <li className='py-1 hover:underline'>
            <Link to='/gallery'>Gallery</Link>
          </li>
        </ul>
      </div>
      <div className='font-bold text-sm mx-8 lg:mx-8 text-green-900 text-center'>
        <p className='p-2'>Support Us</p>
        <ul>
          <li className='py-1'>CBE Bank Account: 1000448386377</li>
          <li className='py-1'>Become an active donor</li>
        </ul>
      </div>
    </div>
    <div className='px-4 mx-8 pb-6'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.1242755613744!2d38.7640207!3d8.960694799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b830059db1b61%3A0x5bb1f433372cad06!2sAskal%20Charity%20Association!5e0!3m2!1sen!2set!4v1719301886616!5m2!1sen!2set" ></iframe>
    </div>
  </div>
  <div className='text-green-900 bg-green-100'>
    <div className='font-bold text-sm p-6 text-center mx-8'>
      <p>Askal Charity Association</p>
      <p>Eventhough nothing we have, we share what we have</p>
      <p>&copy; Copyright 2024 Askal Charity Association</p>
    </div>
  </div>
  </>
  )
}

export default Footer