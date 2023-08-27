/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "color-1": "#191C25",
        "color-2": "#13141F",
        "color-3": "#0E0F14",
        "color-4": "#75777C",
        "green-1": "#6CDB00",
      },
      colors: {
        "color-4": "#75777C",
        "green-1": "#6CDB00",
      },
      width: {
        "100px": "100px",
      },
      inset: {
        "100px": "100px",
      },
      gridTemplateColumns: {
        '100px-1fr': '100px 1fr',
        'auto-30%-1fr': '1fr 30% repeat(5, 1fr)',
        'auto-30%-1fr-2': '60% 1fr 1fr',
        '40%-repeat-1fr': '40% repeat(3, 1fr)'
      },
      height: {
        '400px': '400px',
        '300px': '300px',
      }
    },
  },
  plugins: [],
};
