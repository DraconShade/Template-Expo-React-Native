import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "@theme/themeProvider";

interface InputProps extends TextInputProps {}

export const Input: React.FC<InputProps> = (props) => {
  const theme = useTheme();

  return <TextInput {...props} />;
};

export default Input;
