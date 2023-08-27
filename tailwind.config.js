/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customblue: "#333cbd",
        boxColor: "#1d1d1d",
        background: "#01010D",
        bluee: "#052649",
        gradient: "#74a0a8",
        borderColor: "#1b1b27",
        backgroundColor: "#01010D",
        AuthCardsColor: "#060612",
        AuthCardsBorderColor: "#29295D",
        inputColor: "#1D1D20",
        inputBorder: "#4f4f51",
        AuthColor: "#575DC1",
      },
      fontFamily: {
        inter: ["Inter", "cursive", "Comic Sans MS"],
        montserrat: ["Montserrat", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
    
  },
  plugins: [],
}