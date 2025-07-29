/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./biblia/index.html",
    "./biblia/src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cores_projeto: {
          verde_claro: "#7ABA78",
          verde_escuro: "#0A6847"
        }
      }
    },
  },
  plugins: [],
}
