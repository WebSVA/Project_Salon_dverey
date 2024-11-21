import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "../styles/location.css";

const mapCenter = [53.8914, 27.5572]; // Координаты центра карты (Москва)

function MapComponent() {
  return (
    <YMaps>
        <div className="map">
      <Map
        defaultState={{
          center: mapCenter,
          zoom: 10, // Уровень увеличения карты
          
        }}
        style={{
          width:"100%", // Ширина карты
          height:"100%" // Высота карты
        }}
      >
        {/* Маркер на карте */}
        <Placemark geometry={mapCenter} />
      </Map>
      </div>
    </YMaps>
  );
}

export default MapComponent;
