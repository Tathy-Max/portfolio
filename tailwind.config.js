//#DE84FB pink
//rgb(224, 107, 242) pink
//#03C2DE light green
//#FFBD5C gold yellow
//rgb(189, 82, 206) dark pink
//#3a0ca3 purple
//#003559 dark blue
//#6096ba cinza
//#023047 green

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				'deep-blue': '#010026', //usou p/background
				blue: '#2CBCE9', //usou p/ menu mobile
				red: '#DC4492', //usou para button
				yellow: '#FDCC49',
				grey: '#ededed',
				'dark-grey': '#757575',
				'opaque-black': 'rgba(0,0,0,0.35)',
				'baby-purple': 'rgba(128,147,241)',
			},
			backgroundImage: (theme) => ({
				'gradient-rainbow':
					'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

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
				person1: "url('./assets/person-1.png')",
				person2: "url('./assets/person-2.png')",
				person3: "url('./assets/person-3.png')",
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
