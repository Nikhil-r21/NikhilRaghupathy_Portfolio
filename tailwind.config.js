/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0078D4', // Microsoft Blue
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#0078D4',
          600: '#0060A9',
          700: '#00487F',
          800: '#003054',
          900: '#00182A',
        },
        dark: {
          DEFAULT: '#1B1B1B',
          lighter: '#2D2D2D',
          light: '#3D3D3D'
        },
        light: {
          DEFAULT: '#FFFFFF',
          darker: '#F3F3F3'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Segoe UI Light', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Cascadia Code', 'monospace']
      },
      animation: {
        'blob': 'blob 8s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 120, 212, 0.2)',
        'glow-strong': '0 0 30px rgba(0, 120, 212, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, rgba(0,120,212,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,120,212,0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0,120,212,0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(0,120,212,0.1) 75%)',
      }
    },
  },
  plugins: [],
}