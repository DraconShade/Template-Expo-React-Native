import { colors } from "../utils/colors";
import { fonts } from "../utils/fonts";

export const themeLight = {
  mode: "light",

  background: colors.white,

  primary: {
    main: colors.primaryBlue,
    hover: colors.primaryCyan,
    focus: colors.primaryCyanLight,
    disabled: colors.gray200,
  },

  text: {
    primary: colors.primaryDark,
    secondary: colors.gray500,
    disabled: colors.gray400,
  },

  button: {
    background: colors.primaryBlue,
    text: colors.white,
    hover: colors.primaryCyan,
    disabled: colors.gray200,
    fontweight: fonts.size.button,
    fontFamily: fonts.family.medium,
  },

  feedback: {
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
  },

  border: {
    default: colors.gray200,
    focus: colors.primaryCyanLight,
    error: colors.error,
  },

  link: {
    default: colors.primaryBlue,
    hover: colors.primaryCyan,
    visited: "#1557A0",
  },

  fonts,
};
