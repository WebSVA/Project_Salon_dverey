import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Location from './components/Location';
import ContactHeader from './components/ContactHeader';
import ShadowSlider from './components/ShadowSlider'
import Footer from './components/Footer'
import PreferencesContainer from './components/PreferencesContainer';
import AboutUsSection from './components/AboutUsSection'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactHeader/>
      <ShadowSlider/>
      <PreferencesContainer/>
      <AboutUsSection/>
      <Location/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
