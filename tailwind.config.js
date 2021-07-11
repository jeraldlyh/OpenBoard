const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or "media" or "class"
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            redtrans: "rgba(248, 113, 113, 0.2)",
            yellow: colors.amber,
            green: colors.emerald,
            greentrans: "rgba(16, 185, 129, 0.2)",
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            navy1: "#090914",
            navy2: "#091220",
            bordertrans: "rgba(255, 255, 255, 0.25)",
            bordertrans2: "rgba(0, 0, 0, 0.3)"
        },
        boxShadow: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            none: "none",
        },
        extend: {
            colors: {
                "th-background": "var(--background)",
                "th-background-secondary": "var(--background-secondary)",
                "th-text": "var(--text)",
                "th-text-secondary": "var(--text-secondary)",
                "th-accent": "var(--accent)",
                "th-accent-secondary": "var(--accent-secondary)",
                "th-from": "var(--from)",
                "th-to": "var(--to)",
                "th-outline": "var(--outline)",
            },
            boxShadow: {
                "th-shadow": "var(--shadow)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
