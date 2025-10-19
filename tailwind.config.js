/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: process.env.DARK_MODE ? process.env.DARK_MODE : 'class',
  content: [
    './app/**/*.{html,js,jsx,ts,tsx,mdx}',
    './components/**/*.{html,js,jsx,ts,tsx,mdx}',
    './utils/**/*.{html,js,jsx,ts,tsx,mdx}',
    './*.{html,js,jsx,ts,tsx,mdx}',
    './src/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],
  presets: [require('nativewind/preset')],
  important: 'html',
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(224, 224, 255)',
          100: 'rgb(199, 199, 252)',
          200: 'rgb(167, 167, 247)',
          300: 'rgb(130, 130, 241)',
          400: 'rgb(102, 102, 234)',
          500: 'rgb(79, 70, 229)',
          600: 'rgb(67, 58, 212)',
          700: 'rgb(55, 47, 186)',
          800: 'rgb(44, 38, 153)',
          900: 'rgb(30, 25, 109)',
        },
        secondary: {
          50: 'rgb(255, 233, 244)',
          100: 'rgb(255, 210, 235)',
          200: 'rgb(253, 182, 221)',
          300: 'rgb(250, 149, 204)',
          400: 'rgb(244, 110, 182)',
          500: 'rgb(236, 73, 154)',
          600: 'rgb(219, 56, 137)',
          700: 'rgb(188, 43, 115)',
          800: 'rgb(146, 32, 89)',
          900: 'rgb(93, 18, 57)',
        },
        success: {
          500: 'rgb(22, 163, 74)',
          600: 'rgb(21, 128, 61)',
        },
        error: {
          500: 'rgb(220, 38, 38)',
          600: 'rgb(185, 28, 28)',
        },
        warning: {
          500: 'rgb(234, 179, 8)',
          600: 'rgb(202, 138, 4)',
        },
        info: {
          500: 'rgb(14, 165, 233)',
          600: 'rgb(2, 132, 199)',
        },
        background: {
          light: '#FBFBFB',
          dark: '#181719',
          muted: '#E5E7EB',
        },
        typography: {
          white: '#FFFFFF',
          black: '#181718',
          gray: '#D4D4D4',
        },
        outline: {
          light: '#E5E7EB',
          dark: '#1F2937',
        },
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        '2xs': '10px',
      },
      boxShadow: {
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
    },
  },
};
