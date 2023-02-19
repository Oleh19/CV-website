/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'xs': '0px',
			...defaultTheme.screens
		},
		extend: {
			colors: {
				main: '#080A1A'
			}
		}
	},
	plugins: [ require('tailwind-scrollbar')]
}
