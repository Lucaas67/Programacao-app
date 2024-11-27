import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen({ navigation }) {
  const [entries, setEntries] = useState([]);

  // Função para carregar os dados do AsyncStorage
  const fetchEntries = async () => {
    const data = await AsyncStorage.getItem('@diary_entries');
    setEntries(data ? JSON.parse(data) : []);
  };

  // Atualiza os dados quando a tela é focada
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchEntries();
    });
    return unsubscribe;
  }, [navigation]);

  // Função para deletar uma entrada
  const deleteEntry = (index) => {
    Alert.alert(
      "Deletar Entrada",
      "Você tem certeza que deseja deletar essa entrada?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: async () => {
            const updatedEntries = [...entries];
            updatedEntries.splice(index, 1); // Remove o item do array
            await AsyncStorage.setItem('@diary_entries', JSON.stringify(updatedEntries));
            setEntries(updatedEntries); // Atualiza a lista de entradas
          },
        },
      ]
    );
  };

  // Função para editar uma entrada
  const editEntry = (entry, index) => {
    navigation.navigate('EditEntryScreen', { entry, index }); // Passa a entrada selecionada e o índice para a tela de edição
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
          <Text style={styles.headerButton}>Meu Diário</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        <FlatList
          data={entries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.cardDate}>{item.date}</Text>
              <Text style={styles.cardMood}>Humor: {item.mood}</Text>
              <Text style={styles.cardNote}>{item.note}</Text>

              {/* Botões de Editar e Deletar */}
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => editEntry(item, index)}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteEntry(index)}
                >
                  <Text style={styles.buttonText}>Deletar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
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
    backgroundColor: '#f8f9fa',
  },
  card: {
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
  cardDate: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardMood: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 10,
  },
  cardNote: {
    fontSize: 14,
    color: '#343a40',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});