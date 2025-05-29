/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        // Refer to CSS variables
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          accent: "var(--color-text-accent)",
          onAccent: "var(--color-text-on-accent)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        panel: "var(--color-panel)",
        toolbar: "var(--color-toolbar)",
        border: {
          DEFAULT: "var(--color-border)",
          hover: "var(--color-border-hover)",
          active: "var(--color-border-active)",
        },
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        selection: "var(--color-selection)",
        overlay: "var(--color-overlay)",
        shadow: "var(--color-shadow)",
      },
    },
  },
  safelist: [
    "hover:shadow-none",
    "hover:shadow-sm",
    "hover:shadow-md",
    "hover:shadow-lg",
    "hover:shadow-xl",

    // Dynamic color classes
    {
      pattern:
        /bg-(gray|red|blue|green|yellow|purple|pink|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ["hover"],
    },
    {
      pattern:
        /ring-(gray|red|blue|green|yellow|purple|pink|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ["focus"],
    },
    {
      pattern:
        /text-(gray|red|blue|green|yellow|purple|pink|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ["hover"],
    },
    {
      pattern:
        /border-(gray|red|blue|green|yellow|purple|pink|neutral)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  ],

  plugins: [],
};
