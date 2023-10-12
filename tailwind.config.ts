import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      '2xs': { min: '300px' },
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      '2xl': { min: '1359px' } // Desktop widescreen.
    },
    animation: {
      zoomIn:  "zoomIn .4s",
      grow: "transition height 1s ease-in"
    },
    extend: {
      keyframes : {
        zoomIn : {
          '0%' : {transform: "scale(0)"},
          '100%': {transform: "scale(1)"}
        },
      }, 
      height: {
        sm: "200px",
        cover: "265px"
      },
      gridTemplateColumns: {
        sm : "repeat(auto-fill,130px)",
        searchResults: "repeat(auto-fill,185px);"
      },
      // gridTemplateRows : {
      //   sm: "repeat(auto-fill , 225px)"
      // },
      colors: {
        primary: "#F0F1F2",
        secondary:"#E7EBF4",
        textPrimary: "#516170",
        secondaryHover: "#2D2E49",
        secondaryText: "#E1E4E9",
        searchbarFocus: "#59D9B5"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
