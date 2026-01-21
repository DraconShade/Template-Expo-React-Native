import { Stack } from "expo-router";
import { ThemeProvider } from "@theme/themeProvider";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}
