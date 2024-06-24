import React from 'react'
import event from '../assets/event.jpg'
const Gallery = () => {
  return (
    <div>
     <div className="relative w-full max-w-full max-h-full">
        <img src={event} alt="Gift" className="w-full h-1/5 lg:h-auto object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 lg:p-10">
          <p className="text-white font-serif">
            <span className='text-2xl lg:text-4xl font-bold mb-4 lg:mb-10 block'>Make a Difference</span>
            <span className='text-base lg:text-2xl'>
              "Creating Change Begins with Investing in Children!"
            </span>
          </p>
        </div>
      </div>
      <p className='p-6 bg-gray-300 text-lg text-center'>
        <span className=' font-bold mr-3'>Events</span>
      </p>
    </div>
  )
}

export default Gallery