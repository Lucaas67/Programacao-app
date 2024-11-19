import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ChartScreen() {
  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'], // Rótulos do gráfico
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], // Certifique-se de usar números válidos
      },
    ],
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>Gráfico Semanal</Text>
      <LineChart
        data={data}
        width={300} // Largura do gráfico
        height={220} // Altura do gráfico
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={{ borderRadius: 16 }}
      />
    </View>
  );
}
