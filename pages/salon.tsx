import { useRouter } from "next/router";
import Link from "next/link";

// Exemple de données de salon (vous pouvez les récupérer depuis une base de données ou un fichier JSON)
const salons = [
  {
    id: "1",
    name: "Salon Lucas",
    address: "15 rue Temple",
    description: "Salon calme et chaleureux.",
    price: "30€",
  },
  {
    id: "2",
    name: "Salon Bis",
    address: "148 impasse ESTIAM",
    description: "Toilettage pour toutes races.",
    price: "40€",
  },
  {
    id: "3",
    name: "Salon TOUDOUX",
    address: "16 boulevard nuit",
    description: "Soins et toilettage.",
    price: "35€",
  },
  {
    id: "4",
    name: "Salon PAT",
    address: "32 rue Auchant",
    description: "Toilettage et bien-être.",
    price: "25€",
  },
  {
    id: "5",
    name: "Salon Magic",
    address: "2 rue de la Debouillet",
    description: "Salon de beauté et relaxation.",
    price: "45€",
  },
];

export default function SalonDetails() {
  const router = useRouter();
  const { id } = router.query; // Récupère l'ID du salon depuis l'URL

  // Chercher le salon correspondant à l'ID
  const salon = salons.find((s) => s.id === id);

  if (!salon) {
    return <p>Salon introuvable.</p>;
  }

  return (
    <div className="salon-details">
      <header className="bg-[#6C5454] text-white p-6">
        <Link href="/services" className="text-white hover:text-[#6C5454]">
          Retour aux salons
        </Link>
      </header>
      <main className="p-6">
        <h1 className="text-2xl font-semibold">{salon.name}</h1>
        <p className="mt-2">{salon.description}</p>
        <p className="mt-4">Adresse : {salon.address}</p>
        <p className="mt-4">Prx : {salon.price}</p>
      </main>
      <footer className="bg-[#6C5454] text-white text-center py-4 mt-auto">
        <p className="mt-4 text-xs">© 2025 Toudoux, Tous droits réservés.</p>
      </footer>
    </div>
  );
}
