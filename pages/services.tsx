import Image from "next/image"; // Import de Image pour optimiser le chargement des images
import Link from "next/link"; // Import de Link pour la navigation entre les pages
import '../styles/services.css'; // Import du fichier CSS

export default function Services() {
  return (
    <div className="page-services">
      {/* Header */}
    
      <header className="bg-[#6C5454] text-white flex items-center justify-between p-6">
        <div className="flex items-center">
        <Link href="/">
            <Image
              src="/assets/toudoux.png"  // Image dans le dossier public
              alt="Logo Toudoux"
              width={100}  // Agrandissement du logo
              height={100}  // Agrandissement du logo
            className="w-auto mr-2"
            />
          </Link>
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
      <main className="main-content">
        <h2>Nos salons populaires</h2>
        <div className="service-grid">
          {[
            { name: "Salon Lucas", address: "15 rue Temple", description: "Salon calme et chaleureux, idéal pour un moment de détente avec votre compagnon.", note: 4.5 },
            { name: "Salon Bis", address: "148 impasse ESTIAM", description: "Un salon spécialisé dans le toilettage des chiens de toutes races avec des produits naturels.", note: 4.7 },
            { name: "Salon TOUDOUX", address: "16 boulevard nuit", description: "Des soins adaptés pour chaque type de compagnon, dans une ambiance conviviale.", note: 4.8 },
            { name: "Salon PAT", address: "32 rue Auchant", description: "Salon offrant des services de coupe, toilettage et bien-être pour vos animaux.", note: 4.2 },
            { name: "Salon Magic", address: "2 rue de la Debouillet", description: "Un salon de beauté pour animaux qui propose également des services de relaxation pour vos chiens.", note: 4.9 },
          ].map((salon, index) => (
            <div key={index} className="service-item">
              <h3>{salon.name}</h3>
              <p>Adresse : {salon.address}</p>
              <p>{salon.description}</p>
              <div className="rating">
                <span className="text-yellow-400">🌟</span>
                <span>{salon.note} / 5</span>
              </div>
            </div>
          ))}
        </div>
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
