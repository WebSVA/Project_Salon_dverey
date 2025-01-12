import React from "react";
import "../styles/location.css";

function MapComponent() {
  return (
        <div className="map">
              <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162.4100857677473!2d26.403004963698507!3d54.47739138448719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc43a9e4ed6775%3A0xfcfc99047167bbdc!2z0KHQsNC70L7QvSDQlNCy0LXRgNC10Lk!5e0!3m2!1sru!2sby!4v1735555750022!5m2!1sru!2sby!4z2" 
                    allowFullScreen 
                    title="map"
                    loading="eager" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

             
     
      </div>
  );
}

export default MapComponent;
