import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { Provider, observer } from 'mobx-react';
import counterStoreForInject from './stores/CounterStoreForInject';
import CounterComponent from './components/CounterComponent';

const TestProvide: React.FC = () => {

  return (
    <Provider store={counterStoreForInject}>
      <CounterComponent store = {counterStoreForInject} />
    </Provider>
      
      // <CounterComponent /> 
  );

};

export default TestProvide;
