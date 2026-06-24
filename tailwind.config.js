/** @type {import('tailwindcss').Config} */
// Configuración para compilar Tailwind a un CSS estático (sin depender del CDN).
// Reconstruir con:  npx tailwindcss@3 -i css/tailwind.input.css -o css/tailwind.css --minify
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0f1a",
          800: "#0f1623",
          700: "#161e2e",
          600: "#1e2839",
          500: "#2a364c",
        },
        teal: {
          glow: "#2dd4bf",
          DEFAULT: "#14b8a6",
          deep: "#0d9488",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 20px rgba(45,212,191,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(45,212,191,0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
