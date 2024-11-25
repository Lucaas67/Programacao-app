import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import NewEntry from './src/screens/NewEntry';
import ChartScreen from './src/screens/ChartScreen';
import HistoryScreen from './src/screens/HistoryScreen'; // Importar a nova tela

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Diário Digital de Bem-Estar' }}
        />
        <Stack.Screen
          name="NewEntry"
          component={NewEntry}
          options={{ title: 'Nova Entrada' }}
        />
        <Stack.Screen
          name="ChartScreen"
          component={ChartScreen}
          options={{ title: 'Gráfico Semanal' }}
        />
        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{ title: 'Histórico' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}