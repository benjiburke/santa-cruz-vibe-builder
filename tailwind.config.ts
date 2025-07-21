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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				// Luxury Brand Colors - Professional Palette
				'luxury-gold': {
					50: '#fefef7',
					100: '#fdfaeb',
					200: '#faf2d0',
					300: '#f6e4a5',
					400: '#f0d177',
					500: '#D4AF37', // Main Gold
					600: '#c29b32',
					700: '#a1812a',
					800: '#846926',
					900: '#6d5521',
				},
				'midnight-navy': {
					50: '#f1f3f7',
					100: '#e1e7ef',
					200: '#c8d4e2',
					300: '#a3bbce',
					400: '#7899b6',
					500: '#587ca1',
					600: '#46658a',
					700: '#3a5371',
					800: '#334761',
					900: '#1A2A44', // Main Navy
				},
				'deep-charcoal': {
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#333333', // Main Charcoal
				},
				'luxury-ivory': {
					50: '#fefefe',
					100: '#fdfdfd',
					200: '#fcfcfc',
					300: '#fafafa',
					400: '#f8f8f8',
					500: '#F8F1E9', // Main Ivory
					600: '#e6dfd7',
					700: '#d3ccc4',
					800: '#c0b9b1',
					900: '#ada69e',
				},
				'emerald-luxury': {
					50: '#f0f8f0',
					100: '#dcf0dc',
					200: '#b9e1b9',
					300: '#8bcc8b',
					400: '#5bad5b',
					500: '#378f37',
					600: '#2a742a',
					700: '#225e22',
					800: '#1e4c1e',
					900: '#1C2521', // Darker Emerald
				},
				sunset: {
					50: '#fff7ed',
					100: '#ffedd5',
					200: '#fed7aa',
					300: '#fdba74',
					400: '#fb923c',
					500: '#f97316',
					600: '#ea580c',
					700: '#c2410c',
					800: '#9a3412',
					900: '#7c2d12',
				},
				coral: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
				gold: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
				},
				luxury: {
					50: '#faf9f6',
					100: '#f4f2ea',
					200: '#e8e4d1',
					300: '#d6cfb0',
					400: '#c0b487',
					500: '#a89968',
					600: '#8b7c54',
					700: '#6d6042',
					800: '#4d4530',
					900: '#2d2a1f',
				},
				midnight: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
				},
				// New dark luxury colors
				onyx: {
					50: '#f6f7f9',
					100: '#ebeef3',
					200: '#d3dae4',
					300: '#aebccd',
					400: '#8396b0',
					500: '#647896',
					600: '#51627e',
					700: '#425067',
					800: '#3a4557',
					900: '#1a1d23',
				},
				platinum: {
					50: '#fefefe',
					100: '#fdfdfd',
					200: '#fafafa',
					300: '#f4f4f5',
					400: '#e4e4e7',
					500: '#d4d4d8',
					600: '#a1a1aa',
					700: '#71717a',
					800: '#52525b',
					900: '#27272a',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'luxury-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
					}
				},
				'pulse-gold': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'luxury-glow': 'luxury-glow 2s ease-in-out infinite',
				'pulse-gold': 'pulse-gold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'gradient-x': 'gradient-x 15s ease infinite'
			},
			backgroundImage: {
				'luxury-gradient': 'linear-gradient(135deg, #333333 0%, #1A2A44 50%, #1C2521 100%)',
				'gold-luxury': 'linear-gradient(135deg, #D4AF37 0%, #BFAF37 50%, #A18428 100%)',
				'ivory-luxury': 'linear-gradient(135deg, #F8F1E9 0%, #E6DFD7 50%, #D3CCC4 100%)',
				'charcoal-luxury': 'linear-gradient(135deg, #333333 0%, #454545 50%, #1A1A1A 100%)',
				'navy-shimmer': 'linear-gradient(45deg, #1A2A44, #334761, #1A2A44)',
				'professional-gradient': 'linear-gradient(135deg, #1A2A44 0%, #333333 50%, #1C2521 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
