// pages/services.tsx
import Image from "next/image";
import Link from "next/link";

export default function Services() {
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
          <a
            href="#connexions"
            className="hover:bg-white hover:text-[#6C5454] px-2 py-1 rounded transition"
          >
            CONNEXIONS
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-[#ECD8BD]">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Nos salons populaires</h2>
        
        {/* Liste des salons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "Salon Lucas", address: "15 rue Temple", description: "Salon calme et chaleureux, idéal pour un moment de détente avec votre compagnon.", note: 4.5 },
            { name: "Salon Bis", address: "148 impasse ESTIAM", description: "Un salon spécialisé dans le toilettage des chiens de toutes races avec des produits naturels.", note: 4.7 },
            { name: "Salon TOUDOUX", address: "16 boulevard nuit", description: "Des soins adaptés pour chaque type de compagnon, dans une ambiance conviviale.", note: 4.8 },
            { name: "Salon PAT", address: "32 rue Auchant", description: "Salon offrant des services de coupe, toilettage et bien-être pour vos animaux.", note: 4.2 },
            { name: "Salon Magic", address: "2 rue de la Debouillet", description: "Un salon de beauté pour animaux qui propose également des services de relaxation pour vos chiens.", note: 4.9 },
          ].map((salon, index) => (
            <div key={index} className="bg-[#6C5454] text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{salon.name}</h3>
              <p className="text-sm mb-2">Adresse : {salon.address}</p>
              <p className="text-sm mb-2">{salon.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">🌟</span>
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
