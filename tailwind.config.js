/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        textColor: "#95969D",
        secondary: {
          DEFAULT: "#F2F2F3",
        },
        primary: {
          DEFAULT: "#16A34A",
          100: "#22C55E",
        },
      },
    },
  },
  plugins: [],
};
