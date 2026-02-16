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
        'tag-amber': '#dcdcaa',
        'tag-purple': '#c586c0',
        'tag-orange': '#ce9178',
        'tag-cyan': '#9cdcfe',
        'tag-pink': '#ff79c6',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
