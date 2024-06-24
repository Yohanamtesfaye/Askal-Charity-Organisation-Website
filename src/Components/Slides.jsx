import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import intro3 from '../assets/tripp.jpg';
import intro2 from '../assets/us.jpg';
import intro1 from '../assets/introimg10.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const divStyle = {
  display: 'flex',
  flexDirection: 'column', // Arrange children vertically
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center', // Center content vertically
  backgroundSize: 'cover',
  height: '550px',
  opacity: 0.8, // Decrease the opacity of the background image
  position: 'relative', // Positioning for the overlay
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
  zIndex: 1, // Ensure overlay is on top of the image
};

const textStyle = {
  position: 'relative',
  zIndex: 2, // Ensure text is on top of the overlay
};

const slideImages = [
  {
    url: intro1,
    caption: `"Spread Joy: Give the Gift of Health and Hope"`,
  },
  {
    url: intro2,
    caption: 'We Share What We Have!',
  },
  {
    url: intro3,
    caption: '"Spread Joy: Give the Gift of Health and Hope"',
  },
];

const Slides = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
              <div  style={overlayStyle}></div>
              <span className="text-white leading-relaxed lg:text-4xl font-bold font-spci m-10" style={textStyle}>
                {slideImage.caption}
              </span>
            </div>
          </div>
        ))}
      </Slide>
      <p className='p-6 bg-gray-50 text-lg'>
        <Link className='mr-3'>Home</Link> <FaArrowRight className='inline-block mr-3'/>
        <Link to='/aboutus' className='mr-3'>About Us</Link> <FaArrowRight className='inline-block mr-3'/>
        <span className='text-red-500 font-bold mr-3'>Objective</span>
      </p>
    </div>
  );
};

export default Slides;
