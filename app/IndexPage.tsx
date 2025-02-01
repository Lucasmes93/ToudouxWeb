"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 2500); // Commence le fade-out avant les 3 secondes
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-[#6C5454] text-white transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      {/* Logo */}
      <div className="animate-bounce">
        <Image src="/assets/toudoux.png" alt="Logo Toudoux" width={150} height={150} />
      </div>

      {/* Texte animé */}
      <h1 className="text-3xl font-bold mt-4 animate-fade-in">Bienvenue chez Toudoux</h1>
      <p className="text-lg mt-2 opacity-80 animate-fade-in">Un instant, nous préparons tout pour vous...</p>

      {/* Loader animé en pur CSS */}
      <div className="mt-6 w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
