import React from 'react'
import family from '../assets/fam.jpg';
import friend from "../assets/friends.jpg";
import mission from "../assets/mission.png";
import recourse from "../assets/hand.jpg";
import vision from "../assets/vision.png";
import location from "../assets/location.jpg"
const AboutUs = () => {
  return (
    <div>
        <div>
        <img className=" w-full h-72 object-cover object-left" src="https://askalcharityassociation.org/gallery/art-event%20_6_.jpg" />
        <div className="w-full h-full absolute bg-white/20 top-0">
                 <h1 className='text-white md:mt-52 mt-32 text-center font-bold text-6xl'>What We Do</h1>  
                 <h2 className='text-white text-center p-2'>|- Eventhough nothing we have, we share what we have -|</h2>
        </div>
        </div>
        <div className='  bg-gray-200 p-4 text-center font-bold w-full '>When and How Askal Was Formed?</div>
        <div className='mt-12  p-4 text-sm text-center font-bold'>
          <p className=''>Askal Charity Society is a non-governmental indigenous organization established on 2019 to provide universal support to children. Askal is a charitable organization that has been registered and accredited by the Civil Society Organizations Authority of the Federal Democratic Republic of Ethiopia under registration number 4015.</p>
          <p className=''>The name Askal comes from a Ge'ez word meaning "fruit," which reflects the organization's purpose of cultivating a fruitful generation of model citizens who can positively shape the future of our country.<br /> Established in 2011 on the 7th of Meskerem by executive director Belai Tinsae, Askal began by permanently supporting 150 children, a number that has steadily grown over the years as the organization has expanded. By nurturing these young people, Askal aims to help develop a cohort of productive, influential individuals who will go on to serve their people and nation with dedication.</p>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-3 gap-4 md:mx-20'>
    <div className='p-4  text-center transform transition-transform duration-300 hover:-translate-y-2'>
        <div className='rounded w-40 mx-auto '>
            <img src={family} alt="Family" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl py-4'>Who We Serve</div>
        <div className='font-bold'>
            <ul>
                <li>Children</li>
                <li>Families</li>
            </ul>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2'>
        <div className='rounded w-40 mx-auto'>
            <img src={vision} alt="Vision" className='w-full' />
        </div>
        <div className='font-bold text-xl py-4'>Our Vision</div>
        <div className='font-bold p-2'>
            <p>Seeing all children being cared for physically, nurtured intellectually, and developed emotionally, contributing to the nation sustainably.</p>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2'>
        <div className='rounded w-40 mx-auto'>
            <img src={mission} alt="Mission" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl py-4'>Our Mission</div>
        <div className='font-bold p-2'>
            <p>Ensuring that all-encompassing support reaches children sustainably by expanding effective systems and filling gaps in child support, while being there for the children.</p>
        </div>
    </div>
    <div className='p-4 transform transition-transform duration-300 hover:-translate-y-2'>
        <div className='rounded w-40 mx-auto'>
            <img src={friend} alt="Friend" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl py-4 text-center'>How to Join Us</div>
        <div className='font-bold p-2'>
            <ul className='text-center'>
                <li>By becoming a permanent member</li>
                <li>By becoming a volunteer</li>
                <li>By actively participating in advocacy work within your country or city</li>
                <li>By making monthly donations</li>
            </ul>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2'>
        <div className='rounded w-40 mx-auto'>
            <img src={recourse} alt="Resource" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl py-4'>Our Resources</div>
        <div className='font-bold p-2'>
            <p>To achieve our organization's goals, even if we find individual supporters who are few and far between, instead of relying solely on guardianship, we will sustain ourselves by adopting various income-generating methods.</p>
        </div>
    </div>
    <div className='p-4 text-center transform transition-transform duration-300 hover:-translate-y-2'>
        <div className='rounded w-40 mx-auto'>
            <img src={location} alt="Resource" className='w-full rounded-full' />
        </div>
        <div className='font-bold text-xl py-4'>Our Location</div>
        <div className='font-bold p-2'>
            <p>Tekle Haymanot Building, 4th floor, Kadisco (In between Gotera & Adey abeba), Addis Ababa</p>
        </div>
    </div>
</div>
 </div>
  )
}

export default AboutUs
