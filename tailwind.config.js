/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "up-down": {
                    "0%, 100%": { transform: "translateY(-10px)" },
                    "50%": { transform: "translateY(-70px)" },
                },
            },
            animation: {
                "up-down": "up-down 12s infinite",
            },
        },
    },
    plugins: [],
};
