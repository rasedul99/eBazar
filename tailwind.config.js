module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#E94560",
      secondary: "#ecc94b",
      white: "#FFFFFF",
      slate: "#808080",
      blue: "#3C91E6",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#FD7238",
      green: "#13ce66",
      yellow: "#FFCE26",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    extend: {},
  },
  plugins: [],
};
