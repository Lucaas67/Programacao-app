import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(null); // Sem imagem padrão
  const [isObesidade, setIsObesidade] = useState(false); // Estado para verificar se é obesidade

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    
    if (!pesoNum || !alturaNum) {
      setResultado('Por favor, insira valores válidos');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';
    let imagemClassificacao = null;
    let obesidade = false;

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      imagemClassificacao = require('./assets/baixo-peso.jpg'); 
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
      imagemClassificacao = require('./assets/peso-normal.jpg'); 
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
      imagemClassificacao = require('./assets/obesidade2.jpg'); 
    } else if (imc >= 30 && imc < 39.9) {
      classificacao = 'Obesidade';
      imagemClassificacao = require('./assets/obesidade2.jpg'); 
      obesidade = true; // Definir como "Obesidade"
    } else {
      classificacao = 'Obesidade grave';
      imagemClassificacao = require('./assets/obesidade-extrema.jpg'); 
      obesidade = true; // Definir como "Obesidade"
    }

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
    setImagem(imagemClassificacao); // Atualizar a imagem com base na classificação
    setIsObesidade(obesidade); // Define se é obesidade para controlar o tamanho da imagem
  };

  const resetar = () => {
    setPeso('');
    setAltura('');
    setResultado('');
    setImagem(null); // Remover imagem após resetar
    setIsObesidade(false); // Voltar ao estado padrão (não obesidade)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de IMC</Text>

      {/* Exibe a imagem baseada no resultado, somente após o cálculo */}
      {imagem && (
        <Image source={imagem} style={isObesidade ? styles.imageObesidade : styles.image} />
      )}
      
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      
      <TouchableOpacity style={styles.buttonCalcular} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {/* Exibe o resultado do cálculo */}
      <Text style={styles.resultado}>{resultado}</Text>

      {/* Botão para resetar o app */}
      <TouchableOpacity style={styles.buttonResetar} onPress={resetar}>
        <Text style={styles.buttonText}>Resetar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',  // Fundo cinza claro para suavizar o visual
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: 150,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  imageObesidade: { // Tamanho maior para obesidade
    width: 250,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  input: {
    height: 50,
    borderColor: '#00aaff',
    borderWidth: 2,
    width: '80%',
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007acc',
    textAlign: 'center',
  },
  buttonCalcular: {
    backgroundColor: '#00aaff', // Cor azul para o botão de calcular
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonResetar: {
    backgroundColor: '#ff6666', // Cor vermelha para o botão de resetar
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
