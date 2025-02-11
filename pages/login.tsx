import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import "../styles/login.css"; // Importer le CSS spécifique à la page de connexion

export default function Login() {
  const [isEntreprise, setIsEntreprise] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [siret, setSiret] = useState("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  // Fonction pour gérer la connexion
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation des informations
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (isEntreprise && !siret) {
      setError("Veuillez entrer votre numéro SIRET.");
      return;
    }

    // Simuler une connexion et redirection
    console.log("E-mail:", email);
    console.log("Mot de passe:", password);
    if (isEntreprise) {
      console.log("Numéro SIRET:", siret);
    }

    // Si la connexion est réussie, on redirige vers la page principale
    router.push("/");
  };

  return (
    <div className="page-login min-h-screen flex flex-col">
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
      <main className="flex-grow flex justify-center items-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-center text-2xl font-semibold mb-6">Connexion</h2>

          {/* Choix particulier ou entreprise */}
          <div className="flex justify-between mb-4">
            <button
              type="button"
              onClick={() => setIsEntreprise(false)}
              className={`${
                !isEntreprise ? "bg-[#6C5454] text-white" : "bg-gray-200 text-[#6C5454]"
              } px-4 py-2 rounded-md transition`}
            >
              Particulier
            </button>
            <button
              type="button"
              onClick={() => setIsEntreprise(true)}
              className={`${
                isEntreprise ? "bg-[#6C5454] text-white" : "bg-gray-200 text-[#6C5454]"
              } px-4 py-2 rounded-md transition`}
            >
              Entreprise
            </button>
          </div>

          {/* Message d'erreur */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Formulaire pour particulier */}
          {!isEntreprise && (
            <>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </>
          )}

          {/* Formulaire pour entreprise */}
          {isEntreprise && (
            <>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="siret">Numéro SIRET</label>
              <input
                type="text"
                id="siret"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Votre numéro SIRET"
                value={siret}
                onChange={(e) => setSiret(e.target.value)}
                required={isEntreprise}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md mb-4"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </>
          )}

          {/* Bouton de connexion */}
          <button
            type="submit"
            className="bg-[#6C5454] text-white px-6 py-2 rounded-md w-full mb-4 transition"
          >
            Connexion
          </button>

          {/* Lien mot de passe oublié */}
          <div className="flex justify-between items-center">
            <Link href="/reset-password" className="text-sm text-[#6C5454] hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>
        </form>
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
