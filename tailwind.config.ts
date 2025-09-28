import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
					DEFAULT: '#BE185D',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#EC4899',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#F3E8FF',
					foreground: '#7C2D92'
				},
				romantic: {
					rose: '#F8BBD9',
					blush: '#FECACA',
					lavender: '#E9D5FF',
					cream: '#FEF3C7',
					sage: '#D1FAE5',
					pearl: '#F8FAFC'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
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
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
				'dancing': ['Dancing Script', 'cursive'],
				'pacifico': ['Pacifico', 'cursive']
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
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
					'50%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' }
				},
				'sparkle': {
					'0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
					'50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' }
				},
				'confetti': {
					'0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px currentColor' },
					'50%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' }
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-5px) rotate(2deg)' }
				},
				'heart-beat': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' }
				},
				'soft-glow': {
					'0%, 100%': { boxShadow: '0 0 10px rgba(236, 72, 153, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(190, 24, 93, 0.4)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 2s infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'confetti': 'confetti 3s linear infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'gentle-float': 'gentle-float 4s ease-in-out infinite',
				'heart-beat': 'heart-beat 2s ease-in-out infinite',
				'soft-glow': 'soft-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;