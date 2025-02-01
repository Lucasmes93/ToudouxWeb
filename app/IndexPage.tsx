"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function IndexPage() {
  const router = useRouter();
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buttonClickable, setButtonClickable] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setShowCloseButton(true);
    } else {
      const timeout = setTimeout(() => {
        localStorage.setItem("hasVisited", "true");
        router.replace("/");
      }, 15000); // Transition des pages à 15 secondes

      return () => clearTimeout(timeout);
    }

    // Animation de remplissage du bouton "Accéder au site" sur 6.5 secondes
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + (100 / 65); // 6.5 secondes = 6500ms -> 100% / 65 steps (100ms intervals)
        } else {
          setButtonClickable(true); // Rendre le bouton cliquable une fois rempli
          return 100;
        }
      });
    }, 100); // 100ms interval

    return () => clearInterval(interval);
  }, [router]);

  const handleClose = () => {
    if (buttonClickable) {
      localStorage.setItem("hasVisited", "true");
      router.replace("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#6C5454] text-white relative">
      {/* Bouton de fermeture */}
      {showCloseButton && (
        <button
          className="absolute top-5 right-5 text-white text-2xl font-bold bg-red-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition"
          onClick={handleClose}
        >
          ✖
        </button>
      )}

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

        {/* Bouton "Accéder au site" avec animation de remplissage sur 6.5 secondes */}
        <button
          className={`relative mt-3 w-72 h-12 font-semibold rounded-lg overflow-hidden border border-white transition ${
            buttonClickable ? "text-[#6C5454] bg-white cursor-pointer" : "text-white bg-transparent cursor-default"
          }`}
          onClick={handleClose}
          disabled={!buttonClickable} // Désactivé tant qu'il n'est pas rempli
        >
          <div
            className="absolute inset-0 bg-white"
            style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
          />
          <span className="relative z-10">Accéder au site</span>
        </button>
      </div>
    </div>
  );
}
