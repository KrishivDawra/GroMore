export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: { '0%': { backgroundPosition: '100%' }, '100%': { backgroundPosition: '-100%' } },
      },
      animation: { shine: 'shine 5s linear infinite' },
    },
  },
  plugins: [],
};