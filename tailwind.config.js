/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#398378",
                secondary: "#7DDE1D",
                addblack: "#212121",
                addgreen: "#102307",
                addgray: "#8E8E8E",
                addwhite: "#D9D9D9",
            },
        },
    },
    plugins: [],
};
