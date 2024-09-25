import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import quotesData from './assets/quotes.json';  // Importando o arquivo JSON local

// Mapeamento das imagens
const images = {
  "einstein.png": require('./assets/einstein.png'),
  "stevejobs.png": require('./assets/stevejobs.png'),
  "gandhi.png": require('./assets/gandhi.png')
};

const QuotesApp = () => {
  const [currentQuote, setCurrentQuote] = useState(quotesData[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuotesApp</Text> 
      <View style={styles.contentContainer}>
        <Text style={styles.quoteText}>"{currentQuote.quote}"</Text>
        <Text style={styles.authorText}>- {currentQuote.author}</Text>
        <Image 
          source={images[currentQuote.image]}  // Usando o mapeamento para carregar a imagem correta
          style={styles.authorImage} 
        />
        <Button title="Nova Citação" onPress={getRandomQuote} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 50,  // Adiciona espaço no topo para o título
  },
  title: {
    fontSize: 32,  // Tamanho do título
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    position: 'absolute',  // Posiciona o título no topo
    top: 40,  // Distância do topo
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 100,  // Adiciona margem para evitar sobreposição com o título
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  authorText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  authorImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  }
});

export default QuotesApp;
