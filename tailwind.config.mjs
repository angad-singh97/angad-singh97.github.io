/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a1a',
        'charcoal-light': '#252526',
        'muted-gray': '#6e6e73',
        'muted-gray-light': '#8e8e93',
        'cpp-blue': '#569cd6',
        'terminal-green': '#4ec9b0',
        'accent': '#4ec9b0',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
