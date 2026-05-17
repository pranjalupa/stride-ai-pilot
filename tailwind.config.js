/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: ['Switzer', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          20: '#F0FAF4',
          50: '#E6F5EC',
          100: '#C8EBD4',
          200: '#9DD6B4',
          300: '#6CBD8E',
          400: '#3FA36A',
          500: '#1A7A4A',
          600: '#156040',
          700: '#0F4A31',
          800: '#0A3322',
          900: '#061F15',
        },
        neutral: {
          20: '#FAFAF8',
          50: '#F5F5F2',
          100: '#EFEFEB',
          200: '#E5E5E0',
          300: '#D4D4CC',
          400: '#A8A89E',
          500: '#7A7A70',
          600: '#5C5C52',
          700: '#3D3D35',
          800: '#2A2A22',
          900: '#1A1A12',
        },
        semantic: {
          error: '#9B5C63',
          success: '#5F8B6D',
          info: '#6A7C8F',
          warning: '#A08B57',
        }
      },
      boxShadow: {
        'card': '0px 4px 12px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'lg': '8px',
        'xl': '12px',
      },
      spacing: {
        // Tailwind default has 4px spacing out of the box (e.g. 1 = 4px, 2 = 8px, etc), but we can define explicit if needed
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bubbleUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'bubble-up': 'bubbleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
