import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("gardening");
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>
          <Timer focusSubject={focusSubject} />
        </Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ACAEA',
  },
});
