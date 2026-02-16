/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0f0f12',
        'charcoal-light': '#1a1a20',
        'charcoal-card': '#16161a',
        'muted-gray': '#6e6e73',
        'muted-gray-light': '#a1a1a6',
        'cpp-blue': '#569cd6',
        'terminal-green': '#4ec9b0',
        'tag-amber': '#dcdcaa',
        'tag-purple': '#c586c0',
        'tag-orange': '#ce9178',
        'tag-cyan': '#9cdcfe',
        'tag-pink': '#ff79c6',
        accent: {
          cyan: '#22d3ee',
          lime: '#a3e635',
          coral: '#fb7185',
          violet: '#a78bfa',
          amber: '#fbbf24',
        },
        pastel: {
          blue: '#93c5fd',
          mint: '#99f6e4',
          lavender: '#c4b5fd',
          peach: '#fdba74',
          rose: '#f9a8d4',
          cyan: '#67e8f9',
          amber: '#fde68a',
          green: '#86efac',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
        'safe-t': 'env(safe-area-inset-top)',
        'safe-l': 'env(safe-area-inset-left)',
        'safe-r': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};
