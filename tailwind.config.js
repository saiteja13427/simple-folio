/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				"manrope-bold": ["manrope-bold", "sans-serif"],
				"manrope-semibold": ["manrope-semibold", "sans-serif"],
				"manrope-medium": ["manrope-medium", "sans-serif"],
				"manrope-normal": ["manrope-normal", "sans-serif"],
				"manrope-light": ["manrope-light", "sans-serif"],
				"manrope-extralight": ["manrope-extralight", "sans-serif"],
				"manrope-thin": ["manrope-thin", "sans-serif"],
			},
		},
	},
	plugins: [],
};
