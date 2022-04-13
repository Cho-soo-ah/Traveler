import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
  Sphere,
  Marker,
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const highlighted = ["KOR"];
const mapWidth = 800;
const mapHeight = 550;

const MapChart = () => {
  return (
    <ComposableMap projection="geoEqualEarth">
      <ZoomableGroup
        minZoom={1.5}
        maxZoom={3}
        zoom={1.5}
        translateExtent={[
          [-mapWidth * 2, 50],
          [mapWidth * 2, mapHeight],
        ]}
      >
        {/* 패턴 */}
        <PatternLines
          id="lines"
          height={4}
          width={4}
          stroke="#e5d5c0"
          strokeWidth={0.5}
          background="#026c80"
          orientation={["diagonal"]}
        />
        {/* 외곽선 */}
        <Sphere stroke="#ecae7d" strokeWidth={0.3} />
        {/* 위도경도 */}
        <Graticule stroke="#ecae7d" strokeWidth={0.3} />
        <Geographies geography={geoUrl} stroke="#026c80" strokeWidth={0.2}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted =
                highlighted.indexOf(geo.properties.ISO_A3) !== -1;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "url('#lines')" : "#8db4ad"}
                  onClick={() => console.log(geo.properties.ISO_A3)}
                  style={{
                    default: {
                      transition: "all 250ms",
                      outline: "none",
                    },
                    hover: {
                      fill: "#026c80",
                      stroke: "#064c72",
                      transition: "all 250ms",
                      cursor: "pointer",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        {/* <Marker coordinates={[-101, 53]} fill="#777">
          <text textAnchor="middle" fill="#F53">
            Canada
          </text>
        </Marker> */}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
