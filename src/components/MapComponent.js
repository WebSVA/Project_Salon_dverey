import React from "react";
//import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "../styles/location.css";

//const mapCenter = [54.477476, 26.403198]; // Координаты центра карты (Москва)

function MapComponent() {
  return (
   // <YMaps>
        <div className="map">
              <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.008674774923!2d26.401127776061678!3d54.480428772639925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc43b03d29e861%3A0xd1b95d280a8663fa!2z0YPQuy4g0J_QtdGC0YDQsCDQkdCw0LvRi9GI0LAgMjcsINCh0LzQvtGA0LPQvtC90YwsINCT0YDQvtC00L3QtdC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sby!4v1735417256297!5m2!1sru!2sby" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
      {/* <Map
        defaultState={{
          center: mapCenter,
          zoom: 14, // Уровень увеличения карты
          
        }}
        style={{
          width:"100%", // Ширина карты
          height:"100%" // Высота карты
        }}
      >
     
        <Placemark geometry={mapCenter} />
      </Map> */}
      </div>
    //</YMaps>
  );
}

export default MapComponent;
