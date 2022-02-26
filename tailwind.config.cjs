module.exports = {
  content: ["./src/**/*.{svelte,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#1f1f1f",
        "dark-lighten": "#252525",
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
