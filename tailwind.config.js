/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [],
    theme: {
    	extend: {
			fontFamily:{
				'mukta':['Mukta','sans-serif']
			},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--green-600))',
    				foreground: 'hsl(var(--green-400))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--yellow-600))',
    				foreground: 'hsl(var(--cosmic-500))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--indian-red-600))',
    				foreground: 'hsl(var(--indian-red-500))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
				green:{
					DEFAULT: 'hsla(var(--green-600))',
					600: 'hsla(var(--green-600))',
					500: 'hsla(var(--green-500))',
					400: 'hsla(var(--green-400))',
					300: 'hsla(var(--green-300))',
					200: 'hsla(var(--green-200))',
					100: 'hsla(var(--green-100))',
					50: 'hsla(var(--green-50))',
					30: 'hsla(var(--green-30))'
				},
				yellow: {
					DEFAULT: 'hsla(var(--yellow-600))',
					600: 'hsla(var(--yellow-600))',
					500: 'hsla(var(--yellow-500))',
					400: 'hsla(var(--yellow-400))',
					300: 'hsla(var(--yellow-300))',
					200: 'hsla(var(--yellow-200))',
					100: 'hsla(var(--yellow-100))',
					50: 'hsla(var(--yellow-50))',
				},
				cosmic:{
					DEFAULT: 'hsla(var(--cosmic-500))',
					500: 'hsla(var(--cosmic-500))',
					400: 'hsla(var(--cosmic-400))',
					300: 'hsla(var(--cosmic-300))',
					200: 'hsla(var(--cosmic-200))',
					100: 'hsla(var(--cosmic-100))',
					50: 'hsla(var(--cosmic-50))',
				},
				red:{
					DEFAULT: 'hsla(var(--indian-red-600))',
					600: 'hsla(var(--indian-red-600))',
					500: 'hsla(var(--indian-red-500))',
					400: 'hsla(var(--indian-red-400))',
					300: 'hsla(var(--indian-red-300))',
					200: 'hsla(var(--indian-red-200))',
					100: 'hsla(var(--indian-red-100))',
					50: 'hsla(var(--indian-red-50))',
				},
				teal:{
					DEFAULT: 'hsla(var(--teal-700))',
					700: 'hsla(var(--teal-700))',
					600: 'hsla(var(--teal-600))',
					500: 'hsla(var(--teal-500))',
					400: 'hsla(var(--teal-400))',
					300: 'hsla(var(--teal-300))',
					200: 'hsla(var(--teal-200))',
					100: 'hsla(var(--teal-100))',
					50: 'hsla(var(--teal-50))',
					30: 'hsla(var(--teal-30))',
				}
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
  }