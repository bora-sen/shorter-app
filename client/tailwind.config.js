/** @type {import('tailwindcss').Config} */
/*

### Primary

- Cyan: hsl(180, 66%, 49%)
- Dark Violet: hsl(257, 27%, 26%)

### Secondary

- Red: hsl(0, 87%, 67%)

### Neutral

- Gray: hsl(0, 0%, 75%)
- Grayish Violet: hsl(257, 7%, 63%)
- Very Dark Blue: hsl(255, 11%, 22%)
- Very Dark Violet: hsl(260, 8%, 14%)

*/
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors:{
        'primary-cyan':'hsl(180, 66%, 49%)',
        'primary-dark-violet':'hsl(257, 27%, 26%)',
        'secondary-red': 'hsl(0, 87%, 67%)',
        'neutral-gray':'hsl(0, 0%, 75%)',
        'neutral-gray-violet':'hsl(257, 7%, 63%)',
        'neutral-dark-blue':'hsl(255, 11%, 22%)',
        'neutral-dark-violet':'hsl(260, 8%, 14%)'
      },
      backgroundImage:{
        'band-mobile':'url("/src/Assets/bg-boost-mobile.svg")',
        'band-desktop':'url("/src/Assets/bg-boost-desktop.svg")',
        'shorten-desktop':'url("/src/Assets/bg-shorten-desktop.svg")',
        'shorten-mobile':'url("/src/Assets/bg-shorten-desktop.svg")',
      }
    },
  },
  plugins: [],
}
