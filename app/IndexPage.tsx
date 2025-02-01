"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      router.replace("/"); // Redirige immédiatement si déjà visité
      return;
    }

    // Marquer la page comme vue pour ne plus la revoir après un refresh
    localStorage.setItem("hasVisited", "true");
  }, [router]);

  const handleAccess = () => {
    router.replace("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#c17453] text-white relative">
      {/* Logo */}
      <Image src="/assets/toudoux.png" alt="Logo Toudoux" width={600} height={600} className="w-auto h-auto shadow-none outline-none filter-none"/>

      {/* Titre et Message */}
      <h1 className="text-3xl font-bold mt-0">Bienvenue sur Toudoux</h1>
      <p className="text-lg mt-0 opacity-80 text-center mx-6">
        Notre plateforme principale est disponible sur mobile. Installez l’application pour une expérience optimale !
      </p>

      {/* Boutons d'installation avec QR codes */}
      <div className="flex flex-col items-center gap-6 mt-6">
        <div className="flex flex-row justify-center gap-12">
          {/* Bouton App Store */}
          <div className="flex flex-col items-center">
            <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-[#6C5454] font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition">
                Installer sur AppStore
              </button>
            </a>
            <Image src="/assets/qrcode.png" alt="QR App Store" width={100} height={100} className="mt-2" />
          </div>

          {/* Bouton Play Store */}
          <div className="flex flex-col items-center">
            <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-[#6C5454] font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition">
                Installer sur PlayStore
              </button>
            </a>
            <Image src="/assets/qrcode.png" alt="QR Play Store" width={100} height={100} className="mt-2" />
          </div>
        </div>

        {/* Bouton "Accéder au site" qui redirige immédiatement */}
        <button
          className="mt-3 w-72 h-12 font-semibold rounded-lg bg-white text-[#6C5454] border border-white shadow-lg cursor-pointer hover:bg-gray-200 transition"
          onClick={handleAccess}
        >
          Accéder au site
        </button>
      </div>
    </div>
  );
}
