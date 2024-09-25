import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CronometroApp = () => {
  const [time, setTime] = useState(0); // Tempo em milissegundos
  const [isRunning, setIsRunning] = useState(false); // Estado de execução
  const intervalRef = useRef(null); // Referência para o intervalo

  // Função para iniciar o cronômetro
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10); // Incrementa 10 milissegundos
      }, 10);
    }
  };

  // Função para pausar o cronômetro
  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  // Função para reiniciar o cronômetro
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Formatação do tempo em minutos, segundos e milissegundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cronômetro App</Text> 
      <Text style={styles.timerText}>{formatTime(time)}</Text> 
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isRunning ? '#f77' : '#4CAF50' }]} 
          onPress={isRunning ? pauseTimer : startTimer}>
          <Text style={styles.buttonText}>{isRunning ? 'Pausar' : 'Iniciar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reiniciar</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    position: 'absolute',
    top: 40,
  },
  timerText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    elevation: 3,  // Sombra para efeito de botão elevado
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CronometroApp;
