import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native';

const imagemInicial = require('./assets/alcoolougasolina.jpg');
const imagemAlcool = require('./assets/alcool.jpg');
const imagemGasolina = require('./assets/gasolina.jpg');

const App = () => {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(imagemInicial); 

  const calcularMelhorCombustivel = () => {
    const valorAlcool = parseFloat(precoAlcool);
    const valorGasolina = parseFloat(precoGasolina);

    if (valorAlcool && valorGasolina) {
      const razao = valorAlcool / valorGasolina;

      if (razao < 0.7) {
        setResultado('Abasteça com Álcool');
        setImagem(imagemAlcool); // Imagem de álcool
      } else {
        setResultado('Abasteça com Gasolina');
        setImagem(imagemGasolina); // Imagem de gasolina
      }
    } else {
      setResultado('Por favor, insira valores válidos.');
      setImagem(imagemInicial); 
    }
  };

  const recalcular = () => {
    setPrecoAlcool('');
    setPrecoGasolina('');
    setResultado('');
    setImagem(imagemInicial); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Comparador de Combustível</Text>

      <TextInput
        style={styles.input}
        placeholder="Preço do litro do Álcool"
        keyboardType="numeric"
        value={precoAlcool}
        onChangeText={setPrecoAlcool}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço do litro da Gasolina"
        keyboardType="numeric"
        value={precoGasolina}
        onChangeText={setPrecoGasolina}
      />

      <TouchableOpacity style={styles.button} onPress={calcularMelhorCombustivel}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}

      <Image
        source={imagem} // Usa a imagem atual do estado
        style={imagem === imagemInicial ? styles.imagemInicial : styles.imagemCombustivel}
      />

      {resultado ? (
        <TouchableOpacity style={styles.button} onPress={recalcular}>
          <Text style={styles.buttonText}>Recalcular</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff', 
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
    color: '#2c3e50', // Cor do texto do título
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#3498db', // Cor da borda
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 5, // Bordas arredondadas
  },
  resultado: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#27ae60', // Cor do resultado
  },
  imagemInicial: {
    marginTop: 20,
    width: 300,
    height: 150,
  },
  imagemCombustivel: {
    marginTop: 20,
    width: 130,
    height: 200,
  },
  button: {
    backgroundColor: '#3498db', // Cor do botão
    padding: 15,
    borderRadius: 5, // Bordas arredondadas
    marginVertical: 10,
    width: '100%',
    alignItems: 'center', // Centraliza o texto do botão
  },
  buttonText: {
    color: '#ffffff', // Cor do texto do botão
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
