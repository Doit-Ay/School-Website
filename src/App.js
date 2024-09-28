import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Announcements from './components/Announcements';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Extracurricular from './components/Extracurricular';
import FacultyProfiles from './components/FacultyProfiles';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import NewsletterPopup from './components/NewsletterPopup'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Announcements />
      <AboutUs />
      <Academics />
      <Extracurricular />
      <FacultyProfiles />
      <Testimonials />
      <Gallery />
      <ContactUs />
      <Footer />
      <NewsletterPopup /> 
    </div>
  );
}

export default App;
