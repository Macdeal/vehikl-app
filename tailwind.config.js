/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"gery-text": "#d1d5db",
				brand: "#dd5f13",
			},
		},
	},
	plugins: [],
};
