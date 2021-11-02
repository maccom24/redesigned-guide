import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  
  return (
    <View style={Style.container}>
      <View style={Style.timeContainer}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View>
        <Text style={Style.title}>Focusing on:</Text>
        <Text style={Style.task}>{focusSubject}</Text>
      </View>
        <View style={Style.btnWrapper}>  
          {isStarted ? (
          <RoundedButton
            title="Stop"
            onPress={() => Alert.alert('Simple Button pressed')}
          />):(
          <RoundedButton
            title="Start"
            onPress={() => setIsStarted(true)}
          />)}
        </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,  
    padding: 50,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  task: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  timeContainer: {
    borderWidth: 1,
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    flex:0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems:'center',
  }
});
