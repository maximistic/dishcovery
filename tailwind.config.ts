import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // spacing: {
      //   0: "0",
      //   1: "0.4rem",
      //   2: "0.8rem",
      //   3: "1.2rem",
      //   4: "1.6rem",
      //   5: "2.4rem",
      //   6: "3.2rem",
      //   7: "4rem",
      // }
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
