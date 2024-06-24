import React from 'react'

const EventsCard = ({events}) => {
  console.log(events)
  return (
    <div className=' my-2 '>
     <div className=' text-center shadow-lg p-10 rounded-xl mb-10 hover:bg-gradient-to-r from-green-300 to-green-50 transform transition-transform duration-500 hover:scale-110'>
                <img src={events.img} width={100} height={100} className='max-w-full max-h-full mx-auto' />
                <h3 className='text-lg font-medium text-green-800 pt-8 pb-2'>{events.topic}</h3>
                <p className='py-2'>{events.desc}</p>
               
              </div>
    </div>
  )
}

export default EventsCard