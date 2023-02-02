import React, { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import Header from '../../components/Header'
import Task from '../../components/Task'
import TaskInput from '../../components/TaskInput'

import { styles } from "./styles";

interface Task {
  id: number;
  done: boolean;
  description: string;
}

const zeroTaskImage = require("../../assets/Clipboard.png");

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: string) {
    const newTask: Task = {
      id: Date.now(),
      done: false,
      description: task,
    };

    const undoneTasks = tasks.filter((t) => t.done === false);
    undoneTasks.push(newTask);

    const doneTasks = tasks.filter((t) => t.done === true);

    setTasks(undoneTasks.concat(doneTasks));
  }

  function handleTaskDone(taskId: number) {
    const filteredTasks = tasks.filter((t) => t.id !== taskId);
    const [theTask] = tasks.filter((t) => t.id === taskId);

    filteredTasks.push({
      description: theTask.description,
      done: !theTask.done,
      id: theTask.id,
    });

    setTasks(
      filteredTasks
        .filter((t) => t.done === false)
        .concat(filteredTasks.filter((t) => t.done === true))
    );
  }

  function handleDeleteTask(taskId: number) {
    const filteredTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(filteredTasks);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TaskInput addTaskFunction={handleAddTask} />
        <View style={styles.counters_wrapper}>
          <View style={styles.total_counter_wrapper}>
            <Text style={styles.total_counter_text}>Criadas</Text>
            <Text style={styles.counter_text}>{tasks.length}</Text>
          </View>
          <View style={styles.total_done_wrapper}>
            <Text style={styles.total_done_text}>Concluídas</Text>
            <Text style={styles.counter_text}>
              {tasks.filter((t) => t.done === true).length}
            </Text>
          </View>
        </View>
        {tasks.length > 0 ? (
          <ScrollView>
            {tasks.map((t) => (
              <Task
                description={t.description}
                done={t.done}
                key={t.id}
                taskId={t.id}
                doneFunction={handleTaskDone}
                deleteFunction={handleDeleteTask}
              />
            ))}
          </ScrollView>
        ) : (
          <>
            <View style={styles.line} />
            <View style={styles.zero_task_wrapper}>
              <Image source={zeroTaskImage} />
              <Text style={styles.zero_task_text_bold}>
                Você ainda não tem tarefas cadastradas.
              </Text>
              <Text style={styles.zero_task_text}>
                Crie tarefas e organize seus itens a fazer.
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
}