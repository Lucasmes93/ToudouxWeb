"use client";
import { useEffect, useState } from "react";
import IndexPage from "./IndexPage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showIndex, setShowIndex] = useState(false);
  const [adresseUtilisateur, setAdresseUtilisateur] = useState("Chargement de l'adresse...");
  const [menuOpen, setMenuOpen] = useState(false); // État pour le menu burger

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowIndex(true);
      localStorage.setItem("hasVisited", "true");
    }

    const storedAddress = localStorage.getItem("userAddress");
    if (storedAddress) {
      setAdresseUtilisateur(storedAddress);
      return;
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
            console.error("Erreur lors de la récupération de l'adresse :", error);
            setAdresseUtilisateur("Adresse introuvable");
          }
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setAdresseUtilisateur("Localisation refusée");
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
      <header className="bg-[#503f3f] text-white flex items-center justify-between h-[80px] px-6 relative">
        {/* Logo Centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Image src="/assets/toudoux.png" alt="Logo Toudoux" width={220} height={80} className="shadow-none outline-none filter-none bg-transparent" />
        </div>

        {/* Navigation Desktop (Alignée à droite) */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold ml-auto">
          <Link href="/services" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            SERVICES
          </Link>
          <Link href="/login" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            CONNEXION
          </Link>
        </nav>

        {/* Menu burger pour mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            ☰ {/* Icône burger */}
          </button>
        </div>

        {/* Menu déroulant mobile */}
        {menuOpen && (
          <div className="absolute top-full right-0 w-48 bg-[#503f3f] text-white flex flex-col items-center md:hidden shadow-md rounded-b-lg">
            <Link href="/services" className="w-full text-center py-2 hover:bg-white hover:text-[#503f3f]">SERVICES</Link>
            <Link href="/login" className="w-full text-center py-2 hover:bg-white hover:text-[#503f3f]">CONNEXION</Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="grid md:grid-cols-2 grid-cols-1 gap-6 mx-auto w-[90%] max-w-[1400px]">
        <div className="salon-container self-start">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Salons populaires près de chez vous</h2>
          <p className="italic text-gray-500 mb-2">{adresseUtilisateur}</p>
          <ul className="bg-[#503f3f] text-white rounded-lg overflow-hidden salon-list">
            {[
              "Salon Lucas : 15 rue Temple",
              "Salon Bis : 148 impasse ESTIAM",
              "Salon TOUDOUX : 16 boulevard nuit",
              "Salon PAT : 32 rue Auchant",
              "Salon Magic : 2 rue de la Debouillet",
            ].map((salon, index) => (
              <li key={index} className="p-3 border-b border-brown-light last:border-none cursor-pointer hover:bg-orange-500">
                {salon}
              </li>
            ))}
          </ul>
        </div>

        <div className="image-container flex flex-col items-center">
          <p className="text-xl font-semibold text-gray-700 text-center">
            Toudoux : Parce que votre compagnon mérite un soin tout doux !
          </p>
          <Image src="/assets/chien.jpg" alt="Homme et chien" layout="intrinsic" width={700} height={450} className="rounded-lg shadow-lg"/>
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
