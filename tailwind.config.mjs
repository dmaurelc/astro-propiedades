/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/@wp-block-tools/styles/**/*.js"],
	theme: {
		extend: {
			aspectRatio: {
				'landscape': '4 / 3',
				'portrait':  '3 / 4', 
				'ultrawide': '18 / 5',
				'golden': 	 '1.6180 / 1',
				'rrss': 	 '1.91 / 1',
			 },
		},
	},
	plugins: [],
}
