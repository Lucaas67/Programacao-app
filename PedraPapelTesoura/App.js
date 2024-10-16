import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';

const pedra = require('./assets/pedra.png');
const papel = require('./assets/papel.png');
const tesoura = require('./assets/tesoura.png');

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');
  const [jogarHabilitado, setJogarHabilitado] = useState(false);

  const opcoes = ['Pedra', 'Papel', 'Tesoura'];

  const selecionarOpcao = (escolha) => {
    setEscolhaUsuario(escolha);
    setJogarHabilitado(true);
  };

  const jogar = () => {
    const escolhaApp = opcoes[Math.floor(Math.random() * 3)];
    setEscolhaApp(escolhaApp);
    determinarVencedor(escolhaUsuario, escolhaApp);
  };

  const determinarVencedor = (escolhaUsuario, escolhaApp) => {
    if (escolhaUsuario === escolhaApp) {
      setResultado('Empate!');
    } else if (
      (escolhaUsuario === 'Pedra' && escolhaApp === 'Tesoura') ||
      (escolhaUsuario === 'Tesoura' && escolhaApp === 'Papel') ||
      (escolhaUsuario === 'Papel' && escolhaApp === 'Pedra')
    ) {
      setResultado('Você ganhou!');
    } else {
      setResultado('Você perdeu!');
    }
  };

  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
    setJogarHabilitado(false); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedra, Papel e Tesoura</Text>
      
      <Text style={styles.mensagem}>Escolha uma das opções abaixo:</Text>

      <View style={styles.opcoes}>
        <TouchableOpacity style={styles.botaoOpcao} onPress={() => selecionarOpcao('Pedra')}>
          <Image source={pedra} style={styles.imagem} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOpcao} onPress={() => selecionarOpcao('Papel')}>
          <Image source={papel} style={styles.imagem} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOpcao} onPress={() => selecionarOpcao('Tesoura')}>
          <Image source={tesoura} style={styles.imagem} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {jogarHabilitado && (
        <TouchableOpacity style={styles.botaoJogar} onPress={jogar}>
          <Text style={styles.textoBotaoJogar}>Jogar</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.resultado}>
        {escolhaUsuario ? `Você escolheu: ${escolhaUsuario}` : ''}
      </Text>
      <Text style={styles.resultado}>
        {escolhaApp ? `App escolheu: ${escolhaApp}` : ''}
      </Text>
      <Text style={styles.resultadoFinal}>{resultado}</Text>

      <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarJogo}>
        <Text style={styles.textoBotaoReiniciar}>Jogar Novamente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
  },
  mensagem: {
    fontSize: 18,
    marginBottom: 15,
    color: '#004d40',
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '80%',
  },
  botaoOpcao: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
  },
  imagem: {
    width: 80,
    height: 80,
  },
  botaoJogar: {
    backgroundColor: '#00796b',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textoBotaoJogar: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 18,
    color: '#004d40',
    marginBottom: 10,
  },
  resultadoFinal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00796b',
    marginVertical: 20,
  },
  botaoReiniciar: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textoBotaoReiniciar: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
