import "react-native-get-random-values";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import { Todo } from "../types";

const STORAGE_KEY = "todo";

const HomeScreen: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveTodos();
    }
  }, [todos, isLoading]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos !== null) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error("Failed to load todos from AsyncStorage", error);
      Alert.alert("Error", "Failed to load your tasks.");
    } finally {
      setIsLoading(false);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error("Failed to save todos to AsyncStorage", error);
      Alert.alert("Error", "Failed to save your tasks.");
    }
  };

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
          },
          style: "destructive",
        },
      ],
      { cancelable: false },
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggleComplete={toggleComplete}
            onDelete={deleteTodo}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>
              No tasks yet! Add one above.
            </Text>
          </View>
        }
      />
      <TodoInput onAddTodo={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50, // Adjust for status bar
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  loadingText: {
    fontSize: 18,
    color: "#616161",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  emptyListContainer: {
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  emptyListText: {
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default HomeScreen;
