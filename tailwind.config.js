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
            navy1: "#090914",
            navy2: "#091220",
            bordertrans: "rgba(255, 255, 255, 0.25)",
            bordertrans2: "rgba(0, 0, 0, 0.3)"
        },
        extend: {
            colors: {
                emerald: colors.emerald,
                fuchsia: colors.fuchsia,
                'th-background': 'var(--background)',
                'th-background-secondary': 'var(--background-secondary)',
                'th-text': 'var(--text)',
                'th-text-secondary': 'var(--text-secondary)',
                'th-accent': 'var(--accent)',
                'th-accent-secondary': 'var(--accent-secondary)',
                'th-from': 'var(--from)',
                'th-to': 'var(--to)',
                'th-outline': 'var(--outline)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
