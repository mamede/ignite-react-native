import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  component: {
    height: 54,
    flexDirection: "row",
  },

  container_inactive: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
    borderColor: theme.colors.gray700,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },

  container_active: {
    flex: 1,
    backgroundColor: theme.colors.gray500,
    borderColor: theme.colors.purple_dark,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },

  text_input: {
    color: theme.colors.gray100,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
  },

  button: {
    marginLeft: 8,
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.blue,
    borderRadius: 8,
  },

  button_inactive: {
    marginLeft: 8,
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