import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface TaskProps {
  description: string;
  done: boolean;
  taskId: number;
  doneFunction: (taskId: number) => void;
  deleteFunction: (taskId: number) => void;
}

const trashIcon = require("../../assets/trash.png");

const Task = ({
  description,
  taskId,
  done,
  doneFunction,
  deleteFunction,
}: TaskProps) => {
  function handleTaskDone(taskId: number) {
    doneFunction(taskId);
  }

  function handleDeleteTask(taskId: number) {
    deleteFunction(taskId);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cehck_box_wrapper}>
        <TouchableOpacity onPress={() => handleTaskDone(taskId)}>
          {done ? (
            <Text style={styles.check_box_text_done}>☒</Text>
          ) : (
            <Text style={styles.check_box_text}>☐</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.task_wrapper}>
        <Text style={styles.task_text}>{description}</Text>
      </View>
      <View style={styles.delete_wrapper}>
        <TouchableOpacity onPress={() => handleDeleteTask(taskId)}>
          <Image
            source={trashIcon}
            style={{
              width: 17,
              height: 17,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
