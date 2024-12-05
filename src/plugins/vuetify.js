/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#f5077a",
          secondary: "#03364f",
        },
      },
      dark: {
        colors: {
          primary: "#f7bb16",
          secondary: "#16acf7",
        },
      },
    },
    defaultTheme: "light",
    // defaultTheme: "dark",
  },
});
