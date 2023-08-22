import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';
import CounterStore from './stores/CounterStore';

const TestProvide2: React.FC = () => {
  return (
    <View style={styles.container}>
      <CounterDisplay counterStore={CounterStore}/>
      <CounterControls  counterStore={CounterStore}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:5,
  },
});

export default TestProvide2;
