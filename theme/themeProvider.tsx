import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { themeLight } from "./themeLight";
import { themeDark } from "./themeDark";

type Theme = typeof themeLight;

const ThemeContext = createContext<Theme>(themeLight);
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? themeDark : themeLight;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
