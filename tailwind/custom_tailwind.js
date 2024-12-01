tailwind.config = {
  theme: {
    screens: {
      "big-desktop": { min: "112.5em" },
      // => @media (min-width: 1800px) { ... }

      "tab-land": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "tab-port": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "tab-small": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      phone: { max: " 639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "icon-tools": " linear-gradient(135deg, #3f3f3f, #2d2d2d);",
        "icon-authority": " linear-gradient(135deg,#2b2b2b,#232323)",
      },
      lineHeight: {
        "section-header": "5.5rem", //=> 88px
      },
      fontSize: {
        footer: ".9375rem", //=> 15px
        "section-paragraph": "1.625rem", //=> 26px
        "section-header": "5rem", //=> 80px
      },
      colors: {
        "color-primary": "rgb(255, 0, 48)",
        "color-primary-dark": " rgb(145, 17, 41)",
        "color-secondary": "rgb(24, 24, 24)",
        "color-paragraph": "#bababa",
        "color-bg-dark": "rgb(24, 24, 24)",
        "color-bg-dark-light": "rgb(35 35 35)",
        "color-bg-dark-light-2": "rgb(42 42 42)",
      },
    },
  },
  plugins: [],
};
