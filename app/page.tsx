"use client";

import { useEffect, useState } from "react";
import IndexPage from "./IndexPage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showIndex, setShowIndex] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIndex(false);
    }, 10000);
  }, []);

  return showIndex ? (
    <IndexPage />
  ) : (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#6C5454] text-white flex items-center justify-between p-6">
        <div className="flex items-center">
          <Image src="/assets/toudoux.png" alt="Logo Toudoux" width={100} height={100} className="w-auto h-auto shadow-none outline-none filter-none" />
        </div>
        <nav className="flex-1 flex justify-center gap-8">
          <Link href="/services" className="hover:bg-white hover:text-[#6C5454] px-2 py-1 rounded transition">
            SERVICES
          </Link>
          <Link href="/login" className="hover:bg-white hover:text-[#6C5454] px-2 py-1 rounded transition">
            CONNEXION
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-[#ECD8BD]">
        <section className="flex items-start gap-6">
          <div className="flex-1 max-w-[40%]">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Salons populaires près de chez vous</h2>
            <ul className="bg-[#6C5454] text-white rounded-lg overflow-hidden">
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
              <Image src="/assets/chien.jpg" alt="Homme et chien" width={700} height={450} className="rounded-lg shadow-md" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#6C5454] text-white text-center py-4 mt-auto">
        <div className="flex justify-center gap-8 text-sm">
          <a href="/conditions-utilisation" className="hover:underline">Conditions d&apos;utilisation</a>
          <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
          <a href="/obligations" className="hover:underline">Obligations légales</a>
        </div>
        <p className="mt-4 text-xs">© 2025 Toudoux, Tous droits réservés.</p>
      </footer>
    </div>
  );
}
