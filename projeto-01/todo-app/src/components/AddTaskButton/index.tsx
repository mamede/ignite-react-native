import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface AddTaskButtonProps {
  onClick: () => void;
}

const AddTaskButton = ({ onClick }: AddTaskButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.button_text}>+</Text>
    </TouchableOpacity>
  );
};

export default AddTaskButton;