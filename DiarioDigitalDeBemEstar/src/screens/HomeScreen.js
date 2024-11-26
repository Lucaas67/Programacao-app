import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
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

  const deleteEntry = async (index) => {
    Alert.alert(
      'Deletar Entrada',
      'Você tem certeza que deseja deletar esta entrada?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          onPress: async () => {
            const updatedEntries = entries.filter((_, i) => i !== index);
            await AsyncStorage.setItem('@diary_entries', JSON.stringify(updatedEntries));
            setEntries(updatedEntries);
          },
        },
      ]
    );
  };

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
        <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')}>
          <Text style={styles.headerButton}>Histórico</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
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
    backgroundColor: '#f8f9fa',
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  centeredText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -20 }],
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  entriesContainer: {
    padding: 20,
  },
  entryContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  entryText: {
    fontSize: 14,
    color: '#343a40',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  noEntriesText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
  },
});
