import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a5cc2b",
        secondary: "#1f2423",
        third: "#785dd2",
        fourth: "#d5ceef",
        black: "#000000",
        white: "#ffffff",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        heading: ["Oswald-Regular", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero/bg.png')",
        'separator': "url('/images/hero/separator.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
