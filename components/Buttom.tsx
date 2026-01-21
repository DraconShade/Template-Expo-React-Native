import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { useTheme } from "@theme/themeProvider";
import { createThemeStyles } from "@/utils/createThemeStyles";

interface ButtomProps extends TouchableOpacityProps {
  title: string;
}

export const Buttom: React.FC<ButtomProps> = ({ title, ...props }) => {
  const theme = useTheme();
  const styles = createThemeStyles(theme);

  return (
    <TouchableOpacity {...props}>
      <Text style={styles.textgbutton}>{title}</Text>
    </TouchableOpacity>
  );
};
