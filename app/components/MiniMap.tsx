"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Importation correcte
import { useEffect } from "react";

interface MiniMapProps {
  lat: number;
  lon: number;
}

const ChangeView = ({ lat, lon }: MiniMapProps) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], 15); // Définit la vue avec le zoom
  }, [lat, lon, map]);

  return null;
};

const DisableScrollWheelZoom = () => {
    const map = useMap();
  
    useEffect(() => {
      map.scrollWheelZoom.disable(); // Désactive le zoom à la molette
      return () => {
        map.scrollWheelZoom.enable(); // Réactive le zoom en quittant le composant
      };
    }, [map]);
  
    return null;
  };

export default function MiniMap({ lat, lon }: MiniMapProps) {
  return (
    <MapContainer
      style={{ height: "200px", width: "250px", borderRadius: "8px" }}
    >
      <ChangeView lat={lat} lon={lon} />
      <DisableScrollWheelZoom />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]}>
        <Popup>Salon ici !</Popup>
      </Marker>
    </MapContainer>
  );
}
