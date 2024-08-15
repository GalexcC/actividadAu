import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

const DivisionScreen = ({ navigation }: any) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleDivision = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Ingrese números válidos');
      return;
    }

    if (n1 === 0 && n2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (n2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult(`Resultado: ${n1 / n2}`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Campo número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Campo número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Dividir" onPress={handleDivision} />
      {result ? <Text style={styles.result}>{result}</Text> : null}
      <Button 
        title="Volver a Inicio" 
        onPress={() => navigation.navigate('Welcome')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default DivisionScreen;
