import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Email from './Email';
import Location from './components/Location';
import ContactHeader from './components/ContactHeader'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactHeader/>
    <Location/>
  </React.StrictMode>
);
