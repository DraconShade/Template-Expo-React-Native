import { useTheme } from "@/theme/themeProvider";
import { createThemeStyles } from "@/utils/createThemeStyles";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const theme = useTheme();
  const styles = createThemeStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.gImage} source={require("@images/react-logo.png")} />
    </SafeAreaView>
  );
}
