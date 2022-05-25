import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Game() {
  const baseNumber = Math.floor(Math.random() * 100);
  const score = Math.floor(Math.random() * 100);

  const navigation = useNavigation();

  const handleButtonClick = (choice) => {
    const win =
      (choice === 'lower' && score < baseNumber) ||
      (choice === 'higher' && score > baseNumber);

    Alert.alert(`You've ${win ? 'won' : 'lost'}`, `You scored: ${score}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.baseNumber}>Starting: {baseNumber}</Text>
      <TouchableHighlight
        style={[styles.button, styles.buttonGreen]}
        onPress={() => handleButtonClick('higher')}
      >
        <Text style={styles.buttonText}>Higher</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.button, styles.buttonRed]}
        onPress={() => handleButtonClick('lower')}
      >
        <Text style={styles.buttonText}>Lower</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseNumber: {
    fontSize: 48,
    marginBottom: 30,
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    padding: 30,
    marginVertical: 15,
  },

  buttonGreen: {
    backgroundColor: 'green',
  },

  buttonRed: {
    backgroundColor: 'red',
  },

  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
