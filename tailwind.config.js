/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'on-surface-variant': '#b9cacb',
        'inverse-on-surface': '#233143',
        'on-tertiary': '#2f303a',
        'on-secondary-fixed-variant': '#74009f',
        'outline-variant': '#3b494b',
        'surface': '#051424',
        'primary-container': '#00f0ff',
        'surface-container': '#122131',
        'on-tertiary-fixed': '#1a1b24',
        'background': '#051424',
        'error-container': '#93000a',
        'on-primary-fixed': '#002022',
        'tertiary-container': '#d9d8e6',
        'primary-fixed': '#7df4ff',
        'surface-container-lowest': '#010f1f',
        'tertiary': '#f7f4ff',
        'inverse-primary': '#006970',
        'secondary-fixed-dim': '#ebb2ff',
        'on-background': '#d4e4fa',
        'tertiary-fixed-dim': '#c6c5d2',
        'primary': '#dbfcff',
        'secondary-fixed': '#f8d8ff',
        'on-primary-container': '#006970',
        'secondary': '#ebb2ff',
        'outline': '#849495',
        'on-tertiary-fixed-variant': '#454651',
        'on-error-container': '#ffdad6',
        'on-tertiary-container': '#5e5e69',
        'error': '#ffb4ab',
        'surface-tint': '#00dbe9',
        'primary-fixed-dim': '#00dbe9',
        'on-primary': '#00363a',
        'on-surface': '#d4e4fa',
        'surface-container-high': '#1c2b3c',
        'surface-variant': '#273647',
        'on-secondary-container': '#fff6fc',
        'on-primary-fixed-variant': '#004f54',
        'surface-container-low': '#0d1c2d',
        'inverse-surface': '#d4e4fa',
        'secondary-container': '#b600f8',
        'on-secondary-fixed': '#320047',
        'surface-dim': '#051424',
        'tertiary-fixed': '#e3e1ef',
        'on-secondary': '#520072',
        'on-error': '#690005',
        'surface-bright': '#2c3a4c',
        'surface-container-highest': '#273647'
      },
      borderRadius: {
        'xl': '0.75rem',
        'lg': '0.5rem',
        'full': '9999px'
      },
      spacing: {
        'container-max': '1280px',
        'stack-lg': '32px',
        'gutter': '24px',
        'margin-mobile': '16px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'margin-desktop': '48px',
        'unit': '4px'
      },
      fontFamily: {
        'title-md': ['Hanken Grotesk', 'sans-serif'],
        'headline-lg-mobile': ['Hanken Grotesk', 'sans-serif'],
        'headline-xl': ['Hanken Grotesk', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'headline-lg': ['Hanken Grotesk', 'sans-serif'],
        'label-sm': ['Geist', 'sans-serif'],
        'mono-code': ['Geist', 'monospace']
      },
      fontSize: {
        'title-md': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'headline-lg-mobile': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '500' }],
        'mono-code': ['14px', { lineHeight: '1.5', fontWeight: '400' }]
      }
    }
  },
  plugins: []
}
