
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '72rem'
			}
		},
		extend: {
			spacing: {
				'section': 'var(--section-gap)',
			},
			maxWidth: {
				'content': 'var(--content-width)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated custom colors for Stratified Advisory based on the design
				stratified: {
					DEFAULT: '#8B2F41', // Deep burgundy from hero image
					light: '#D8A0A6',    // Soft pink/rose
					lighter: '#F0D9DC',  // Very light pink
					dark: '#3C1822',     // Darker burgundy (used in button)
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'var(--radius)',
				sm: 'var(--radius)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				// New radar chart animations
				'radar-fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'radar-scale-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				// New radar chart animations
				'radar-bg': 'radar-fade-in 1s ease-out forwards',
				'radar-center': 'radar-fade-in 0.5s ease-out 0.3s forwards',
				'radar-line-1': 'radar-fade-in 0.5s ease-out 0.5s forwards',
				'radar-line-2': 'radar-fade-in 0.5s ease-out 0.7s forwards',
				'radar-line-3': 'radar-fade-in 0.5s ease-out 0.9s forwards',
				'radar-node-1': 'radar-fade-in 0.5s ease-out 1.1s forwards',
				'radar-node-2': 'radar-fade-in 0.5s ease-out 1.3s forwards',
				'radar-node-3': 'radar-fade-in 0.5s ease-out 1.5s forwards',
				'radar-label-1': 'radar-fade-in 0.5s ease-out 1.7s forwards',
				'radar-label-2': 'radar-fade-in 0.5s ease-out 1.9s forwards',
				'radar-label-3': 'radar-fade-in 0.5s ease-out 2.1s forwards',
				'radar-triangle': 'radar-fade-in 0.8s ease-out 2.3s forwards',
				'radar-pulse-1': 'radar-fade-in 0.8s ease-out 2.5s forwards',
				'radar-pulse-2': 'radar-fade-in 0.8s ease-out 2.7s forwards',
			},
			fontFamily: {
				sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
				heading: ['Spectral', 'Georgia', 'serif'],
				serif: ['Spectral', 'Georgia', 'serif'],
			},
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
