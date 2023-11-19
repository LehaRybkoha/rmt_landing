import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'accent': '#00FFE0',
      'yellow': '#FFD600',
      'violet': '#9E00FF',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#322cfe',
      'blue-active': '#2b26d9',
      'gray': {
        DEFAULT: '#e8e8e8',
        2: '#f9f9f9',
        5: '#f3f3f3',
        10: '#e8e8e8',
        20: '#d1d1d1',
        30: '#bababa',
        50: '#8c8c8c',
        70: '#5e5e5e',
      },
      'error': '#FF3232',
      'photo': '#dde1e4',
      'success': '#3CB63A',
      'warning': '#FA9723',
      'tertiary': '#3C3C434D',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      gilroy: ['Gilroy', 'sans-serif'],
    },
    fontSize: {
      'h6': ['0.875rem', {
        lineHeight: 'normal',
        fontWeight: '600',
      }],
      'h5': ['1rem', {
        lineHeight: 'normal',
        fontWeight: '600',
      }],
      'h4': ['1.125rem', {
        lineHeight: 'normal',
        fontWeight: '600',
      }],
      'h3': ['1.25rem', {
        lineHeight: 'normal',
        fontWeight: '500',
      }],
      'h2': ['1.25rem', {
        lineHeight: 'normal',
        fontWeight: '600',
      }],
      'h1': ['1.875rem', {
        lineHeight: 'normal',
        fontWeight: '700',
      }],
      'p-small': ['1.125rem', {
        lineHeight: '1.625rem',
        fontWeight: '500',
      }],
      'p-big': ['1.25rem', {
        lineHeight: '2rem',
        fontWeight: '500',
      }],
    },
    extend: {
      boxShadow: {
        button: '0px 20px 42px 0px rgba(0, 255, 224, 0.36), 0px 12px 12px 0px rgba(0, 0, 0, 0.25), 0px 4px 0px 0px #00FFE0;',
      },
      gridTemplateColumns: {
        header: '1fr auto 1fr',
      },
      width: {
        22: '5.375rem',
      },
      margin: {
        30: '7.5rem',
      },
      padding: {
        30: '7.5rem',
      },
    },
  },
  // plugins: [
  //   function ({ addComponents }) {
  //     addComponents({
  //       '.container': {
  //         'padding': '0 1rem',
  //         '@screen lg': {
  //           padding: '0 2.5rem',
  //         },
  //       },
  //     })
  //   },
  //   '@vueform/slider/tailwind',
  // ],
  safelist: [
    'lg:self-center',
    'lg:justify-self-center',
    'lg:mt-8',
  ],
}
