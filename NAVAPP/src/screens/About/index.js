import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";
import { useNavigation } from "@react-navigation/native";


const About = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      <Button title="Go to Detail" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default About;

