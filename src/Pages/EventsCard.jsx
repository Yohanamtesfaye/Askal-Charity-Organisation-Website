import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const EventsCard = ({ events, showdescription }) => {
  const id = events.id;
  const value = `/eventdescription/${id}`;
  return (
    <div className='my-2'>
      {showdescription && (
        <Link to={value}>
          <div className="relative w-full max-w-full max-h-full">
            <img src={events.img} className="w-full h-1/5 lg:h-auto object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 lg:p-10">
              <p className="text-white font-serif">
                <span className='text-2xl lg:text-4xl font-bold mb-4 lg:mb-10 block'>{events.topic}</span>
                <span className='text-base lg:text-2xl'>
                  {events.desc}
                </span>
              </p>
            </div>
          </div>
          <p className='p-6 bg-gray-300 text-lg text-center mb-10'>
            <span className=' font-bold mr-3'>{events.topic}</span>
          </p>
          <hr style={{ width: '10%', margin: '0px auto 10px', border: '2px solid green' }} />
          <p className='text-md text-center lg:mx-40 max-md:mx-5 py-2 leading-8 text-gray-800 font-serif'>{events.decc}</p>
          <hr style={{ width: '10%', margin: '10px auto 0px', border: '2px solid green' }} />
          <div className='lg:grid max-md:grid-cols-2 my-8 font-serif lg:mx-10 grid-cols-4 gap-5 p-10'>
            {events.imgs.map((img, index) => (
              <img className='transform transition-transform duration-500 max-md:py-6 hover:scale-110' src={img} key={index} style={{ width: '300px' }} />
            ))}
          </div>

          <Footer />
        </Link>
      )}
      {!showdescription && (
        <Link to={value}>
          <div className='text-center shadow-lg p-10 rounded-xl mb-10 hover:bg-gradient-to-r from-green-300 to-green-50 transform transition-transform duration-500 hover:scale-110'>
            <img src={events.img} width={100} height={100} className='max-w-full max-h-full mx-auto' />
            <h3 className='text-lg font-medium text-green-800 pt-8 pb-2'>{events.topic}</h3>
            <p className='py-2'>{events.desc}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default EventsCard;
