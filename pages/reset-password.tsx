export default function ResetPassword() {
    return (
      <div className="min-h-screen flex flex-col bg-[#ECD8BD]">
        {/* Header */}
        <header className="bg-[#6C5454] text-white flex items-center justify-between p-6">
          <div className="flex items-center">
            <img
              src="/assets/toudoux.png"  // Image dans le dossier public
              alt="Logo Toudoux"
              width={100}
              height={100}
              className="w-auto mr-2"
            />
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
          <p className="mt-4 text-xs">
            © 2025 Toudoux, Tous droits réservés.
          </p>
        </footer>
      </div>
    );
  }
  