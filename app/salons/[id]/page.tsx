"use client";

import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface Salon {
  id: string;
  name: string;
  address: string;
  description: string;
  price: string;
  lat?: number;
  lng?: number;
}

const salons: Salon[] = [
  {
    id: "1",
    name: "Salon Lucas",
    address: "15 rue Temple,75004 Paris",
    description:
      "Salon calme et chaleureux, idéal pour un moment de détente avec votre compagnon.",
    price: "30€",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: "2",
    name: "Salon Bis",
    address: "148 impasse ESTIAM",
    description:
      "Un salon spécialisé dans le toilettage des chiens de toutes races avec des produits naturels.",
    price: "40€",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: "3",
    name: "Salon TOUDOUX",
    address: "16 boulevard nuit",
    description:
      "Des soins adaptés pour chaque type de compagnon, dans une ambiance conviviale.",
    price: "35€",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: "4",
    name: "Salon PAT",
    address: "32 rue Auchant",
    description:
      "Salon offrant des services de coupe, toilettage et bien-être pour vos animaux.",
    price: "25€",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: "5",
    name: "Salon Magic",
    address: "2 rue de la Debouillet",
    description:
      "Un salon de beauté pour animaux qui propose également des services de relaxation pour vos chiens.",
    price: "45€",
    lat: 48.8566,
    lng: 2.3522,
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 48.8566,
  lng: 2.3522,
};

export default function SalonDetails() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const [salon, setSalon] = useState<Salon | undefined>(undefined);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const _s = salons.find((s) => s.id === id);
    setSalon(_s);
  }, [id]);

  if (!salon) {
    return <p>Salon introuvable.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-[#6C5454] text-white flex items-center justify-between p-6">
        <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/assets/toudoux.png" alt="Logo Toudoux" width={100} height={100} className="w-auto mr-2" />
        </div>
        <nav className="hidden md:flex gap-8 text-lg font-semibold ml-auto">
          <Link href="/services" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">SERVICES</Link>
          <Link href="/login" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">CONNEXION</Link>
        </nav>
      </header>

      <main className="p-6 text-gray-900 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <LoadScript googleMapsApiKey="AIzaSyA8f9P1wqSwcpkV13zMLMfoZQ_RMRR4GpQ">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
              >
                {salon.lat && salon.lng && (
                  <Marker position={{ lat: salon.lat, lng: salon.lng }} />
                )}
              </GoogleMap>
            </LoadScript>
          </div>

          <div className="mt-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-semibold text-center">{salon.name}</h1>
              <p className="mt-2 text-lg text-center">{salon.description}</p>
              <p className="mt-2 text-center"><strong>Adresse :</strong> {salon.address}</p>
              <p className="mt-2 text-center"><strong>Tarif :</strong> {salon.price}</p>
            </div>

            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-center">Réserver un rendez-vous</h2>
              <form className="mt-4 flex flex-col">
                <label className="font-medium">Date :</label>
                <input type="date" className="border p-2 rounded mt-2" value={date} onChange={(e) => setDate(e.target.value)} />
                
                <label className="mt-4 font-medium">Heure :</label>
                <input type="time" className="border p-2 rounded mt-2" value={time} onChange={(e) => setTime(e.target.value)} />

                <button type="submit" className="mt-6 bg-[#6C5454] text-white py-2 rounded-lg text-lg hover:bg-[#503f3f] transition">Réserver</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#6C5454] text-white text-center py-4 mt-auto">
        <p className="mt-4 text-xs">© 2025 Toudoux, Tous droits réservés.</p>
      </footer>
    </div>
  );
}