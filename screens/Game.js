import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import AnimatedButton from '../components/AnimatedButton';
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
      <AnimatedButton
        onPress={() => handleButtonClick('higher')}
        action="higher"
      />

      <AnimatedButton
        onPress={() => handleButtonClick('lower')}
        action="lower"
      />
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
});
