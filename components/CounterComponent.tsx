import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer ,inject } from 'mobx-react';
import counterStoreForInject from '../stores/CounterStoreForInject';

interface CounterProps {
  store: typeof counterStoreForInject; // 引入并指定store类型
}

@inject('store')
@observer
class CounterComponent extends Component<CounterProps> {
  handleIncrement = () => {
    this.props.store?.increment(); // 调用store中的方法
  };

  handleDecrement = () => {
    this.props.store?.decrement(); // 调用store中的方法
  };

  render() {
    console.log('Component re-rendered! 12121-13-17');

    const { count } = this.props.store!;
    
    return (
      <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Increment" onPress={this.handleIncrement} />
        <Button title="Decrement" onPress={this.handleDecrement} />
        <Text>当前计数：{count}</Text>
        </View>
    );
  }

}

export default CounterComponent;