const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.js", "./components/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "425px",
			...defaultTheme.screens,
		},
		fontFamily: {
			sans: ['"Nunito"', ...defaultTheme.fontFamily.sans],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@ootiq/tailwind-blandcolors")],
};
