// components/CounterControls.tsx
import React from 'react';
import { observer } from 'mobx-react';
import { View,Text, Button } from 'react-native';
import CounterStore from '../stores/CounterStore';

interface CounterControlsProps {
  counterStore: typeof CounterStore; // MobX Store
}

const CounterControls: React.FC<CounterControlsProps> = ({ counterStore }) => {
  const handleIncrement = () => {
    counterStore?.increment();
  };

  const handleDecrement = () => {
    counterStore?.decrement();
  };

  return (
    <View>
      <Button title="Increment" onPress={handleIncrement} />
      <Text>    </Text>
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

export default observer(CounterControls);
