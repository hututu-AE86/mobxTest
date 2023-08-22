import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import { CounterProvider, useCounterStore } from './stores/CounterProvider';

import { Provider, observer } from 'mobx-react';
import counterStore from './stores/CounterStore';
// import CounterComponent from './CounterComponent';

@observer
class CounterComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Count: {counterStore.count}</Text>
        <Button title="Increment" onPress={() => counterStore.increment()} />
        <Button title="Decrement" onPress={() => counterStore.decrement()} />
      </View>
    );
  }
}


// const CounterDisplay = () => {
//   const counterStore = useCounterStore();

//   return (
//     <View>
//       <Text>Counter: {counterStore.count}</Text>
//     </View>
//   );
// };

// const CounterControls = () => {
//   const counterStore = useCounterStore();

//   return (
//     <View>
//       <Button title="Increment" onPress={counterStore.increment} />
//       <Button title="Decrement" onPress={counterStore.decrement} />
//     </View>
//   );
// };

const TestProvide = () => {

  // 这里使用会报错 useCounterStore must be used within a CounterProvider
  // const counterStore = useCounterStore(); 

  // return (
  //   <CounterProvider>
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       {/* <Text>Counter: {counterStore.count}</Text>
  //       <Button title="Increment" onPress={counterStore.increment} />
  //       <Button title="Decrement" onPress={counterStore.decrement} /> */}
  //       <CounterDisplay />
  //       <CounterControls />
  //     </View>
  //   </CounterProvider>
  // );

  return (
    <Provider counterStore = {counterStore}>
      <CounterComponent />
    </Provider>
  );

};

export default TestProvide;
