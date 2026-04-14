import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#05132b',
        'surface-container-low': '#0e1b34',
        'surface-container': '#121f38',
        'surface-container-high': '#1d2a43',
        'surface-container-highest': '#28344f',
        'surface-container-lowest': '#010d26',
        'surface-bright': '#2d3953',
        'surface-dim': '#05132b',
        primary: '#a5deff',
        'primary-container': '#4ac7ff',
        'on-primary': '#003549',
        'on-primary-container': '#00516d',
        secondary: '#bac6e7',
        'secondary-container': '#3d4964',
        'on-secondary': '#24304a',
        'on-secondary-container': '#acb8d9',
        tertiary: '#6feeaa',
        'tertiary-container': '#50d190',
        'on-tertiary': '#003920',
        'on-tertiary-container': '#005634',
        error: '#ffb4ab',
        'on-error': '#690005',
        outline: '#87929a',
        'outline-variant': '#3e484f',
        'on-surface': '#e1e2e5',
        'on-surface-variant': '#bdc8d0',
      },
      fontFamily: {
        headline: ['Sora', 'sans-serif'],
        body: ['Sora', 'sans-serif'],
        label: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'technical-grid':
          'linear-gradient(rgba(165, 222, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(165, 222, 255, 0.02) 1px, transparent 1px)',
      },
      backgroundSize: {
        'technical-grid': '24px 24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
