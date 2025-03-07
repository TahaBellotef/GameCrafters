/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html", 
    "./public/profile-daily.html",
    "./public/profile.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#301529", 
        secondary: "#4E2143", 
        accent: "#9C3FE4", // Couleur degradd
        accent2: "#F8049C", //2
        gray: {
          400: "#9CA3AF", // les icônes
          600: "#4B5563", 
          800: "#1F2937", 
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Police Poppins
      },
    },
  },
  plugins: [],
};