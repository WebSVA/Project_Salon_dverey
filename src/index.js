import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Location from './components/Location';
import ContactHeader from './components/ContactHeader';
import ShadowSlider from './components/ShadowSlider'
import Footer from './components/Footer'
import PreferencesContainer from './components/PreferencesContainer';
import AboutUsSection from './components/AboutUsSection'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactHeader/>
    <ShadowSlider/>
    <PreferencesContainer/>
    <AboutUsSection/>
    <Location/>
    <Footer/>
  </React.StrictMode>
);
