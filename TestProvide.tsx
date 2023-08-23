import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import { CounterProvider, useCounterStore } from './stores/CounterProvider';

import { Provider, observer } from 'mobx-react';
import counterStoreForInject from './stores/CounterStoreForInject';
import CounterComponent from './components/CounterComponent';

const TestProvide: React.FC = () => {

  return (
      <CounterComponent store = {counterStoreForInject} />
  );

};

export default TestProvide;
