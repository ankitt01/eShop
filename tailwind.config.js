module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                amazon_blue: {
                    light: "#232F3E",
                    DEFAULT: "#131921",
                }
            }
        },
    },
    plugins: [],
}