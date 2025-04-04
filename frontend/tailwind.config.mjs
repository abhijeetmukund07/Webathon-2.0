export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B981', // Emerald
        secondary: '#3B82F6', // Blue
        dark: '#0F172A',    // Dark blue
        light: '#F8FAFC'    // Light gray
      },
    },
  },
  plugins: [],
}