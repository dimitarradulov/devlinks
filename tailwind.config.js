/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-60": "#633CFF",
        "primary-85": "#BEADFF",
        "primary-95": "#EFEBFF",
        "secondary-20": "#333333",
        "secondary-45": "#737373",
        "secondary-85": "#D9D9D9",
        "secondary-98": "#FAFAFA",
        danger: "#FF3939",
        "danger-75": "#FF8080",
      },
      fontSize: {
        "heading-m": [
          "2rem",
          {
            lineHeight: "150%",
            fontWeight: "700",
          },
        ],
        "heading-s": [
          "1rem",
          {
            lineHeight: "150%",
            fontWeight: "700",
          },
        ],
        "body-m": [
          "1rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "body-s": [
          "0.75rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
      },
      boxShadow: {
        active: "0px 0px 32px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
