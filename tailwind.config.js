/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#02070F',
        'system-surface': '#0B1220',
        'panel-layer': '#111827',
        'electric-blue': '#2F80FF',
        'neon-cyan': '#00E5FF',
        'amber': '#FFB020',
        'system-green': '#22C55E',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '64px', fontWeight: 700 }],
        'h2': ['32px', { lineHeight: '40px', fontWeight: 700 }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: 600 }],
        'body': ['16px', { lineHeight: '24px' }],
      },
      animation: {
        /* State transitions only - no decorative animations */
        'state-change': 'stateChange 0.3s ease-out',
        'activate': 'activate 0.4s ease-out',
        'flow': 'flow 1s ease-in-out infinite',
      },
      keyframes: {
        stateChange: {
          '0%': { opacity: '0.8', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        activate: {
          '0%': { borderColor: 'rgba(47, 128, 255, 0.3)' },
          '50%': { borderColor: 'rgba(47, 128, 255, 0.8)' },
          '100%': { borderColor: 'rgba(47, 128, 255, 1)' },
        },
        flow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
