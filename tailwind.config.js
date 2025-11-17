/** @type {import('tailwindcss').Config} */
export default {
	content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			colors: {
				primary: '#537D5D',
				secondary: '#D2D0A0'
			}
		}
	},
	darkMode: 'class',
	mode: 'jit',
	plugins: []
};
