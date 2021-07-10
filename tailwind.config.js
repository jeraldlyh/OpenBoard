const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or "media" or "class"
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
        },
        extend: {
            colors: {
                emerald: colors.emerald,
                fuchsia: colors.fuchsia,
                'th-background': 'var(--background)',
                'th-background-secondary': 'var(--background-secondary)',
                'th-foreground': 'var(--foreground)',
                'th-primary-dark': 'var(--primary-dark)',
                'th-primary-medium': 'var(--primary-medium)',
                'th-primary-light': 'var(--primary-light)',
                'th-accent-dark': 'var(--accent-dark)',
                'th-accent-medium': 'var(--accent-medium)',
                'th-accent-light': 'var(--accent-light)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
