/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                yaruPrimary: "blue",
                yaruSecondary: "green",
            },
            fontFamily: {
                nunito: ["Nunito"],
            },
        },
    },
    plugins: [],
};
