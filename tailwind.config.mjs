/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f7',
          100: '#dcf2ee',
          200: '#bce6dc',
          300: '#8fd3c4',
          400: '#5abaa7',
          500: '#3ea08c',
          600: '#2f8070',
          700: '#29675a',
          800: '#245349',
          900: '#21453e',
          950: '#0f2924',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        dark: {
          50: '#f8fafb',
          100: '#f1f4f6',
          200: '#e5eaed',
          300: '#d1dae0',
          400: '#b7c4cd',
          500: '#9baab8',
          600: '#8594a5',
          700: '#728091',
          800: '#5d6b78',
          900: '#4e5a63',
          950: '#0a0e12',
        },
        background: {
          primary: '#0a0e12',
          secondary: '#0f1419',
          tertiary: '#1a202c',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'Source Sans Pro', 'system-ui', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-left': 'slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1)',
        'glow': 'glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(249, 202, 36, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(249, 202, 36, 0.8)', 
            transform: 'scale(1.02)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 30px rgba(249, 202, 36, 0.3)',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 50px rgba(249, 202, 36, 0.6)',
            transform: 'scale(1.02)',
          }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'bounce-smooth': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}