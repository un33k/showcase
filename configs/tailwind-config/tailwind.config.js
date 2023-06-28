/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '../../apps/web/**/*.{ts,tsx,mdx}',
    '../../packages/**/*.{ts,tsx,mdx}',
    './node_modules/preline/dist/*.js',
  ],
  themes: ['light', 'dark'],
  plugins: [require('preline/plugin')],
};
