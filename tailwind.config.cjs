/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Gotham SSm A, sans-serif']
    },
    extend: {
      textDecorationThickness: {
        2: '2px'
      }
    }
  },
  plugins: []
}
