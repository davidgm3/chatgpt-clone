/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {},
		extend: {},
	},
	corePlugins: {
		// ...
		container: false,
	},
	plugins: [],
};
