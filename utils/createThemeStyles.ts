import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@theme/themeProvider";

// Style types
type Styles = {
  container: ViewStyle;
  subContainer: ViewStyle;
  userInput: TextStyle;
  passwordInput: TextStyle;
  gImage: ImageStyle;
};

export const createThemeStyles = (theme: ReturnType<typeof useTheme>) => {
  const generalInput: TextStyle = {
    width: "70%",
    borderWidth: 0.5,
    borderColor: "#fff",
    borderRadius: 15,
    padding: 10,
    textAlign: "center" as const,
    fontSize: 16,
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center" as const,
      alignItems: "center" as const,
      backgroundColor: theme.background,
    },
    subContainer: {
      width: "100%",
      alignItems: "center" as const,
      marginTop: -20,
    },
    generalInput: {
      ...generalInput,
      marginVertical: 10,
    },
    userInput: {
      ...generalInput,
    },
    passwordInput: {
      ...generalInput,
      marginTop: 10,
      marginBottom: 20,
    },
    gImage: {
      width: 180,
      height: 180,
    },
    gbutton: {
      width: "70%",
      backgroundColor: theme.button.background,
      padding: 5,
      borderRadius: 10,
      alignItems: "center" as const,
    },
    textgbutton: {
      color: theme.button.text,
      fontSize: theme.button.fontweight,
      fontFamily: theme.button.fontFamily,
    },
  });
};
