import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className='font-meri '>
      <div className='bg-gray-200  p-4  text-center font-bold text-5xl'> <h1>Contact Us </h1></div>
      <div className='lg:flex lg:m-12 shadow-2xl rounded-2xl'>
      <div className='bg-customGreen text-white lg:p-8  my-3 px-2 lg:w-1/2 rounded-2xl'>
        <h1 className='text-4xl font-bold mb-8'>Get in Touch</h1>
        <div className='space-y-6'>
          <div className='flex items-center space-x-4'>
            <MdEmail className='text-3xl' />
            <div>
              <p className='text-xl font-bold pt-2'>Email us</p>
              <p className='text-yellow-300'>askalcharityassociation@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <FaMapMarkerAlt className='text-3xl' />
            <div>
              <p className='text-xl font-bold pt-2'>Address</p>
              <p>
              Saris,adey abeba,around total gas station "dawi" bulding 2nd floor, Addis Ababa, Ethiopia              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <FaPhone className='text-3xl' />
            <div>
              <p className='text-xl font-bold pt-2'>Call us</p>
              <p className='text-yellow-300'>+251 90 240 4444</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <FaClock className='text-3xl' />
            <div>
              <p className='text-xl font-bold pt-2'>Office hours</p>
              <p>Monday to Sunday, 9:00 A.M. to 7:00 P.M.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white lg:p-8 p-4  lg:w-1/2'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='fullName' className='block text-lg font-medium text-gray-700'>Full Name</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
              placeholder='Enter your full name'
              
            />
          </div>
          <div>
            <label htmlFor='phoneNumber' className='block text-lg font-medium text-gray-700'>Phone Number</label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
              placeholder='Enter a valid phone number'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Email Address</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
              placeholder='Enter a valid email address'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message</label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
              placeholder='Enter your message'
              rows='4'
            ></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='bg-customGreen text-white py-2 px-4 rounded-md w-full hover:bg-green-700 transition duration-300'
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;

