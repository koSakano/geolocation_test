import * as React from "react";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet/dist/leaflet-src.js";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

interface IProps {
  position: {
    lat: number;
    lng: number;
  }
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
    <MapContainer center={[props.position.lat, props.position.lng]} zoom={16} scrollWheelZoom={false} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.position.lat, props.position.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
