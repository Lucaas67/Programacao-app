// RemindersScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RemindersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Lembretes</Text>
      <Text>Aqui estarão seus lembretes.</Text>
      {/* Você pode adicionar a lógica de lembretes, como uma lista de lembretes, aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
