import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem]=useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Hey What would you like to focus on? </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 15 }}
            onSubmitEdditing={({ nativeEvent }) => {
              setTmpItem(nativeEvent.text);
            }}
          />
          <RoundedButton title="+" onPress={()=>{addSubject(tmpItem)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleContainer: {
    flex: 0.5,
    padding: 15,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  inputContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
