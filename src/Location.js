import LocationDisplay from "./LocationDisplay.js";
import MapComponent from "./MapComponent";
import "./css/location.css";

function Location() {
  return (
    <div className="location-details-container1">
      <div className="location-details-container2">
        <p className="location-title-text-style">Наше местоположение</p>
        <div className="location-details-container">
          <LocationDisplay/>
          <MapComponent/>
        </div>
      </div>
    </div>
  );
}

export default Location;