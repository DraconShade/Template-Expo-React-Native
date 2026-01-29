import React, { useState } from "react";
import { Pressable, Text, PressableProps } from "react-native";
import { useTheme } from "@theme/themeProvider";
import { createThemeStyles } from "@/utils/createThemeStyles";

interface ButtonProps extends PressableProps {
  title: string;
}

export const Links: React.FC<ButtonProps> = ({ title, ...props }) => {
  const theme = useTheme();
  const styles = createThemeStyles(theme);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable style={{ marginTop: 10 }} {...props}>
      {({ pressed }) => <Text>{title}</Text>}
    </Pressable>
  );
};
