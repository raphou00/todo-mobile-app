import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={() => onToggleComplete(todo.id)}
        style={styles.checkbox}
      >
        {todo.completed ? (
          <Feather name="check-square" size={24} color="#4CAF50" />
        ) : (
          <Feather name="square" size={24} color="#757575" />
        )}
      </Pressable>
      <Text
        style={[styles.taskText, todo.completed && styles.completedTaskText]}
      >
        {todo.task}
      </Text>
      <Pressable onPress={() => onDelete(todo.id)} style={styles.deleteButton}>
        <Feather name="trash-2" size={20} color="#F44336" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  checkbox: {
    paddingRight: 15,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#9E9E9E",
  },
  deleteButton: {
    paddingLeft: 15,
  },
});

export default TodoItem;
