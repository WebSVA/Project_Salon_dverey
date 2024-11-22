import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Location from './components/Location';
<<<<<<< HEAD
import ContactHeader from './components/ContactHeader';
import ShadowSlider from './components/ShadowSlider'
=======
import ContactHeader from './components/ContactHeader'
import Footer from './components/Footer'
import AboutUsSection from './components/AboutUsSection'
>>>>>>> 8d11b49d4d17ef2c929b027b0bb39a639a3f24bf

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactHeader/>
<<<<<<< HEAD
    <ShadowSlider/>
=======
    <AboutUsSection/>
>>>>>>> 8d11b49d4d17ef2c929b027b0bb39a639a3f24bf
    <Location/>
    <Footer/>
  </React.StrictMode>
);
