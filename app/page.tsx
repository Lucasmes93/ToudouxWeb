"use client";
import { useEffect, useState } from "react";
import IndexPage from "./IndexPage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showIndex, setShowIndex] = useState(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);

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
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            if (data && data.address) {
              const { road, house_number, city, postcode, country } = data.address;

              // Construit une adresse propre
              const formattedAddress = `${house_number ? house_number + ", " : ""}${road ? road + ", " : ""}${city ? city + ", " : ""}${postcode ? postcode + ", " : ""}${country ? country : ""}`;

              setUserAddress(formattedAddress.trim().replace(/,\s*$/, "")); // Supprime la dernière virgule
            } else {
              setUserAddress("Adresse non trouvée");
            }
          } catch (error) {
            console.error("Erreur lors de la récupération de l'adresse", error);
            setUserAddress("Impossible de récupérer l'adresse");
          }
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
          setUserAddress("Autorisation refusée");
        }
      );
    } else {
      setUserAddress("Géolocalisation non supportée");
    }
  }, []);

  if (showIndex) {
    return <IndexPage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#503f3f] text-white flex items-center justify-center h-[80px] px-6 relative">
        <div className="header-logo-container">
          <Image
            src="/assets/toudoux.png"
            alt="Logo Toudoux"
            width={220}
            height={80}
            className="header-logo shadow-none outline-none filter-none"
          />
        </div>

        <nav className="nav-links text-lg font-semibold">
          <Link href="/services" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            SERVICES
          </Link>
          <Link href="/login" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            CONNEXION
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <section className="flex items-start gap-6">
          <div className="flex-1 max-w-[40%]">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Salons populaires près de chez vous 
              {userAddress && <span className="font-normal italic"> : {userAddress}</span>}
            </h2>
            <ul className="bg-[#503f3f] text-white rounded-lg overflow-hidden">
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

          <div className="flex-shrink-0 w-[60%]">
            <div className="text-center mb-4">
              <p className="text-xl font-semibold text-gray-700">
                Toudoux : Parce que votre compagnon mérite un soin tout doux !
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/assets/chien.jpg" alt="Homme et chien" layout="intrinsic" width={700} height={450} />
            </div>
          </div>
        </section>
      </main>

      <footer>
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
