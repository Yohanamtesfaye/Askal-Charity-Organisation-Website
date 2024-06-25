import React from 'react'

import family from '../assets/fam.jpg';
import friend from "../assets/friends.jpg";
import mission from "../assets/mission.png";
import recourse from "../assets/hand.jpg";
import vision from "../assets/vision.png";
import location from "../assets/location.jpg"
import askal from "../assets/askla3.jpg";
import ContactUs from "./ContactUs";

const AboutUs = () => {
  return (
    <div className='font-meri'>
       
        <div>
            <img className=" w-full h-72 object-cover object-left" src={askal} />
            <div className="w-full h-full absolute bg-white/20 top-0">
                    <h1 className='text-white md:mt-52 mt-32 text-center font-bold text-6xl'>What We Do</h1>  
                    <h2 className='text-white text-center p-2'>|- Eventhough nothing we have, we share what we have -|</h2>
            </div>
            </div>
            <div className='  bg-gray-200 p-4 text-center font-bold w-full '>When and How Askal Was Formed?</div>
            <hr class="border-t-4 border-green-500 w-44 mx-auto mb-4 mt-8" />
            <div className='mt-4  p-4  text-center text-md lg:mx-32 mb-4 justify-center'>
                <p className=''>Askal Charity Society is an indigenous non-governmental organization in Ethiopia, established in 2019 to provide universal support to children. Registered and accredited by the Civil Society Organizations Authority, Askal aims to cultivate a fruitful generation of model citizens who can positively shape the country's future. The organization began by permanently supporting 150 children, which has grown over the years. The goal is to nurture young people into productive, influential individuals who will serve their people and nation with dedication.</p>
                <hr class="border-t-4 border-green-500 w-44 mx-auto mb-4 mt-6" />
            </div>
            <div className='flex flex-col md:grid md:grid-cols-3 gap-4 bg-gray-100 pb-20 mb-10 pt-10 rounded-lg'>
    <div className='p-4  text-center transform transition-transform duration-300 hover:-translate-y-2 bg-white rounded-3xl m-8 shadow-2xl '>
        <div className='rounded w-40 mx-auto '>
            <img src={family} alt="Family" className='w-full rounded-full' />
        </div>
        
        <div className='font-bold text-customGreen text-xl py-4'>Who We Serve</div>
        
        <div className='text-md leading-8 text-gray-800 y-800 font-serif'>
            <ul>
                <li>Children</li>
                <li>Families</li>
                <li>Senior Citizens</li>
            </ul>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2  bg-white rounded-3xl m-8 shadow-2xl'>
        <div className='rounded w-40 mx-auto'>
            <img src={vision} alt="Vision" className='w-full' />
        </div>
        <div className='font-bold text-xl text-customGreen py-4'>Our Vision</div>
        <div className='text-md leading-8 text-gray-800 y-800 font-serif'>
            <p>Seeing all children being cared for physically, nurtured intellectually, and developed emotionally, contributing to the nation sustainably.</p>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2  bg-white rounded-3xl m-8 shadow-2xl'>
        <div className='rounded w-40 mx-auto'>
            <img src={mission} alt="Mission" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl text-customGreen py-4'>Our Mission</div>
        <div className='text-md leading-8 text-gray-800 y-800 font-serif'>
            <p>Ensuring that all-encompassing support reaches children sustainably by expanding effective systems and filling gaps in child support, while being there for the children.</p>
        </div>
    </div>
    <div className='p-4 transform transition-transform duration-300 hover:-translate-y-2  bg-white rounded-3xl m-8 shadow-2xl'>
        <div className='rounded w-40 mx-auto'>
            <img src={friend} alt="Friend" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl text-customGreen py-4 text-center'>How to Join Us</div>
        <div className='text-md leading-8 text-gray-800 y-800 font-serif'>
            <ul className='text-center'>
                <li>By becoming a permanent member</li>
                <li>By becoming a volunteer</li>
                <li>By actively participating in advocacy work within your country or city</li>
                <li>By making monthly donations</li>
            </ul>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2  bg-white rounded-3xl m-8 shadow-2xl'>
        <div className='rounded w-40 mx-auto'>
            <img src={recourse} alt="Resource" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl text-customGreen py-4'>Our Resources</div>
        <div className='text-md leading-8 text-gray-800 y-800 font-serif'>
            <p>To achieve our organization's goals, even if we find individual supporters who are few and far between, instead of relying solely on guardianship, we will sustain ourselves by adopting various income-generating methods.</p>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2  bg-white rounded-3xl m-8 shadow-2xl'>
        <div className='rounded w-40 mx-auto'>
            <img src={location} alt="Resource" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl text-customGreen py-4'>Our Location</div>
        <div className='text-md leading-8 text-gray-800 y-800 font-serif'>
            <p>Saris,adey abeba,around total gas station "dawi" bulding 2nd floor, Addis Ababa, Ethiopia</p>
        </div>
    </div>
</div>
    <div className='mt-4 lg:mb-32'>
      <div className='bg--200 p-4 my-2 text-center font-bold text-5xl'><h1>Meet the Team</h1>
      <hr class="border-t-4 border-green-500 w-44 mx-auto mb-4 mt-5" />
      </div> 
      <div className='lg:flex justify-evenly m-8 lg:m-20 '>
        <div className=' mb-6 p-4 px-8 rounded-xl shadow-2xl text-center   font-bold transform transition-transform duration-300 hover:-translate-y-2 '>
        <div className='rounded w-40 mx-auto my-1'>
            <img src={friend} alt="Friend" className='w-full rounded-full' />
        </div>
            <div className='p-2'>BELAY NIGUSE</div>
            <div className='p-2'>FOUNDER & CEO</div>
            <div className=' bg-green-500 text-white rounded-md p-2 hover:text-green-600'>
                <form action='mailto:belobelay@gmail.com'>
                   <button type='submit'>Contact Me</button>
                </form>
            </div>
        </div>
        <div className=' mb-6 p-4 px-8 rounded-xl shadow-2xl text-center  font-bold transform transition-transform duration-300 hover:-translate-y-2 '>
        <div className='rounded w-40 mx-auto my-1'>
            <img src={friend} alt="Friend" className='w-full rounded-full' />
        </div>
            <div className='p-2'>ABEL GIZAW</div>
            <div className='p-2'>BOARD DIRECTOR</div>
            <div className=' bg-green-500 text-white rounded-md p-2 hover:text-green-600'>
                <form action='mailto:abelgizaw600@gmail.com'>
                   <button type='submit'>Contact Me</button>
                </form>
            </div>        </div>
        <div className=' mb-6 p-4 px-8 rounded-xl shadow-2xl text-center   font-bold transform transition-transform duration-300 hover:-translate-y-2 '>
        <div className='rounded w-40 mx-auto my-1'>
            <img src={friend} alt="Friend" className='w-full rounded-full' />
        </div>
            <div className='p-2'>ZEYINEBA SHIFA</div>
            <div className='p-2'>CHAIRMAN</div>
            <div className=' bg-green-500 text-white rounded-md p-2 hover:text-green-600'>
                <form action='mailto:zeynebashi.10@gmail.com'>
                   <button type='submit'>Contact Me</button>
                </form>
            </div>        </div>
        <div className=' mb-6 p-4 px-8 rounded-xl shadow-2xl text-center  font-bold transform transition-transform duration-300 hover:-translate-y-2 '>
        <div className='rounded w-40 mx-auto my-1'>
            <img src={friend} alt="Friend" className='w-full rounded-full' />
        </div>
            <div className='p-2'>HAMELMAL MEKURIA</div>
            <div className='p-2'>CHEIF SECRETARY</div>
            <div className=' bg-green-500 text-white rounded-md p-2 hover:text-green-600'>
                <form action='mailto:hemimekuria88@gmail.com'>
                   <button type='submit'>Contact Me</button>
                </form>
            </div>        
            </div>
      </div> 
    </div>
    <ContactUs />

 </div>

  )

}

export default AboutUs


