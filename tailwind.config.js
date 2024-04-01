/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // White
      white: '#FFFFFF',
      // Gray
      gray10: '#FDFDFD',
      gray20: '#F8F8F8',
      gray30: '#E6E6E6',
      gray40: '#D5D5D5',
      gray50: '#B1B1B1',
      gray60: '#909090',
      gray70: '#6C6C6C',
      gray80: '#464646',
      gray90: '#222222',
      gray100: '#000000',
      // Green
      green10: '#E9FCEE',
      green20: '#D3F8DC',
      green30: '#A6F2B9',
      green40: '#7AEB96',
      green50: '#4DE573',
      green60: '#1DC648',
      green70: '#1AB240',
      green80: '#148530',
      green90: '#0D5920',
      green100: '#072C10',
      // Pink
      pink10: '#FFF2F6',
      pink20: '#FFBED4',
      pink40: '#E86993',
      pink60: '#CB3668',
      pink80: '#A61C4A',
      pink100: '#750A2E',
      // Purple
      purple10: '#F9F1FF',
      purple20: '#D8AAFD',
      purple40: '#AC54F0',
      purple60: '#8219D4',
      purple80: '#530094',
      purple100: '#320059',
      // Cyan
      cyan10: '#EAFAFF',
      cyan20: '#9FDBEF',
      cyan40: '#41ADD1',
      cyan60: '#007EA8',
      cyan80: '#006182',
      cyan100: '#004157',
      // Indigo
      indigo10: '#EDECFF',
      indigo20: '#B0A9FF',
      indigo40: '#7A6DFF',
      indigo60: '#4032DC',
      indigo80: '#0E00AB',
      indigo100: '#0A0075',
      // Orange
      oragne10: '#FFEFEA',
      oragne20: '#FFB199',
      oragne40: '#F47048',
      oragne60: '#CF4920',
      oragne80: '#A82700',
      oragne100: '#621700',
      // Error
      error10: '#FFEBEB',
      error20: '#FC9595',
      error40: '#D83232',
      error60: '#B01212',
      error80: '#8C0000',
      error100: '#660000',
      // Success
      oragne10: '#E8FCF1',
      oragne20: '#A5E1BF',
      oragne40: '#419E6A',
      oragne60: '#00632B',
      oragne80: '#00401C',
      oragne100: '#002611',
    },
    extend: {
      spacing: {
        contents: '1060px',
        responsive: '95%',
      },
      boxShadow: {
        sm: '0px 3px 4px 0px rgba(9, 30, 66, 0.10)',
    },
  },
  plugins: [],
};
