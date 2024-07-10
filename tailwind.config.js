/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				hermans: {
					primary: '#f11a23',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff'
				}
			},
			'dark',
			'retro'
		]
	}
};
