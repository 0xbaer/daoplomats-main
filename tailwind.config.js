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

      colors: {
        primary: "#DFE225",
        secondary: "#FCFBEB",
        autofill: "#333F3D",
        autofillText: "#D3D3D3",
      },

      fontFamily: {
        philosopher: ["var(--font-philosopher)"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".autofill": {
          "&:-webkit-autofill": {
            "background-color": "#333F3D !important",
            color: "#D3D3D3 !important",
          },
          "&:-webkit-autofill::first-line": {
            color: "#D3D3D3 !important",
          },
        },
      });
    },
  ],
};
