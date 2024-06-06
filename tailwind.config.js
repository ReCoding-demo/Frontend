/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // White
      white: '#FFFFFF',
      // Gray
      'gray-10': '#FDFDFD',
      'gray-20': '#F8F8F8',
      'gray-30': '#E6E6E6',
      'gray-40': '#D5D5D5',
      'gray-50': '#B1B1B1',
      'gray-60': '#909090',
      'gray-70': '#6C6C6C',
      'gray-80': '#464646',
      'gray-90': '#222222',
      'gray-100': '#000000',
      // Green
      'green-10': '#E9FCEE',
      'green-20': '#D3F8DC',
      'green-30': '#A6F2B9',
      'green-40': '#7AEB96',
      'green-50': '#4DE573',
      'green-60': '#1DC648',
      'green-70': '#1AB240',
      'green-80': '#148530',
      'green-90': '#0D5920',
      'green-100': '#072C10',
      // Pink
      'pink-10': '#FFF2F6',
      'pink-20': '#FFBED4',
      'pink-40': '#E86993',
      'pink-60': '#CB3668',
      'pink-80': '#A61C4A',
      'pink-100': '#750A2E',
      // Purple
      'purple-10': '#F9F1FF',
      'purple-20': '#D8AAFD',
      'purple-40': '#AC54F0',
      'purple-60': '#8219D4',
      'purple-80': '#530094',
      'purple-100': '#320059',
      // Cyan
      'cyan-10': '#EAFAFF',
      'cyan-20': '#9FDBEF',
      'cyan-40': '#41ADD1',
      'cyan-60': '#007EA8',
      'cyan-80': '#006182',
      'cyan-100': '#004157',
      // Indigo
      'indigo-10': '#EDECFF',
      'indigo-20': '#B0A9FF',
      'indigo-40': '#7A6DFF',
      'indigo-60': '#4032DC',
      'indigo-80': '#0E00AB',
      'indigo-100': '#0A0075',
      // Orange
      'oragne-10': '#FFEFEA',
      'oragne-20': '#FFB199',
      'oragne-40': '#F47048',
      'oragne-60': '#CF4920',
      'oragne-80': '#A82700',
      'oragne-100': '#621700',
      // Error
      'error-10': '#FFEBEB',
      'error-20': '#FC9595',
      'error-40': '#D83232',
      'error-60': '#B01212',
      'error-80': '#8C0000',
      'error-100': '#660000',
      // Success
      'success-10': '#E8FCF1',
      'success-20': '#A5E1BF',
      'success-40': '#419E6A',
      'success-60': '#00632B',
      'success-80': '#00401C',
      'success-100': '#002611',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1060px',
      xl: '1280px',
      '2xl': '1536px',
    },
    space: {
      contents: '1060px',
      responsive: '95%',
    },
    boxShadow: {
      sm: '0px 3px 4px 0px rgba(9, 30, 66, 0.10)',
      md: '0px 8px 12px 0px rgba(9, 30, 66, 0.10)',
      lg: '0px 18px 28px 0px rgba(9, 30, 66, 0.10)',
    },

    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
