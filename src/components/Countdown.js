import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 20, isPaused }) => {
  const interval = React.useRef(null);
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time;
      }
      const timeleft = time - 1000;

      return timeleft;
    });
  };

  useEffect(() => {
    if(isPaused){
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, []);

  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={Style.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    padding: 20,
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
