"use client"; // Obligatoire car composant interactif

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Bienvenue sur Toudoux</h1>
      <p className="text-gray-600 mt-2">Chargement en cours...</p>
    </div>
  );
}
