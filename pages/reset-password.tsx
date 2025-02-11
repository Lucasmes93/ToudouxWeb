import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function ResetPassword() {
  const router = useRouter(); // Hook pour la navigation

  return (
    <div className="page-login min-h-screen flex flex-col">
       {/* Header */}
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

      <nav className="hidden md:flex gap-8 text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
        <Link href="/services" className="px-4 py-2 rounded transition">
          SERVICES
        </Link>
        <Link href="/login" className="px-4 py-2 rounded transition">
          CONNEXION
        </Link>
      </nav>

      {/* Icône Account à droite, ajustée à la même taille que le logo */}
      <div className="flex items-center">
        <Link href="/account">
          <Image 
            src="/assets/Account.png" 
            alt="Compte utilisateur" 
            width={160} 
            height={70} 
            className="shadow-none outline-none filter-none cursor-pointer"
          />
        </Link>
      </div>
    </header>

      {/* Main Content */}
      <main className="flex-grow p-6 flex items-center justify-center">
        <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Réinitialisation du mot de passe</h2>
          <label className="block mb-2" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md mb-4"
            placeholder="Votre e-mail"
            required
          />
          <button
            type="submit"
            className="bg-[#6C5454] text-white px-6 py-2 rounded-md transition"
          >
            Réinitialiser le mot de passe
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-[#6C5454] text-white text-center py-4 mt-auto">
        <p className="mt-4 text-xs">© 2025 Toudoux, Tous droits réservés.</p>
      </footer>
    </div>
  );
}
