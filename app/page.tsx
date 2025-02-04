"use client";
import { useEffect, useState } from "react";
import IndexPage from "./IndexPage";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Chargement dynamique de la MiniMap pour éviter les problèmes SSR
const MiniMap = dynamic(() => import("@/app/components/MiniMap"), { ssr: false });

// Fonction pour calculer la distance entre deux points (Haversine formula)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default function Home() {
  const [showIndex, setShowIndex] = useState(false);
  const [adresseUtilisateur, setAdresseUtilisateur] = useState("Chargement de l'adresse...");
  const [salons, setSalons] = useState<any[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredSalon, setHoveredSalon] = useState<{ lat: number; lon: number } | null>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowIndex(true);
      localStorage.setItem("hasVisited", "true");
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();

            if (data.address) {
              const adresse = `${data.address.road || "Rue inconnue"}, ${data.address.postcode || ""}, ${data.address.city || "Ville inconnue"}`;
              setAdresseUtilisateur(adresse);
              localStorage.setItem("userAddress", adresse);
            }
          } catch (error) {
            console.error("Erreur récupération adresse :", error);
            setAdresseUtilisateur("Adresse introuvable");
          }

          try {
            const overpassQuery = `[out:json];
              node["shop"="pet_grooming"](around:10000, ${latitude}, ${longitude});
              out;`;

            const response = await fetch(
              `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`
            );
            const data = await response.json();

            if (data.elements && data.elements.length > 0) {
              const salonsTrouves = data.elements.map((salon: any) => ({
                nom: salon.tags.name || "Salon inconnu",
                adresse: salon.tags["addr:street"] || "Adresse inconnue",
                ville: salon.tags["addr:city"] || "Ville inconnue",
                lat: salon.lat,
                lon: salon.lon,
                distance: calculateDistance(latitude, longitude, salon.lat, salon.lon),
              }));

              salonsTrouves.sort((a: { distance: number }, b: { distance: number }) => a.distance - b.distance);

              setSalons(salonsTrouves.slice(0, 5));
            } else {
              setSalons([]);
            }
          } catch (error) {
            console.error("Erreur récupération salons :", error);
            setSalons([]);
          }
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setAdresseUtilisateur("Localisation refusée");
          setSalons([]);
        }
      );
    }
  }, []);

  if (showIndex) {
    return <IndexPage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#503f3f] text-white flex items-center justify-between h-[100px] px-6 relative">
        {/* Logo à gauche */}
        <div className="flex items-center">
          <Image src="/assets/toudoux.png" alt="Logo Toudoux" width={220} height={80} className="shadow-none outline-none filter-none bg-transparent" />
        </div>

        {/* Navigation Desktop centrée */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
          <Link href="/services" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            SERVICES
          </Link>
          <Link href="/login" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            CONNEXION
          </Link>
        </nav>

        {/* Menu burger mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full right-0 w-48 bg-[#503f3f] text-white flex flex-col items-center md:hidden shadow-md rounded-b-lg">
            <Link href="/services" className="w-full text-center py-2 hover:bg-white hover:text-[#503f3f]">SERVICES</Link>
            <Link href="/login" className="w-full text-center py-2 hover:bg-white hover:text-[#503f3f]">CONNEXION</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="grid md:grid-cols-2 grid-cols-1 gap-6 mx-auto w-[90%] max-w-[1400px] mt-[80px]">
        <div className="salon-container self-start relative">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Salons populaires près de chez vous</h2>
          <p className="italic text-gray-500 mb-2">{adresseUtilisateur}</p>
          <ul className="bg-[#503f3f] text-white rounded-lg overflow-hidden salon-list relative">
            {salons.length > 0 ? (
              salons.map((salon, index) => (
                <li
                  key={index}
                  className="p-3 border-b border-brown-light last:border-none cursor-pointer hover:bg-orange-500 relative"
                  onMouseEnter={() => setHoveredSalon({ lat: salon.lat, lon: salon.lon })}
                  onMouseLeave={() => setHoveredSalon(null)}
                >
                  <strong>{salon.nom}</strong> : {salon.adresse}, {salon.ville}
                  {hoveredSalon && hoveredSalon.lat === salon.lat && hoveredSalon.lon === salon.lon && (
                    <div className="absolute top-0 right-0 w-[200px] h-[200px]">
                      <MiniMap lat={salon.lat} lon={salon.lon} />
                    </div>
                  )}
                </li>
              ))
            ) : (
              <li className="p-3 text-center text-gray-300">En recherche de salons à proximité.</li>
            )}
          </ul>
        </div>

        <div className="image-container flex flex-col items-center">
          <p className="text-xl font-semibold text-gray-700 text-center">
            Toudoux : Parce que votre compagnon mérite un soin tout doux !
          </p>
          <Image src="/assets/chien.jpg" alt="Homme et chien" width={700} height={450} className="rounded-lg shadow-lg"/>
        </div>
      </main>

      <footer className="bg-[#503f3f] text-white text-center py-4">
        <div className="flex justify-center gap-8 text-sm">
          <a href="/conditions-utilisation" className="hover:underline">Conditions d&apos;utilisation</a>
          <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
          <a href="/obligations" className="hover:underline">Obligations légales</a>
        </div>
        <p className="mt-2 text-xs">© 2025 Toudoux, Tous droits réservés.</p>
      </footer>
    </div>
  );
}
