    import React, { useState } from 'react';
    import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
    import AsyncStorage from '@react-native-async-storage/async-storage';

    export default function EditEntryScreen({ route, navigation }) {
    const { entry, index } = route.params; 
    const [mood, setMood] = useState(entry.mood);
    const [note, setNote] = useState(entry.note);

    const saveEditedEntry = async () => {
        const data = await AsyncStorage.getItem('@diary_entries');
        const entries = data ? JSON.parse(data) : [];
        entries[index] = { ...entry, mood, note }; 
        await AsyncStorage.setItem('@diary_entries', JSON.stringify(entries));
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
        <Button title="Salvar Alterações" onPress={saveEditedEntry} />
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontWeight: 'bold', marginVertical: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 20 },
    });
