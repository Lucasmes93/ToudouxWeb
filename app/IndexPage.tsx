"use client"; // Obligatoire car on utilise useEffect

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/"); // Redirige vers la page principale après 3 secondes
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Bienvenue sur IndexPage</h1>
      <p>Redirection en cours...</p>
    </div>
  );
}
