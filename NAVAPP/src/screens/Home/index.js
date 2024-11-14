import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title = "go to about" onPress={() => navigation.navigate("About", {name: 'Lucas', email: "lucas@gmail.com",})}></Button>
      <Button title = "go to Detail" onPress={() => navigation.navigate("Detail")}></Button>
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

export default Home;