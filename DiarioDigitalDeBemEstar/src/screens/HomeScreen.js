import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Calendar } from 'react-native-calendars';
import moment from 'moment-timezone';

export default function HistoryScreen({ navigation }) {
  const [entries, setEntries] = useState([]);
  const [markedDates, setMarkedDates] = useState({});
  const [today, setToday] = useState('');

  // Função para carregar os dados do AsyncStorage
  const fetchEntries = async () => {
    const data = await AsyncStorage.getItem('@diary_entries');
    const entries = data ? JSON.parse(data) : [];
    setEntries(entries);

    // Processa as datas para o calendário
    const marked = {};
    entries.forEach((entry) => {
      const formattedDate = formatToISO(entry.date);
      marked[formattedDate] = { marked: true, dotColor: '#007bff' }; // Marca o dia
    });
    setMarkedDates(marked);
  };

  // Formata a data para o formato ISO (YYYY-MM-DD)
  const formatToISO = (date) => {
    const [day, month, year] = date.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  // Atualiza a data de 'hoje' com base no fuso horário de Brasília
  useEffect(() => {
    const currentDate = moment.tz("America/Sao_Paulo").format('YYYY-MM-DD');
    setToday(currentDate); // Atualiza a data com o horário ajustado para Brasília
    fetchEntries(); // Carrega os dados do AsyncStorage
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.headerButton}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NewEntry')}>
          <Text style={styles.headerButton}>Nova Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')}>
          <Text style={styles.headerButton}>Meu Diário</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RemindersScreen')}>
          <Text style={styles.headerButton}>Lembretes</Text>
        </TouchableOpacity>
      </View>

      {/* Calendário */}
      <View style={styles.container}>
        <Calendar
          markedDates={markedDates}
          current={today}  // Setando a data de hoje ajustada para Brasília
          theme={{
            todayTextColor: '#007bff',
            selectedDayBackgroundColor: '#007bff',
            arrowColor: '#007bff',
          }}
        />
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
});
