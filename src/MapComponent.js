import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapCenter = [53.8914, 27.5572]; // Координаты центра карты (Москва)

function MapComponent() {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: mapCenter,
          zoom: 10, // Уровень увеличения карты
        }}
        width="778px" // Ширина карты
        height="442px" // Высота карты
      >
        {/* Маркер на карте */}
        <Placemark geometry={mapCenter} />
      </Map>
    </YMaps>
  );
}

export default MapComponent;
