/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layout/*.liquid",
		"./sections/*.liquid",
		"./templates/*.liquid",
		"./templates/customers/*.liquid",
		"./snippets/*.liquids",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
