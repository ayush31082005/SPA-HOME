/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFA3B1",
        secondary: "#4E8F7A",
        bg: "#FFF7F5",
        surface: "#FAFAFA",
        text: "#333333",
        heading: "#EFA3B1",
        muted: "#6b6b6b",
        accentPink: "#D96C8D",
        accentGreen: "#3A7D6A"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(217, 108, 141, 0.10)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top right, rgba(239,163,177,0.28), transparent 38%), radial-gradient(circle at bottom left, rgba(107,175,146,0.18), transparent 34%), linear-gradient(180deg, #FFF7F5 0%, #FAFAFA 100%)",
        "cta-gradient":
          "linear-gradient(90deg, #D96C8D 0%, #3A7D6A 100%)"
      }
    },
  },
  plugins: [],
};
