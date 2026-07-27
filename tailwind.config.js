/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './constants.tsx',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Ported from the previous inline CDN config so the original
        // components keep rendering if these branches are ever merged.
        primary: '#6366f1',
        accent1: '#f43f5e', // Rose
        accent2: '#0ea5e9', // Sky
        accent3: '#8b5cf6', // Violet
        accent4: '#10b981', // Emerald
        darkBg: '#09090b', // Zinc 950
        cardDark: '#18181b', // Zinc 900
        // Redesign palette
        ink: '#0C0C0C',
        mist: '#D7E2EA',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        blob: 'blob 7s infinite',
        'float-3d': 'float 6s ease-in-out infinite',
        shine: 'shine 8s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(2deg) rotateY(2deg)' },
          '50%': { transform: 'translateY(-15px) rotateX(-2deg) rotateY(-2deg)' },
        },
        shine: {
          from: { backgroundPosition: '200% center' },
          to: { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [],
};
