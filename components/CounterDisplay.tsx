// components/CounterDisplay.tsx
import React from 'react';
import { observer } from 'mobx-react';
import { View, Text, Button } from 'react-native';
import CounterStore from '../stores/CounterStore';


interface CounterDisplayProps {
  counterStore: CounterStore; // MobX Store
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ counterStore }) => {
  return (
    <View>
      <Text>Counter: {counterStore?.count}</Text>
    </View>
  );
};

export default observer(CounterDisplay);
