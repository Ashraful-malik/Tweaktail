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
        text: {
          primary: "#171702",
          secondary: "#525252",
          tertiary: "#a3a3a3",
          accent: "#3b82f6",
          onAccent: "#ffffff",
        },
        primary: {
          DEFAULT: "#6366f1",
          hover: "#4f46e5",
        },
        bg: "#fafafa",
        surface: "#ffffff",
        panel: "#f5f5f5",
        toolbar: "#f2f2f2",
        border: {
          DEFAULT: "#e5e5e5",
          hover: "#d4d4d4",
          active: "#6366f1",
        },
        accent: "#ec4899",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
        selection: "#e0e7ff",
        overlay: "rgba(0,0,0,0.5)",
        shadow: "rgba(0,0,0,0.2)",
      },
    },
  },
  safelist: [
    // Dynamic color classes
    {
      pattern:
        /bg-(gray|red|blue|green|yellow|purple|pink)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ["hover"],
    },
    {
      pattern:
        /ring-(gray|red|blue|green|yellow|purple|pink)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ["focus"],
    },
    {
      pattern:
        /text-(gray|red|blue|green|yellow|purple|pink)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern:
        /border-(gray|red|blue|green|yellow|purple|pink)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  ],

  plugins: [],
};
