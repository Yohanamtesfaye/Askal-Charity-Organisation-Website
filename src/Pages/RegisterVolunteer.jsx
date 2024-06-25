import React, { useState } from 'react';

function RegisterVolunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    age: '',
    gender: '',
    role: '',
    message: '',
    volunteerExperience: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add logic for form submission here
  };

  return (
    <div className='font-meri'>
      <div>
        <div className='bg-gray-200 p-4 text-center font-bold text-5xl'>
          <h1>Become a Volunteer</h1>
        </div>
        <hr className="border-t-4 border-green-500 w-44 mx-auto mb-4 mt-6" />
        <p className='mt-4 p-4 text-center text-md lg:mx-32 mb-4 justify-center text-lg'>
          If you are interested in supporting us through labor, material donations, or volunteering, we warmly welcome your assistance. Your contributions are invaluable in helping us achieve our goals.
        </p>
        <hr className="border-t-4 border-green-500 w-44 mx-auto mb-4 mt-6" />
      </div>

      <div className='lg:flex justify-center'>
        <div className='bg-white p-4 lg:p-8 lg:w-1/2'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className=''>
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
            <div className=''>
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
            <div className=''>
              <label htmlFor='age' className='block text-lg font-medium text-gray-700'>Age</label>
              <input
                type='text'
                id='age'
                name='age'
                value={formData.age}
                onChange={handleChange}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
                placeholder='Enter your age'
              />
            </div>
            <div className=''>
              <label htmlFor='role' className='block text-lg font-medium text-gray-700'>Role</label>
              <div className='flex items-center mt-1'>
                <input
                  type='radio'
                  id='student'
                  name='role'
                  value='student'
                  checked={formData.role === 'student'}
                  onChange={handleChange}
                  className='mr-2'
                />
                <label htmlFor='student' className='mr-4'>Student</label>
                <input
                  type='radio'
                  id='worker'
                  name='role'
                  value='worker'
                  checked={formData.role === 'worker'}
                  onChange={handleChange}
                  className='mr-2'
                />
                <label htmlFor='worker'>Worker</label>
              </div>
            </div>
          </form>
        </div>
        <div className='bg-white p-4 lg:p-8 lg:w-1/2'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className=''>
              <label htmlFor='message' className='block text-lg font-medium text-gray-700 mb-4'>What motivates you to be a volunteer?</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
                placeholder='Enter your motivation'
                rows='4'
              ></textarea>
            </div>
            <div className=''>
              <label htmlFor='volunteerExperience' className='block text-lg font-medium text-gray-700 mb-4'>Have you ever volunteered before? If yes, mention your experience.</label>
              <textarea
                id='volunteerExperience'
                name='volunteerExperience'
                value={formData.volunteerExperience}
                onChange={handleChange}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
                placeholder='Enter your volunteer experience'
                rows='4'
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='bg-customGreen text-white py-2 px-4 rounded-md w-full hover:bg-green-700 transition duration-300 mt-4'
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

export default RegisterVolunteer;
