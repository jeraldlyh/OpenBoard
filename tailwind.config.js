const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or "media" or "class"
    theme: {
        extend: {
            colors: {
                "th-background": "var(--background)",
                "th-background-secondary": "var(--background-secondary)",
                "th-text": "var(--text)",
                "th-accent": "var(--accent)",
                "th-accent-secondary": "var(--accent-secondary)",
                "th-from": "var(--from)",
                "th-to": "var(--to)",
                "th-outline": "var(--outline)",
                "th-text-left": "var(--text-left)",
                "th-text-right": "var(--text-right)",
                "th-background-left-from": "var(--background-left-from)",
                "th-background-left-to": "var(--background-left-to)",
                "th-button": "var(--button)",
                navy1: "#090914",
                navy2: "#091220",
                redtrans: "rgba(248, 113, 113, 0.2)",
                greentrans: "rgba(16, 185, 129, 0.2)",
            },
            boxShadow: {
                "th-shadow": "var(--shadow)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}
