import "./components.css";
import MapChart from "./MapChart/MapChart";
import SideBar from "./sidebar";

function Maps() {
  return (
    <div id="maps" className="component">
      <MapChart />
      <SideBar />
    </div>
  );
}

export default Maps;
