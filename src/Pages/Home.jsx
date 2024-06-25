import React from 'react'
import Slides from '../Components/Slides'
import teach from '../assets/teach.jpg'
import basic from '../assets/basic.jpg'
import talent from '../assets/introimg12.jpg'
import health from '../assets/health.png'
import CountUp from 'react-countup';
import { BsDot } from 'react-icons/bs';
import artevent from '../assets/art-event.jpg'
import artevent2 from '../assets/art-event-2.jpg'
import trip from '../assets/trip.jpg'
import shoehine from '../assets/shoehine.jpg'
import Gift from '../assets/Gift.jpg'
import training from '../assets/training.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Slides/>
         {/* objective */}
      <div className=' p-10 px-20  rounded-xl my- lg:mx-10'> 
        <hr style={{ width: '10%', margin: '0px auto 0px', border: '2px solid green' }} />
        <h1 className='text-center text-5xl font-serif mt-5 font-medium'>Askal's Objective</h1>
        <p className='text-md text-center py-2 leading-8 text-gray-800 font-serif'>
        We don’t wait for the children, who are the future guardians, to merely survive. By sharing our resources, we safeguard their lives from danger 
        and empower them to become vital citizens of our country, Ethiopia.
        </p>
        <hr style={{ width: '10%', margin: '10px auto 0px', border: '2px solid green' }} />
      </div>
      {/* services */}
      <div >
      <div className='bg-gray-50 py-2'>
    <h3 className='text-3xl pt-2 text-center text-gray-900 font-serif font-extralight'>What We Do</h3>
    <div className='lg:grid grid-cols-1 my-8 font-serif lg:mx-10 md:grid-cols-3 gap-5 '>
      <div className='shadow-lg p-10 max-md:m-5 rounded-xl bg-white transform transition-transform duration-500 hover:scale-110'>
        <img src={basic} width={200} className='mt-5 max-w-full max-h-full mx-auto '/>
        <h3 className='text-lg font-bold py-2 text-green-500 mt-7'>Basic needs</h3>
        <p>We offer essential support to families in need, ensuring they have access to basic necessities.</p>
      </div>
      <div className='shadow-lg p-10 rounded-xl max-md:m-5 bg-white transform transition-transform duration-500 hover:scale-110'>
        <img src={health} width={200} className='max-w-full max-h-full mx-auto transform transition-transform duration-500 hover:scale-110'/>
        <h3 className='text-lg font-bold py-2 text-green-500'>Health</h3>
        <p>We provide immediate health assistance to children and their parents in need. We are dedicated to support families with urgent medical care.</p>
      </div>
      <div className='shadow-lg p-10 rounded-xl max-md:m-5 bg-white transform transition-transform duration-500 hover:scale-110'>
        <img src={teach} width={200} className='max-w-full max-h-full mx-auto transform transition-transform duration-500 hover:scale-110'/>
        <h3 className='text-lg font-bold py-2 text-green-500'>Teach</h3>
        <p>
          Every Saturday throughout the school year and Monday to Friday in the summer, Askal provides a group of dedicated volunteers who spend their time teaching children.
        </p>
      </div>
    </div>
    <div className='lg:grid grid-cols-2 my-8 font-serif lg:mx-10 md:grid-cols-3 gap-5 justify-center'>
      <div className='shadow-lg p-10 rounded-xl max-md:m-5 bg-white transform transition-transform duration-500 hover:scale-110'>
        <img src={talent} width={200} className='max-w-full max-h-full mx-auto transform transition-transform duration-500 hover:scale-110'/>
        <h3 className='text-lg font-bold py-2 text-green-500'>Talent</h3>
        <p>
          Askal is committed to nurturing children's talents by conducting a two month summer camp which is mainly focused on developing talent.
        </p>
      </div>
      <div className='shadow-lg p-10 rounded-xl max-md:m-5 bg-white transform transition-transform duration-500 hover:scale-110'>
        <img src={training} width={200} className='max-w-full max-h-full mx-auto transform transition-transform duration-500 hover:scale-110'/>
        <h3 className='text-lg font-bold py-2 text-green-500'>Life Training</h3>
        <p>
          Askal provides life training for parents and adults, focusing on nurturing and developing children. Our programs emphasize raising well-rounded, confident kids.
        </p>
      </div>
    </div>
  </div>

    
    {/* impact */}
      <p className='text-center p-5 text-3xl font-bold font-cinz'>Impact</p>
      <div className='flex justify-center space-x-20 my-10 font-meri px-3 m-5 '>
        <div>
          <CountUp end={700} className='lg:text-6xl max-md:text-3xl font-bold '/> <p className='lg:text-6xl max-md:text-2xl inline-block'>+</p>
          <hr style={{ width: '100%', margin: '10px auto 10px', border: '2px solid green' }} />
          <p className='lg:text-xl'>People Helped</p>
        </div>
        <div>
          <CountUp end={15} className='lg:text-6xl max-md:text-3xl font-bold'/> <p className='lg:text-6xl max-md:text-3xl inline-block'>+</p>
          <hr style={{ width: '100%', margin: '10px auto 10px', border: '2px solid green' }} />
          <p className='lg:text-xl'>Events Organized</p>
        </div>
        <div>
         <CountUp end={85} className='lg:text-6xl max-md:text-3xl font-bold'/> <p className='lg:text-6xl max-md:text-3xl inline-block'>%</p>
          <hr style={{ width: '100%', margin: '10px auto 10px', border: '2px solid green' }} />
          <p className='lg:text-xl'>Effectiveness</p>
        </div>
      </div>
      <div className='flex justify-center'>
          <div className='bg-green-700 w-64 text-center font-bold '>70%</div>
          <div className='bg-yellow-400 w-24 text-center font-bold '>30%</div>
        </div>
       <div className='flex justify-center mr-28 text-green-700'><BsDot size={60} /> <p className='inline text-black mt-4 font-medium'>Children</p></div>
       <div className='flex justify-center text-yellow-400'><BsDot size={60} /> <p className='inline text-black mt-4 font-medium'>Adults & Senior Citizens</p></div>
       <p className='text-center text-sm text-gray-500'>Updated july 2024</p>
      </div>
       {/* Events */}
       <div className='bg-gray-50 pb-10'>
       <div className=''>
          <h3 className='text-3xl pt-5 text-center text-gray-900 font-serif font-extralight '>Events</h3>
            </div>
            <div className='lg:flex gap-7 my-2 lg:mx-20 '>
            <Link to='/eventdescription/1' className=' shadow-lg p-10 rounded-xl bg-white max-md:m-5 transform transition-transform duration-500 hover:scale-110 '>
                <div className='max-w-full max-h-full mx-auto mr-10'>
                   <img src={artevent}   className='mt-5 max-w-full max-h-full mx-auto  transform transition-transform duration-500 hover:scale-110' />
                </div>
                <div>
                  <h3 className='text-lg font-medium pt-8 text-teal-600'>Art Event</h3>
                  <p className='text-md  leading-8 text-gray-800  font-serif '>
                  One of many art events organized at Global Hotel on Janurary 21, 2020.
                  </p>
                </div>
              </Link>   
              <Link to='/eventdescription/2' className=' shadow-lg p-10 rounded-xl bg-white max-md:m-5 transform transition-transform duration-500 hover:scale-110 '>
                <div className='max-w-full max-h-full mx-auto mr-10'>
                   <img src={artevent2} className='mt-5 max-w-full max-h-full mx-auto  transform transition-transform duration-500 hover:scale-110'  />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-teal-600 mt-10'>Led the first sign language led art event in Ethiopia</h3>
                  <p className='text-md leading-8 text-gray-800 y-800 font-serif'>
                  Using sign language, On May 5 2022, Askal organized an art event for the hearing-impared.
                  </p>
                </div>
              </Link>   
              <Link to = '/eventdescription/6'className=' shadow-lg p-10 rounded-xl bg-white max-md:m-5 transform transition-transform duration-500 hover:scale-110 '>
                <div className='max-w-full max-h-full mx-auto mr-10'>
                   <img src={trip}   className='mt-5 max-w-full max-h-full mx-auto  transform transition-transform duration-500 hover:scale-110' />
                </div>
                <div>
                  <h3 className='text-lg font-medium  text-teal-600 mt-5'>Educational Trip for Children</h3>
                  <p className='text-md leading-8 text-gray-800 y-800 font-serif'>
                  Askal coordinated educational trips for children we instructed during the summer of 2019
                  </p>
                </div>
              </Link>   
              <Link to='/eventdescription/4' className=' shadow-lg p-10 rounded-xl bg-white max-md:m-5 transform transition-transform duration-500 hover:scale-110 '>
                <div className='max-w-full max-h-full mx-auto mr-10'>
                   <img src={shoehine}   className='mt-5 max-w-full max-h-full mx-auto  transform transition-transform duration-500 hover:scale-110' />
                </div>
                <div>
                  <h3 className='text-lg font-medium  text-teal-600 mt-5'>Shoe Cleaning Fundraiser</h3>
                  <p className='text-md leading-8 text-gray-800 font-serif'>
                   On the year 2019, with the motto, "We knelt down, so the future can stand tall," we cleaned shoes for fundraising
                  </p>
                </div>
              </Link>   
            </div>
       </div>
    {/* Gift */}
    <div className="relative w-full max-w-full max-h-full">
  <img src={Gift} alt="Gift" className="w-full h-1/2 lg:h-auto object-cover" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 lg:p-10">
    <p className="text-white">
      <span className='text-2xl lg:text-4xl font-bold mb-4 lg:mb-10 block'>Make a Gift Today</span>
      <span className='text-base lg:text-2xl'>
        With Askal, you can make a <br /> contribution to an established <br />fund dedicated to children <br /> who need your support.
      </span>
    </p>
    <Link to='/donate' className='border bg-green-600 text-white mt-4 lg:mt-10 py-2 px-6 lg:py-4 lg:px-24 font-bold rounded-md hover:border-green-600 hover:bg-white hover:text-green-600'>
      Donate Now
    </Link>
  </div>
</div>


    </div>
  )
}

export default Home