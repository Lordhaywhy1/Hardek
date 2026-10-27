/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1830',
        ink: '#10233F',
        electric: '#1F7AFF',
        cyan: '#1FC8DB',
        mist: '#F4F7FB',
        line: '#E6ECF3',
        green: '#15966E',
        amber: '#D88900',
        danger: '#D94E5C',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'], mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular'] },
      boxShadow: { card: '0 12px 40px rgba(16, 35, 63, 0.07)', lift: '0 18px 50px rgba(16, 35, 63, 0.12)' },
    },
  },
  plugins: [],
}
