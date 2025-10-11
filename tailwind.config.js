import { colors } from './src/theme/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        laranja: colors.LARANJA,
        azul: colors.AZUL,
        rosa: colors.ROSA,
        verde: colors.VERDE,
        branco: colors.BRANCO,
        cinza: colors.CINZA,
        preto: colors.PRETO,
        vermelho: colors.VERMELHO,
      }
    },
  },
  plugins: [],
}

