import Image from "next/image"; // Import de Image pour optimiser le chargement des images
import Link from "next/link"; // Import de Link pour la navigation entre les pages
import "../styles/services.css"; // Import du fichier CSS

export default function Services() {
  return (
    <div className="page-services">
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
      <main className="main-content">
        <h2>Nos salons populaires</h2>
        <div className="service-grid">
          {[
            {
              id: "1",
              name: "Salon Lucas",
              address: "15 rue Temple",
              description:
                "Salon calme et chaleureux, idéal pour un moment de détente avec votre compagnon.",
              note: 4.5,
            },
            {
              id: "2",
              name: "Salon Bis",
              address: "148 impasse ESTIAM",
              description:
                "Un salon spécialisé dans le toilettage des chiens de toutes races avec des produits naturels.",
              note: 4.7,
            },
            {
              id: "3",
              name: "Salon TOUDOUX",
              address: "16 boulevard nuit",
              description:
                "Des soins adaptés pour chaque type de compagnon, dans une ambiance conviviale.",
              note: 4.8,
            },
            {
              id: "4",
              name: "Salon PAT",
              address: "32 rue Auchant",
              description:
                "Salon offrant des services de coupe, toilettage et bien-être pour vos animaux.",
              note: 4.2,
            },
            {
              id: "5",
              name: "Salon Magic",
              address: "2 rue de la Debouillet",
              description:
                "Un salon de beauté pour animaux qui propose également des services de relaxation pour vos chiens.",
              note: 4.9,
            },
          ].map((salon) => (
            <div key={salon.id} className="service-item">
              <h3>
                <Link href={`/salons/${salon.id}`}>{salon.name}</Link>{" "}
                {/* Lien vers la page de détails */}
              </h3>
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
