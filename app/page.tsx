import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="header">
        <div className="flex items-center">
          <Image
            src="/assets/toudoux.png"
            alt="Logo Toudoux"
            width={50}
            height={50}
            className="h-10 w-auto mr-2"
          />
        </div>

        {/* Navigation avec la classe CSS */}
        <nav className="nav-links">
          <a href="#services">SERVICES</a>
          <a href="#connexions">CONNEXIONS</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Salon List */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Salons populaires près de chez vous</h2>
          <ul className="bg-brown text-white rounded-lg overflow-hidden">
            {[
              "Salon Lucas : 15 rue Temple",
              "Salon Bis : 148 impasse ESTIAM",
              "Salon TOUDOUX : 16 boulevard nuit",
              "Salon PAT : 32 rue auchant",
              "Salon Magic : 2 rue de la Debouillet",
            ].map((salon, index) => (
              <li
                key={index}
                className="p-3 border-b border-brown-light last:border-none cursor-pointer hover:bg-orange-500">
                {salon}
              </li>
            ))}
          </ul>
        </section>

        {/* Image Section */}
        <section className="flex justify-center items-center">
          <Image
            src="/assets/chien.jpg"
            alt="Homme et chien"
            width={500}
            height={350}
            className="rounded-lg shadow-md"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-600">
        Toudoux : Parce que votre compagnon mérite un soin tout doux !
      </footer>
    </div>
  );
}
