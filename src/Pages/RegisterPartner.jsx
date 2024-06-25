import React, { useState } from 'react';

function RegisterPartner() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: '',
    gender: '', // Added gender state
    amount: '', // Added amount state
    donationFrequency: '', // Added donationFrequency state
    feedbackTiming: '', // Added feedbackTiming state
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
    // Add additional logic as needed (e.g., API call to submit data)
  };

  return (
    <div className='font-meri'>
      <div>
        <div className='bg-gray-200 p-4 text-center font-bold text-5xl'>
          <h1>Become a Partner</h1>
        </div>
        <hr className="border-t-4 border-green-500 w-44 mx-auto mb-4 mt-6" />
        <p className='mt-4 p-4 text-center text-md lg:mx-32 mb-4 justify-center'>
          If you are outside of Addis Ababa and unable to attend meetings or volunteer directly, you can still support our organization by making monthly financial contributions to our bank account from your current location, either for a specified or indefinite period.
        </p>
        <hr className="border-t-4 border-green-500 w-44 mx-auto mb-4 mt-6" />
      </div>

      <div className='lg:flex justify-center'>
        <div className='bg-white p-4 lg:p-8 lg:w-1/2'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className=''>
              <label htmlFor='fullName' className='block text-lg font-medium text-gray-700'>Full Name/Organization</label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
                placeholder='Enter your full name/ Organization'
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
            <div className=''>
              <label htmlFor='gender' className='block text-lg font-medium text-gray-700'>Gender</label>
              <div className='flex items-center mt-1'>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className='mr-2'
                />
                <label htmlFor='male' className='mr-4'>Male</label>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className='mr-2'
                />
                <label htmlFor='female'>Female</label>
              </div>
            </div>
            <div className=''>
              <label htmlFor='amount' className='block text-lg font-medium text-gray-700'>Amount</label>
              <input
                type='text'
                id='amount'
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200'
                placeholder='Enter amount '
              />
            </div>
          </form>
        </div>
        <div className='bg-white p-4 lg:p-8 lg:w-1/2'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className=''>
              <label htmlFor='donationFrequency' className='block text-lg font-medium text-gray-700 mb-4'>How often will you make the specified donation?</label>
              <div className='flex flex-col mt-1'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='weekly'
                    name='donationFrequency'
                    value='weekly'
                    checked={formData.donationFrequency === 'weekly'}
                    onChange={handleChange}
                    className='mr-2 '
                  />
                  <label htmlFor='weekly' className='mr-4'>Weekly</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='biweekly'
                    name='donationFrequency'
                    value='biweekly'
                    checked={formData.donationFrequency === 'biweekly'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='biweekly' className='mr-4'>Every 15 days</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='monthly'
                    name='donationFrequency'
                    value='monthly'
                    checked={formData.donationFrequency === 'monthly'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='monthly' className='mr-4'>Monthly</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='quarterly'
                    name='donationFrequency'
                    value='quarterly'
                    checked={formData.donationFrequency === 'quarterly'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='quarterly' className='mr-4'>Every three months</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='semiannually'
                    name='donationFrequency'
                    value='semiannually'
                    checked={formData.donationFrequency === 'semiannually'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='semiannually' className='mr-4'>Every six months</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='annually'
                    name='donationFrequency'
                    value='annually'
                    checked={formData.donationFrequency === 'annually'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='annually' className='mr-4'>Annually</label>
                </div>
              </div>
            </div>

            <div className=''>
              <label htmlFor='feedbackTiming' className='block text-lg font-medium text-gray-700 mb-4'>How long will you donate?</label>
              <div className='flex flex-col mt-1'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='sixYears'
                    name='feedbackTiming'
                    value='sixYears'
                    checked={formData.feedbackTiming === 'sixYears'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='sixYears' className='mr-4'>For six years</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='oneYear'
                    name='feedbackTiming'
                    value='oneYear'
                    checked={formData.feedbackTiming === 'oneYear'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='oneYear' className='mr-4'>For one year</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='threeYears'
                    name='feedbackTiming'
                    value='threeYears'
                    checked={formData.feedbackTiming === 'threeYears'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='threeYears' className='mr-4'>For three years</label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='lifeTime'
                    name='feedbackTiming'
                    value='lifeTime'
                    checked={formData.feedbackTiming === 'lifeTime'}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <label htmlFor='lifeTime' className='mr-4'>Life time</label>
                </div>
              </div>
            </div>
            <div >
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

export default RegisterPartner;
