/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false, // Désactive les Source Maps
  devtool: "hidden-source-map", // Empêche Next.js d'essayer de charger les fichiers .map en dev
};

export default nextConfig;
