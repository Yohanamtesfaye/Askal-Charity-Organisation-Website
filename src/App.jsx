import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import RegisterVolunteer from './Pages/RegisterVolunteer';
import RegisterMember from './Pages/RegisterMember';
import Gallery from './Pages/Gallery';
import Donate from './Pages/Donate';
import ContactUs from './Pages/ContactUs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import EventDescription from './Pages/EventDescription';

function AppContent() {
  const location = useLocation();

  // Determine if the current path matches /eventdescription/:id
  const hideFooter = location.pathname.startsWith('/eventdescription');

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/registervolunteer' element={<RegisterVolunteer />} />
        <Route path='/registermember' element={<RegisterMember />} />
        <Route path='/events' element={<Gallery />} />
        <Route path='/eventdescription/:id' element={<EventDescription />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
