import "./components.css";
import MapChart from "./MapChart/MapChart";
import SideBar from "./sidebar";

function Map() {
  return (
    <div id="map" className="component">
      <MapChart />
      <SideBar />
    </div>
  );
}

export default Map;
