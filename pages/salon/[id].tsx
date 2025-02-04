import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// Exemple de données des salons (En production, ces données viendraient d'une base de données ou d'une API)
const salons = [
  {
    id: "1",
    name: "Salon Lucas",
    address: "15 rue Temple",
    description: "Salon calme et chaleureux, idéal pour un moment de détente avec votre compagnon.",
    price: "30€",
  },
  {
    id: "2",
    name: "Salon Bis",
    address: "148 impasse ESTIAM",
    description: "Un salon spécialisé dans le toilettage des chiens de toutes races avec des produits naturels.",
    price: "40€",
  },
  {
    id: "3",
    name: "Salon TOUDOUX",
    address: "16 boulevard nuit",
    description: "Des soins adaptés pour chaque type de compagnon, dans une ambiance conviviale.",
    price: "35€",
  },
  {
    id: "4",
    name: "Salon PAT",
    address: "32 rue Auchant",
    description: "Salon offrant des services de coupe, toilettage et bien-être pour vos animaux.",
    price: "25€",
  },
  {
    id: "5",
    name: "Salon Magic",
    address: "2 rue de la Debouillet",
    description: "Un salon de beauté pour animaux qui propose également des services de relaxation pour vos chiens.",
    price: "45€",
  },
];

export default function SalonDetails() {
  const router = useRouter();
  const { id } = router.query; // Récupère l'ID du salon à partir de l'URL

  const salon = salons.find((s) => s.id === id);

  // Si le salon n'est pas trouvé, on retourne un message d'erreur
  if (!salon) {
    return <p>Salon introuvable.</p>;
  }

  return (
    <div className="page-login min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#6C5454] text-white flex items-center justify-between p-6">
        <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
          <Image
            src="/assets/toudoux.png"  // Image dans le dossier public
            alt="Logo Toudoux"
            width={100}  // Agrandissement du logo
            height={100}  // Agrandissement du logo
            className="w-auto mr-2"
          />
        </div>
        <nav className="hidden md:flex gap-8 text-lg font-semibold ml-auto">
          <Link href="/services" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            SERVICES
          </Link>
          <Link href="/login" className="hover:bg-white hover:text-[#503f3f] px-4 py-2 rounded transition">
            CONNEXION
          </Link>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="p-6">
        <h1 className="text-3xl font-semibold">{salon.name}</h1>
        <p className="mt-2 text-lg">{salon.description}</p>
        <p className="mt-2"><strong>Adresse :</strong> {salon.address}</p>
        <p className="mt-2"><strong>Tarif :</strong> {salon.price}</p>
      </main>

      {/* Footer */}
      <footer className="bg-[#6C5454] text-white text-center py-4 mt-auto">
        <p className="mt-4 text-xs">© 2025 Toudoux, Tous droits réservés.</p>
      </footer>
    </div>
  );
}
