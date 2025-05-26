import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8a2be2",
        "primary-light": "#9370db",
        "primary-dark": "#7B1FA2",
        secondary: "#f8f9fa",
        "secondary-dark": "#e9ecef",
        background: "#ffffff",
        "text-primary": "#1e1e1e",
        "text-secondary": "#4a4a4a",
        "text-muted": "#717171",
        border: "#eaeaea",
        dark: {
          background: "#121212",
          card: "#1E1E1E",
          text: "#E0E0E0",
          muted: "#AAAAAA",
          border: "#333333",
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.03)',
        'custom-lg': '0 15px 50px rgba(0, 0, 0, 0.05)',
        'custom-dark': '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s forwards',
        'slide-left': 'slideInLeft 0.7s forwards',
        'slide-right': 'slideInRight 0.7s forwards',
        'slide-up': 'slideInUp 0.7s forwards',
        'pulse-slow': 'pulse 3s infinite ease-in-out',
        'shimmer': 'shimmer 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
