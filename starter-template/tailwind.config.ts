import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/sections/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{html,js,jsx,ts,tsx}',
	],
	theme: {
		screens: {
			lg: '1200px',
			md: '768px',
			sm: '640px',
			xl: '1440px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
			},
		},
		extend: {
			fontFamily: {
				sans: 'var(--font-sans)',
				serif: 'var(--font-serif)',
			},
			animation: {
				'ping-large': 'ping-large 1s ease-in-out infinite',
				'move-left': 'move-left 1s linear infinite',
				'move-right': 'move-right 1s linear infinite',
				'fade-in': 'fade-in 2s ease-in-out forwards',
				ripple: 'ripple 1.2s ease-out infinite',
				'fade-in2': 'fadeIn 2s ease-in-out',
				typing:
					'typing 3s steps(30, end), blink 0.75s step-end infinite alternate',
			},
			keyframes: {
				'ping-large': {
					'75%, 100%': {
						transform: 'scale(3)',
						opacity: '0',
					},
				},
				ripple: {
					'0%': { transform: 'scale(0.5)', opacity: '1' },
					'100%': { transform: 'scale(1.5)', opacity: '0' },
				},
				'move-left': {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(-50%)',
					},
				},
				'move-right': {
					'0%': {
						transform: 'translateX(-50%)',
					},
					'100%': {
						transform: 'translateX(0%)',
					},
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				typing: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
				blink: {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'black' },
				},
			},
			colors: {
				emerald: {
					300: '#6ee7b7',
					400: '#34d399',
				},
				gray: {
					900: '#1a1a1a',
					700: '#2d2d2d',
				},
			},
		},
	},
	plugins: [],
};

export default config;
