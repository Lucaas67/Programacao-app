import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const App = () => {
  // Estados para as preferências
  const [tema, setTema] = useState('Claro');
  const [tamanhoFonte, setTamanhoFonte] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);

  // Função para resetar as preferências
  const resetarPreferencias = () => {
    setTema('Claro');
    setTamanhoFonte(16);
    setModoNoturno(false);
  };

  // Estilos dinâmicos baseados no tema e no modo noturno
  const temaEstilos = (tema === 'Escuro' || (tema === 'Automático' && modoNoturno))
    ? styles.darkTheme
    : styles.lightTheme;

  return (
    <View style={[styles.container, temaEstilos]}>
      <Text style={[styles.title, { fontSize: tamanhoFonte }, temaEstilos]}>
        Configurações de Preferências
      </Text>

      {/* Picker para o tema */}
      <Text style={[styles.label, { fontSize: tamanhoFonte }, temaEstilos]}>
        Tema do Aplicativo
      </Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={tema}
          style={styles.picker}
          onValueChange={(itemValue) => setTema(itemValue)}
        >
          <Picker.Item label="Claro" value="Claro" />
          <Picker.Item label="Escuro" value="Escuro" />
          <Picker.Item label="Automático" value="Automático" />
        </Picker>
      </View>

      {/* Slider para o tamanho da fonte */}
      <Text style={[styles.label, { fontSize: tamanhoFonte }, temaEstilos]}>
        Tamanho da Fonte: {tamanhoFonte}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={tamanhoFonte}
        onValueChange={(value) => setTamanhoFonte(value)}
        step={1}
        minimumTrackTintColor="#6200ee"
        thumbTintColor="#6200ee"
      />

      {/* Switch para o Modo Noturno */}
      <View style={styles.switchContainer}>
        <Text style={[styles.label, { fontSize: tamanhoFonte }, temaEstilos]}>
          Modo Noturno: {modoNoturno ? 'Ativado' : 'Desativado'}
        </Text>
        <Switch
          value={modoNoturno}
          onValueChange={(value) => setModoNoturno(value)}
          thumbColor={modoNoturno ? "#6200ee" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#6200ee" }}
        />
      </View>

      {/* Botão de Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={resetarPreferencias}>
        <Text style={styles.resetButtonText}>Resetar Preferências</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#6200ee',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#6200ee',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#6200ee',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#6200ee',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  resetButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lightTheme: {
    backgroundColor: '#f5f5f5',
    color: '#000',
  },
  darkTheme: {
    backgroundColor: '#333',
    color: '#fff',
  },
});

export default App;
