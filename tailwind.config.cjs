module.exports = {
  content: ["./src/**/*.{svelte,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#10101A",
        "dark-lighten": "#161B1F",
        primary: "#1e90ff",
      },
      keyframes: {
        expand: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
      },
      animation: {
        "expand-delay": "expand 0.4s ease-in-out 0.3s forwards",
      },
    },
  },
  plugins: [],
};
