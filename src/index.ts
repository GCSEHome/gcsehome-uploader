import { R2Explorer } from "r2-explorer";

export default R2Explorer({
  // Set to false to allow users to upload files
  readonly: false,

  // Learn more how to secure your R2 Explorer instance:
  // https://r2explorer.com/getting-started/security/
  // cfAccessTeamName: "my-team-name",

  // Branding
  branding: {
    title: "GCSE Home - Storage Backend",
    logo: "https://www.gcsehome.com/logo.png",
  },

  // Theme using GCSE Home branding colors
  theme: {
    primary: "#1E3A8A",      // dark blue main buttons/links
    background: "#0F172A",   // very dark background
    text: "#F8FAFC",         // light text
    secondary: "#FACC15",    // subtle accent color
    danger: "#DC2626",       // delete button color
    border: "#334155",       // borders and dividers
    hover: "#2563EB",        // hover color for buttons
  },

  // Font
  fontFamily: "Lexend, sans-serif",
});
