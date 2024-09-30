import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        background: 'rgba(var(--color-background), <alpha-value>)',
        foreground: 'rgba(var(--color-foreground), <alpha-value>)',
        text: 'rgba(var(--color-text), <alpha-value>)',
        lightText: 'rgba(var(--color-lightText), <alpha-value>)',
        border: 'rgba(var(--color-border), <alpha-value>)',
        primary: '#8D6DEF',
        destructive: 'rgb(220, 38, 38)',
        error: 'rgb(255, 59, 48)',
        info: 'rgb(0, 122, 255)',
        warning: 'rgb(255, 149, 0)',
        success: 'rgb(52, 199, 89)',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',

        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',

        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',

        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))',

        '2-cols': 'minmax(300px, 30%) 1fr',
      },
      transitionTimingFunction: {
        'tooltip-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      keyframes: {
        popupscale: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        loader: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      boxShadow: {
        custom: '0 8px 32px 0 #2C2533',
      },
      animation: {
        popupscale: 'popupscale .25s ease',
        loader: 'loader .8s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [
    plugin(function gradientPlugin(api) {
      api.addUtilities({
        '.mask-radial-gradient': {
          maskImage: 'radial-gradient(rgba(0, 0, 0, 0.8), transparent 60%)',
        },
        '.mask-linear-gradient-to-b': {
          maskImage:
            'linear-gradient(to bottom, white 0%, white 33%, transparent 90%)',
        },
        '.custom-gradient-1': {
          backgroundImage: 'linear-gradient(to right, #f06, #9f6)',
        },
        '.custom-gradient-2': {
          backgroundImage: 'linear-gradient(to left, #f06, #9f6)',
        },
      });
    }),
  ],
};
export default config;
