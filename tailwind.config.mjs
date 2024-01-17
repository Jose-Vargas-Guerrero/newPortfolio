/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		colors: {
			'gray': '#202023',
			'card': '#313134',
			'sky': '#81e6d9',
		},
	},
		
	},
	plugins: [],
}
