import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// 사용자 정의 폰트 추가
			fontFamily: {
				quicksand: ["'Quicksand'", "sans-serif"],
				montserrat: ["'Montserrat'", "sans-serif"],
			},
			backgroundImage: {
				"radial-gradient": "radial-gradient(#282c34, #282c34)",
			},
			colors: {
				"header-start": "#59453c",
				"header-end": "#8f3a09",
				"gradient-from": "#f9572a",
				"gradient-to": "#ffc905",
				"text-error": "#262626",
				"text-sub": "#ddd8d8",
			},
		},
	},
	plugins: [],
} satisfies Config;
