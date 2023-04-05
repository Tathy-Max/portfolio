/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				'deep-blue': '#010026',
				blue: '#2CBCE9',
				red: '#DC4492',
				yellow: '#FDCC49',
				grey: '#ededed',
				'dark-grey': '#757575',
				'opaque-black': 'rgba(0,0,0,0.35)',
				'baby-purple': 'rgba(128,147,241)',
			},
			backgroundImage: (theme) => ({
				'gradient-rainblue':
					'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
			}),
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				opensans: ['Open Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			content: {
				brush: "url('./assets/circle.png')",
				person1: "url('./assets/tulio.png')",
				person2: "url('./assets/ninaB.jpg')",
				person3: "url('./assets/emilia.jpeg')",
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
