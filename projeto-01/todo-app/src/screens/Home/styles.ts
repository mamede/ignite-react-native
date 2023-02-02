import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../styles/theme";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },

  content: {
    flex: windowWidth,
    padding: 24,
    marginTop: -50,
  },

  task_input_wrapper: {
    height: 54,
    flexDirection: "row",
  },

  text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray100,
  },

  counters_wrapper: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  total_counter_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  total_done_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  total_counter_text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.blue,
    fontSize: 16,
  },

  total_done_text: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
    fontSize: 16,
  },

  counter_text: {
    marginLeft: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray100,
    fontSize: 14,
    backgroundColor: theme.colors.gray400,
    borderRadius: 8,
  },

  zero_task_wrapper: {
    height: 208,
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    marginTop: 20,
    borderBottomColor: theme.colors.gray300,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  zero_task_text: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray400,
    fontSize: 16,
  },

  zero_task_text_bold: {
    marginTop: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray400,
    fontSize: 16,
  },
});