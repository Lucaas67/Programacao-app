import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Contêiner dos botões com sombra linear */}
      <View style={styles.topButtonsShadowContainer}>
        <View style={styles.topButtonsContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/terra.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/mercurio.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/venus.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/marte.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/jupiter.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Imagem abaixo dos botões */}
      <Image
        source={require('./assets/planetas3.jpg')} 
        style={styles.image}
      />

      {/* Texto com interrogação */}
      <View style={styles.textWithQuestionContainer}>
        <Text style={styles.text}>Clique no botão para ler uma curiosidade:</Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity 
          onPress={() => alert('Vênus é o único planeta do sistema solar com rotação retrógrada.')} 
          style={styles.questionMarkContainer}
        >
          <Text style={styles.questionMark}>?</Text>
        </TouchableOpacity>
      </View>

      {/* Cards com curiosidades */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Vênus é o planeta mais quente do sistema solar.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Mercúrio é o planeta mais próximo do Sol.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            A Terra tem 71% da superfície coberta por água.
          </Text>
        </View>
      </View>

      <View style={styles.topButtonsShadowContainer}>
        <View style={styles.topButtonsContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/terra.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/sol.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/lua.png')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('./assets/marte.jpg')} 
              style={styles.roundButton}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Imagem abaixo dos botões */}
      <Image
        source={require('./assets/planetas3.jpg')} 
        style={styles.image}
      />

      {/* Texto com interrogação */}
      <View style={styles.textWithQuestionContainer}>
        <Text style={styles.text}>Clique no botão para ler uma curiosidade:</Text>
        <View style={{ flex: 1 }} />
        <TouchableOpacity 
          onPress={() => alert('Vênus é o único planeta do sistema solar com rotação retrógrada.')} 
          style={styles.questionMarkContainer}
        >
          <Text style={styles.questionMark}>?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    marginTop: 35,
  },
  topButtonsShadowContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  roundButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#000',
  },
  image: {
    width: '100%',
    height: 450,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 35,
  },
  textWithQuestionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionMarkContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  questionMark: {
    fontSize: 18,
    color: '#fff',
  },
  cardsContainer: {
    flexDirection: 'row', // Mantém os cards lado a lado
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 10, // Reduzido o padding para menos espaço
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 14, // Texto menor
    textAlign: 'center',
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bottomButton: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
