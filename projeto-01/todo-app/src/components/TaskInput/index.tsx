import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { theme } from "../../styles/theme";

import { styles } from "./styles";

interface TaskInputProps {
  addTaskFunction: (task: string) => void;
}

const TaskInput = ({ addTaskFunction }: TaskInputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [task, setTask] = useState("");

  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const handleAddTask = () => {
    if (!task) return;
    addTaskFunction(task);
    setTask("");
  };

  return (
    <View style={styles.component}>
      <View
        style={isFocus ? styles.container_active : styles.container_inactive}
      >
        <TextInput
          style={styles.text_input}
          placeholder="Nova tarefa"
          placeholderTextColor={theme.colors.gray300}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          value={task}
          onChangeText={setTask}
        />
      </View>
      <TouchableOpacity
        style={isFocus ? styles.button : styles.button_inactive}
        onPress={handleAddTask}
      >
        <Text style={styles.button_text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskInput;