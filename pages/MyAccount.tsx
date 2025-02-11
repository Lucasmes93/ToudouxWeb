"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/MyAccount.css"; // Import du fichier CSS


export default function NewPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#503f3f] text-white flex items-center justify-between h-[100px] px-6 relative">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/assets/toudoux.png" 
              alt="Logo Toudoux" 
              width={220} 
              height={80} 
              className="shadow-none outline-none filter-none"
            />
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
          <Link href="/services" className="px-4 py-2 rounded transition">
            SERVICES
          </Link>
          <Link href="/login" className="px-4 py-2 rounded transition">
            CONNEXION
          </Link>
        </nav>

        {/* Icône Account Desktop */}
        <div className="hidden md:flex items-center">
          <Link href="/MyAccount">
            <Image 
              src="/assets/Account.png" 
              alt="Compte utilisateur" 
              width={160} 
              height={70} 
              className="shadow-none outline-none filter-none cursor-pointer"
            />
          </Link>
        </div>

        {/* Burger Menu Icon (visible en mobile) */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Menu Burger (Mobile) */}
      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-[#503f3f] text-white flex flex-col items-center p-6 md:hidden">
          <Link href="/services" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>
            SERVICES
          </Link>
          <Link href="/login" className="py-2 text-lg" onClick={() => setMenuOpen(false)}>
            CONNEXION
          </Link>
          <Link href="/account" className="py-2" onClick={() => setMenuOpen(false)}>
            <Image 
              src="/assets/Account.png" 
              alt="Compte utilisateur" 
              width={100} 
              height={40} 
              className="shadow-none outline-none filter-none cursor-pointer"
            />
          </Link>
        </div>
      )}

      {/* Contenu de la page */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold text-[#503f3f]">Titre de la nouvelle page</h1>
        <p className="text-lg text-gray-600 mt-4">Ajoutez ici le contenu de votre page.</p>
        {/* Place ton contenu ici */}
      </main>

      {/* Footer */}
      <footer className="bg-[#503f3f] text-white text-center py-4">
        <div className="flex justify-center gap-8 text-sm">
          <a href="/conditions-utilisation">Conditions d'utilisation</a>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/obligations">Obligations légales</a>
        </div>
        <p className="mt-2 text-xs">© 2025 Toudoux, Tous droits réservés.</p>
      </footer>
    </div>
  );
}
