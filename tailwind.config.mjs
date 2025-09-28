import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#D92500",
          black: "#1E1E1E",
          yellow: "#FFC600",
          green: "#06C167",
          gray: "#ECECEC",
        },
      },
      fontFamily: {
        WidyBold: ["WidyBold", ...defaultTheme.fontFamily.sans],
        WidyThin: ["WidyThin", ...defaultTheme.fontFamily.sans],
        HankenGrotesk: ["HankenGrotesk", ...defaultTheme.fontFamily.sans],
        HankenGroteskBold: [
          "HankenGroteskBold",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
