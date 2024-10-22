/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
