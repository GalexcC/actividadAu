import React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenidooo</Text>
      <Image source={{ uri: 'https://example.com/mobile-app-image.png' }} style={styles.image} />
      <Button title="Acceder" onPress={() => navigation.dispatch( CommonActions.navigate({name:'Division'}))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
