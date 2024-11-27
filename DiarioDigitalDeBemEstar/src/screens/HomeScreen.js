import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar } from 'react-native-calendars';
import moment from 'moment-timezone';

export default function HistoryScreen({ navigation }) {
  const [markedDates, setMarkedDates] = useState({});
  const [today, setToday] = useState('');

  // Carregar dias importantes do AsyncStorage
  const fetchMarkedDates = async () => {
    const data = await AsyncStorage.getItem('@marked_dates');
    const storedDates = data ? JSON.parse(data) : {};
    setMarkedDates(storedDates);
  };

  // Salvar dias importantes no AsyncStorage
  const saveMarkedDates = async (dates) => {
    await AsyncStorage.setItem('@marked_dates', JSON.stringify(dates));
  };

  // Marcar ou desmarcar dias importantes
  const toggleDay = (day) => {
    const updatedDates = { ...markedDates };
    if (updatedDates[day]) {
      delete updatedDates[day]; // Remove o dia se já estiver marcado
      Alert.alert('Dia removido dos importantes', `Dia ${day} foi desmarcado.`);
    } else {
      updatedDates[day] = { marked: true, dotColor: '#ff6347' }; // Marca o dia
      Alert.alert('Dia marcado como importante', `Dia ${day} foi marcado.`);
    }
    setMarkedDates(updatedDates);
    saveMarkedDates(updatedDates);
  };

  // Atualiza a data de hoje com o fuso horário de Brasília
  useEffect(() => {
    const currentDate = moment.tz('America/Sao_Paulo').format('YYYY-MM-DD');
    setToday(currentDate);
    fetchMarkedDates(); // Carrega os dias importantes
  }, [navigation]);

  // Combinar marcações para o dia de hoje
  const combinedMarkedDates = {
    ...markedDates,
    [today]: {
      ...(markedDates[today] || {}),
      selected: true,
      selectedColor: '#32cd32', // Cor do círculo para hoje
    },
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.headerButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NewEntry')}>
          <Text style={styles.headerButton}>Nova Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')}>
          <Text style={styles.headerButton}>Meu Diário</Text>
        </TouchableOpacity>
      </View>

      {/* Calendário */}
      <View style={styles.container}>
        <Calendar
          markedDates={combinedMarkedDates}
          current={today}
          onDayPress={(day) => toggleDay(day.dateString)}
          theme={{
            todayTextColor: '#007bff',
            selectedDayBackgroundColor: '#007bff',
            arrowColor: '#007bff',
          }}
        />
        <Text style={styles.infoText}>
          Toque em um dia para marcar ou desmarcar como importante.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  infoText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
  },
});
