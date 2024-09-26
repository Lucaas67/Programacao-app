import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ContadorRestauranteApp = () => {
  const [count, setCount] = useState(0); //Armazenamento do número de pessoas

  // Função para incrementar o número de pessoas
  const increment = () => {
    setCount(count + 1);
  };

  // Função para diminiuir o número de pessoas
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador Restaurante</Text> 
      <Text style={styles.countText}>{count}</Text> 
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Entrou</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>Saiu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, 
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    position: 'absolute',
    top: 40, 
    textAlign: 'center',
  },
  countText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginHorizontal: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContadorRestauranteApp;
