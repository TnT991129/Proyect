/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8174A0",
        secondary: "#FFD2A0"
      },
      keyframes: {
        tr: {
          "0%": { transform: "translateX(800px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        tl: {
          "0%": { transform: "translateX(-500px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        tt: {
          "0%": { transform: "translateY(500px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        tb: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        bounceXr: "tr 1.3s ease-in",
        bounceXrs: "tr 1.6s ease-in",
        bounceXrss: "tr 1.9s ease-in",
        bounceXl: "tl 1s ease-in forwards",
        bounceXls: "tl 1s .5s ease-in forwards",
        bounceXlss: "tl 1s 1s ease-in forwards",
        bounceYt: "tt 4.2s ease-in",
        bounceYb: "tb 4.2s ease-in"
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          maskImage: "linear-gradient(black 80%, transparent)",
          WebkitMaskImage: "linear-gradient(black 80%, transparent)"
        }
      });
    }
  ]
};

