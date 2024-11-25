import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await AsyncStorage.getItem('@diary_entries');
      setEntries(data ? JSON.parse(data) : []);
    };
    fetchEntries();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.mood}>Humor: {item.mood}</Text>
            <Text>{item.note}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  entry: { marginVertical: 10, padding: 15, backgroundColor: '#f0f0f0', borderRadius: 10 },
  date: { fontWeight: 'bold', marginBottom: 5 },
  mood: { color: 'blue', marginBottom: 5 },
});