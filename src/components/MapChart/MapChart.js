import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";
import { PatternLines } from "@vx/pattern";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const highlighted = [
  "BRA",
  "VNM",
  "COL",
  "IDN",
  "ETH",
  "HND",
  "IND",
  "UGA",
  "MEX",
  "GTM",
  "PER",
  "NIC",
  "CHN",
  "CIV",
  "CRI",
  "KEN",
  "PNG",
  "TZA",
  "SLV",
  "ECU",
  "CMR",
  "LAO",
  "MDG",
  "GAB",
  "THA",
  "VEN",
  "DOM",
  "HTI",
  "COD",
  "RWA",
  "BDI",
  "PHL",
  "TGO",
  "GIN",
  "YEM",
  "CUB",
  "PAN",
  "BOL",
  "TLS",
  "CAF",
  "NGA",
  "GHA",
  "SLE",
  "AGO",
  "JAM",
  "PRY",
  "MWI",
  "TTO",
  "ZWE",
  "LBR",
];

const MapChart = () => {
  return (
    <ComposableMap projection="geoEqualEarth">
      <ZoomableGroup zoom={1.5}>
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
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
