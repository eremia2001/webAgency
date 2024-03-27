/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      },
      colors: {
        primary: '#00A65F',
        secondary: '#00A65F', // Du hast hier denselben Wert wie für primary angegeben. Wenn das beabsichtigt ist, ist es okay. Wenn nicht, musst du den korrekten Wert für secondary einfügen.
        subline: '#9DB0A3',
      },
    },
  },
  plugins: [],
};
