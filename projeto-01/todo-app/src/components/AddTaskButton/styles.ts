import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  button: {
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.blue_dark,
    borderRadius: 8,
  },
  button_text: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.gray100,
  },
});