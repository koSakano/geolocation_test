import * as React from "react";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet/dist/leaflet-src.js";
import { MapContainer, TileLayer, useMap, useMapEvent, CircleMarker, Tooltip } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

interface IProps {
  position: [number, number];
}

function MakeOperationConvenience() {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
    });
  });

  return null;
}

function SetCenterPosition({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

export default function Maps(props: IProps): React.ReactElement {
  React.useEffect(() => {
    const DefaultIcon = Leaflet.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    Leaflet.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  return (
    <MapContainer center={props.position} zoom={16} scrollWheelZoom={false} style={{ height: "80vh", width: "80%" }}>
      <MakeOperationConvenience />
      <SetCenterPosition
        coords={props.position}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        center={props.position}
        radius={50}
      >
        <Tooltip>
          現在地
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
