import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapCenter = [54.477476, 26.403198]; // Координаты центра карты (Москва)

function ContactMap() {
  return (
    <YMaps>
     
      <Map
        defaultState={{
          center: mapCenter,
          zoom: 15, // Уровень увеличения карты
        }}
        width="100%" // Ширина карты
        height="400px" // Высота карты

    
      >
        {/* Маркер на карте */}
        <Placemark geometry={mapCenter} />
      </Map>
   
    </YMaps>
  );
}

export default ContactMap;