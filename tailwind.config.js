/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
        // Puedes añadir más fuentes aquí
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
