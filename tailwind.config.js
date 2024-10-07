module.exports = {
  content: [
    "./src/App.tsx", // Archivo principal de tu aplicación
    "./src/components/**/*.{js,ts,jsx,tsx}", // Todos los archivos en la carpeta components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-purple-500",
    "text-white",
    "bg-gray-200",
    "text-black",
    "text-5xl",
    "text-3xl",
    "font-bold",
    "rounded-full",
    "hover:bg-gray-800",
  ],
};
