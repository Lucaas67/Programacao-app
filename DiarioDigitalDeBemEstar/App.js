import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import NewEntry from './src/screens/NewEntry';
import HistoryScreen from './src/screens/HistoryScreen'; 
import EditEntryScreen from './src/screens/EditEntryScreen';

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
          options={{ title: 'Criar entrada' }}
        />
        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{ title: 'Diário' }}
        />
        <Stack.Screen
          name="EditEntryScreen"
          component={EditEntryScreen}
          options={{ title: 'Editar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}