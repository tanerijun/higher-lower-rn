import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Game() {
  const baseNumber = Math.floor(Math.random() * 100);
  const score = Math.floor(Math.random() * 100);

  const navigation = useNavigation();

  const handleButtonClick = (choice) => {
    const win =
      (choice === 'lower' && score < baseNumber) ||
      (choice === 'higher' && score > baseNumber);

    Alert.alert(`You've ${win ? 'won' : 'lost'}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Starting: {baseNumber}</Text>
      <Text>{score}</Text>
      <Button onPress={() => handleButtonClick('higher')} title="Higher" />
      <Button onPress={() => handleButtonClick('lower')} title="Lower" />
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
});
