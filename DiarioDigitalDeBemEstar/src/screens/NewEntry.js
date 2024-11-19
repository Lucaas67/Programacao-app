import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NewEntryScreen({ navigation }) {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const saveEntry = async () => {
    const date = new Date().toLocaleDateString();
    const newEntry = { date, mood, note };
    const data = await AsyncStorage.getItem('@diary_entries');
    const entries = data ? JSON.parse(data) : [];
    await AsyncStorage.setItem('@diary_entries', JSON.stringify([newEntry, ...entries]));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Como você está se sentindo hoje?</Text>
      <TextInput style={styles.input} value={mood} onChangeText={setMood} placeholder="Ex: Feliz, Triste, Animado..." />
      <Text style={styles.label}>Descreva seu dia:</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={note}
        onChangeText={setNote}
        placeholder="Escreva aqui..."
        multiline
      />
      <Button title="Salvar" onPress={saveEntry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: 'bold', marginVertical: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 20 },
});
