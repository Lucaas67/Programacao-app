import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('@tasks');
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    } catch (error) {
      console.error('Failed to load tasks.', error);
    }
  };

  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem('@tasks', JSON.stringify(newTasks));
    } catch (error) {
      console.error('Failed to save tasks.', error);
    }
  };

  const handleAddTask = () => {
    if (task.trim()) {
      const newTasks = [...tasks, { id: Date.now().toString(), text: task }];
      setTasks(newTasks);
      saveTasks(newTasks);
      setTask('');
    }
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        style={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 3,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 25, 
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 10,
  },
  taskContainer: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 12, 
  },
  taskText: {
    fontSize: 18,
  },
});
  


