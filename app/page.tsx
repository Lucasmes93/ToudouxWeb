import Image from "next/image"; // Import de Image pour optimiser le chargement des images
import Link from "next/link"; // Import de Link pour la navigation entre les pages

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#6C5454] text-white flex items-center justify-between p-6">
        <div className="flex items-center">
          <Image
            src="/assets/toudoux.png"  // Image dans le dossier public
            alt="Logo Toudoux"
            width={100}  // Agrandissement du logo
            height={100}  // Agrandissement du logo
            className="w-auto mr-2"
          />
        </div>
        <nav className="flex-1 flex justify-center gap-8">
          {/* Utilisation de Link pour la navigation */}
          <Link
            href="/services"  // Route vers la page services
            className="hover:bg-white hover:text-[#6C5454] px-2 py-1 rounded transition"
          >
            SERVICES
          </Link>
          <Link
            href="/login"  // Nouveau lien vers la page de connexion
            className="hover:bg-white hover:text-[#6C5454] px-2 py-1 rounded transition"
          >
           CONNEXION
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-[#ECD8BD]">
        {/* Salon List and Image on Same Line */}
        <section className="flex items-start gap-6">
          {/* Salon List */}
          <div className="flex-1 max-w-[40%]"> {/* Réduit la largeur de la liste des salons */}
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Salons populaires près de chez vous</h2>
            <ul className="bg-[#6C5454] text-white rounded-lg overflow-hidden">
              {[
                "Salon Lucas : 15 rue Temple",
                "Salon Bis : 148 impasse ESTIAM",
                "Salon TOUDOUX : 16 boulevard nuit",
                "Salon PAT : 32 rue Auchant",
                "Salon Magic : 2 rue de la Debouillet",
              ].map((salon, index) => (
                <li
                  key={index}
                  className="p-3 border-b border-brown-light last:border-none cursor-pointer hover:bg-orange-500"
                >
                  {salon}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-[60%]"> {/* Agrandit l'image */}
            {/* Phrase Above the Image */}
            <div className="text-center mb-4">
              <p className="text-xl font-semibold text-gray-700">
                Toudoux : Parce que votre compagnon mérite un soin tout doux !
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/assets/chien.jpg"  // Image dans le dossier public
                alt="Homme et chien"
                width={700}  // Taille agrandie
                height={450} // Taille agrandie
                className="rounded-lg shadow-md"  // Décalage de l'image vers la gauche
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#6C5454] text-white text-center py-4 mt-auto">
        <div className="flex justify-center gap-8 text-sm">
          <a href="/conditions-utilisation" className="hover:underline">
            Conditions d&apos;utilisation
          </a>
          <a href="/mentions-legales" className="hover:underline">
            Mentions légales
          </a>
          <a href="/obligations" className="hover:underline">
            Obligations légales
          </a>
        </div>
        <p className="mt-4 text-xs">
          © 2025 Toudoux, Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
