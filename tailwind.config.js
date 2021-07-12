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
                "th-text-secondary": "var(--text-secondary)",
                "th-accent": "var(--accent)",
                "th-accent-secondary": "var(--accent-secondary)",
                "th-from": "var(--from)",
                "th-to": "var(--to)",
                "th-outline": "var(--outline)",
                navy1: "#090914",
                navy2: "#091220",
                bordertrans: "rgba(255, 255, 255, 0.25)",
                bordertrans2: "rgba(0, 0, 0, 0.3)",
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
