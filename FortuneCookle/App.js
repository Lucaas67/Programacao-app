import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const closedCookie = require('./assets/closed-cookie.png');  // Imagem do biscoito fechado
const openCookie = require('./assets/open-cookie.png');      // Imagem do biscoito aberto

const fortunes = [
  "Hoje será um ótimo dia!",
  "O sucesso está a caminho.",
  "A sorte está do seu lado.",
  "Você terá uma surpresa agradável.",
  "Boas notícias chegarão em breve.",
  "Você está rodeado de pessoas que o admiram.",
  "A paciência será sua melhor aliada hoje.",
  "Coisas boas acontecem para quem espera.",
  "A sua determinação vai te levar longe.",
  "Prepare-se para um evento inesquecível.",
  "Sua gentileza será recompensada.",
  "Grandes oportunidades estão à sua frente.",
  "Seu futuro será brilhante.",
  "O amor está mais perto do que você imagina.",
  "Alguém pensa em você com carinho."
];

const App = () => {
  const [cookieOpened, setCookieOpened] = useState(false);
  const [fortune, setFortune] = useState('');
  const scaleAnim = useRef(new Animated.Value(1)).current;  

  const breakCookie = () => {
    // Animação de abrir o biscoito
    Animated.timing(scaleAnim, {
      toValue: 1.5,  
      duration: 500,  // Duração da animação 
      useNativeDriver: true,
    }).start(() => {
      // Após a animação, atualiza o estado do biscoito aberto e exibe a frase de sorte
      setCookieOpened(true);
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(randomFortune);
    });
  };

  const resetCookie = () => {
    setCookieOpened(false);
    setFortune('');
    scaleAnim.setValue(1);  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FortuneCookie</Text> 
      
      <Animated.Image 
        source={cookieOpened ? openCookie : closedCookie} 
        style={[styles.cookieImage, { transform: [{ scale: scaleAnim }] }]} 
      />
      {cookieOpened && <Text style={styles.fortuneText}>{fortune}</Text>}
      
      <View style={styles.buttonContainer}>
        {!cookieOpened ? (
          <TouchableOpacity style={styles.button} onPress={breakCookie}>
            <Text style={styles.buttonText}>Quebrar o Biscoito</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={resetCookie}>
            <Text style={styles.buttonText}>Novo Biscoito</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 60,  
  },
  title: {
    fontSize: 32,  
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,  
    color: '#333',
    position: 'absolute',
    top: 40,  
  },
  cookieImage: {
    width: 250,
    height: 250,
    borderRadius: 125,  
    borderWidth: 4,
    borderColor: '#FFD700',  
    marginBottom: 30,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fortuneText: {
    fontSize: 22,
    color: '#333',
    marginBottom: 30, 
    textAlign: 'center',
    fontStyle: 'italic',  //

  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    margin: 10,
    elevation: 5,  // Sombra para os botões
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
