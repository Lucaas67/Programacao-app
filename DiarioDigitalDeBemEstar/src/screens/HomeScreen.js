import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await AsyncStorage.getItem('@diary_entries');
      setEntries(data ? JSON.parse(data) : []);
    };
    fetchEntries();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NewEntry')}>
          <Text style={styles.headerButton}>Nova Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChartScreen')}>
          <Text style={styles.headerButton}>GrÃ¡fico Semanal</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  entry: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  date: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mood: {
    color: 'blue',
    marginBottom: 5,
  },
});