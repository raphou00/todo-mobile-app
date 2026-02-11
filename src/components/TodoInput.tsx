import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Text,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type TodoInputProps = {
  onAddTodo: (task: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim()) {
      onAddTodo(task.trim());
      setTask("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#9E9E9E"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddTodo}
        returnKeyType="done"
      />
      <Pressable onPress={handleAddTodo} style={styles.addButton}>
        <Feather name="plus-circle" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  addButton: {
    backgroundColor: "#2196F3",
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

export default TodoInput;
