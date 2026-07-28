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
        'secondary': '#ebb2ff',
        'on-secondary': '#520072',
        'on-primary-container': '#006970',
        'on-surface-variant': '#b9cacb',
        'tertiary-fixed-dim': '#c6c5d2',
        'on-primary-fixed': '#002022',
        'on-tertiary-fixed': '#1a1b24',
        'on-secondary-fixed': '#320047',
        'surface-tint': '#00dbe9',
        'primary-container': '#00f0ff',
        'error': '#ffb4ab',
        'tertiary': '#f7f4ff',
        'on-tertiary-container': '#5e5e69',
        'error-container': '#93000a',
        'on-primary-fixed-variant': '#004f54',
        'outline': '#849495',
        'outline-variant': '#3b494b',
        'on-background': '#d4e4fa',
        'primary': '#dbfcff',
        'inverse-primary': '#006970',
        'secondary-fixed-dim': '#ebb2ff',
        'surface-container-lowest': '#010f1f',
        'surface-container-highest': '#273647',
        'surface-container-low': '#0d1c2d',
        'primary-fixed-dim': '#00dbe9',
        'on-tertiary': '#2f303a',
        'tertiary-container': '#d9d8e6',
        'on-tertiary-fixed-variant': '#454651',
        'on-error-container': '#ffdad6',
        'primary-fixed': '#7df4ff',
        'on-error': '#690005',
        'surface': '#051424',
        'surface-container-high': '#1c2b3c',
        'secondary-fixed': '#f8d8ff',
        'on-surface': '#d4e4fa',
        'secondary-container': '#b600f8',
        'surface-variant': '#273647',
        'tertiary-fixed': '#e3e1ef',
        'surface-dim': '#051424',
        'inverse-surface': '#d4e4fa',
        'inverse-on-surface': '#233143',
        'background': '#051424',
        'surface-bright': '#2c3a4c',
        'on-secondary-container': '#fff6fc',
        'surface-container': '#122131',
        'on-primary': '#00363a'
      },
      borderRadius: {
        'xl': '0.75rem',
        'lg': '0.5rem',
        'full': '9999px'
      },
      spacing: {
        'stack-lg': '32px',
        'gutter': '24px'
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
        'title': ['Hanken Grotesk', 'sans-serif'],
        'mono': ['Geist', 'monospace']
      }
    }
  },
  plugins: []
}
