const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        // `nuxt.config.{js,ts}`,
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
            mono: ['Source Code Pro', defaultTheme.fontFamily.mono],
        },
        extend: {
            keyframes: {
                caret: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0 },
                },
            },
            animation: {
                caret: 'caret 1s infinite step-start',
            },
        },
    },
    plugins: [],
}
