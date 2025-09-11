/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './lib/**/*.{js,ts,jsx,tsx,mdx}',
        './content/**/*.{md,mdx}',
        './mdx-components.tsx',
        './node_modules/fumadocs-ui/dist/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)'],
                serif: ['var(--font-serif)'],
                mono: ['var(--font-mono)'],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'caret-blink': {
                    '0%,70%,100%': { opacity: '1' },
                    '20%,50%': { opacity: '0' },
                },
            },
            colors: {
                // PlaySuper purple palette
                purple: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7c3aed',
                    800: '#6b21a8',
                    900: '#581c87',
                    950: '#3b0764',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary)/ <alpha-value>)',
                    foreground: 'hsl(var(--primary-foreground)/ <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary)/ <alpha-value>)',
                    foreground: 'hsl(var(--secondary-foreground))/ <alpha-value>',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive)/ <alpha-value> )',
                    foreground: 'hsl(var(--destructive-foreground)/ <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                chart: {
                    1: 'hsl(var(--chart-1))',
                    2: 'hsl(var(--chart-2))',
                    3: 'hsl(var(--chart-3))',
                    4: 'hsl(var(--chart-4))',
                    5: 'hsl(var(--chart-5))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent)',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
            },
            screens: {
                tablet: '640px',
                laptop: '1024px',
                desktop: '1280px',
            },
        },
    },
    // @ts-ignore
    plugins: [require('tailwindcss-animate')],
};
