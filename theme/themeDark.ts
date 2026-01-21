import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const themeDark = {
  mode: "dark",

  background: colors.primaryDark,

  primary: {
    main: colors.primaryCyan,
    hover: colors.primaryCyanLight,
    focus: "#7CEEFF",
    disabled: "#1F4C66",
  },

  text: {
    primary: "#E6F4FF",
    secondary: colors.gray300,
    disabled: colors.gray500,
  },

  button: {
    background: colors.primaryCyan,
    text: colors.primaryDark,
    hover: colors.primaryCyanLight,
    disabled: "#1F4C66",
    fontweight: fonts.size.button,
    fontFamily: fonts.family.medium,
  },

  feedback: {
    success: colors.success,
    error: colors.errorDark,
    warning: colors.warningDark,
  },

  border: {
    default: "#1E3552",
    focus: colors.primaryCyanLight,
    error: "#FF6B6B",
  },

  link: {
    default: colors.primaryCyan,
    hover: colors.primaryCyanLight,
    visited: "#1A8FCC",
  },

  fonts,
};
