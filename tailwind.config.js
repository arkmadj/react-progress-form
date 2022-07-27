const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"app-bg": "#ffeadb",
				"app-orange": "#ff9a76",
				"app-green": "#679b9b",
				"app-gray": "#2c3e50",
				"input-border": "#ccc",
			},
			boxShadow: {
				"form-shadow": "0 0 15px 1px rgb(0 0 0 / 40%)",
			},
			fontFamily: {
				monsterrat: ["Monsterrat", "sans-serif"],
			},
			keyframes: {
				"slide-in": {
					"0%": {
						opacity: 0,
						transform: "translateX(250px)",
					},

					"100%": {
						opacity: 1,
						transform: "translateX(0)",
					},
				},
			},
			animation: {
				"slide-in": "slide-in 1s ease 0s 1 forwards",
			},
		},
	},
	plugins: [],
};
