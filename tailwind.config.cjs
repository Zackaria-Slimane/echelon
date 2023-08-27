/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"bounce-slow": "bounce 3s linear infinite",
				"softbounce-slow": "softbounce 3s ease-in-out infinite",
			},
			keyframes: {
				softbounce: {
					"0%, 100%": { transform: "translateY(5%)" },
					"50%": { transform: "translateY(-10%)" },
				},
			},
			colors: {
				primary: "#004080",
				secondary: "#00f6ff",
				triplet: "#004080",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				dimBlue: "rgba(9, 151, 124, 0.1)",
				sunflower: "#E9DF00",
				lavender: "#E6E6FA",
				skyblue: "#5998C5",
				peach: "#FFDAB9",
				cream: "#F1F6F9",
				navy: "#102C57",
				powder: "#FAFFFD",
				coral: "#FA824C",
				darkpink: "#995D81",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
