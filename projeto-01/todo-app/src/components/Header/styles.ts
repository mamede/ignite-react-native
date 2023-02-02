import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 173,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray700,
  },
  text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray100,
  },
});