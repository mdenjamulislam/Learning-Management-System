/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#9333EA",
        accent: "#FBBF24",
        neutral: "#374151",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '56px'],
        'default': ['48px', '56px']
      },
      container: {
        center: true,
        padding: '1rem'
      },
      spacing: {
        'section-height': 'calc(80vh - 4rem)', // Adjust based on your header/footer height
        'section-height-mobile': 'calc(80vh - 3rem)', // Adjust based on your header/footer height for mobile
      },
      maxWidth: {
        'course-card': '424px',
      },
      boxShadow: {
        'custom-card': '0 4px 15px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require('daisyui'),]

}