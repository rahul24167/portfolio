/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1': '1',
      },
      colors: {
        'eerie-black': '#1B1B1B',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
      },
      boxShadow: {
        'custom-soft': '-4px 8px 24px hsla(0, 0%, 0%, 0.125)',
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [],
}

