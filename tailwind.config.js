module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Verifica las rutas
  ],
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
  theme: {
    extend: {},
  },
  plugins: [],
};
