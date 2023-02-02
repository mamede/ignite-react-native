import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,

    borderColor: theme.colors.gray300,
    backgroundColor: theme.colors.gray400,
  },

  cehck_box_wrapper: {
    width: 24,
    marginLeft: 12,
    justifyContent: "center",
  },

  check_box_text: {
    fontFamily: theme.fonts.regular,
    fontSize: 26,
    color: theme.colors.blue,
  },

  check_box_text_done: {
    fontFamily: theme.fonts.regular,
    fontSize: 26,
    color: theme.colors.blue_dark,
  },

  task_wrapper: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },

  task_text: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.colors.gray100,
  },

  delete_wrapper: {
    width: 24,
    marginRight: 8,
    justifyContent: "center",
  },
});