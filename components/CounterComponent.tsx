import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { observer ,inject } from 'mobx-react';
import counterStoreForInject from '../stores/CounterStoreForInject';

interface CounterProps {
  store: typeof counterStoreForInject; // 引入并指定store类型
}

// class CounterComponent extends Component {
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
    console.log('Component re-rendered! 123');

    const { count, incrementA, decrementA} = this.props.store;
    
    return (
      <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Increment" onPress={this.handleIncrement} />
        <Button title="Decrement" onPress={this.handleDecrement} />
        <Text>当前 123 计数：{count}</Text>
        <Text>当前 123 计数：{this.props.store?.count}</Text>
        <Text>当前 1233 计数：{this.props.store.getCount}</Text>
        <Button title="IncrementA" onPress={incrementA} />
        <Button title="DecrementA" onPress={decrementA} />
        <Text>当前 action.bound 计数：{this.props.store?.getCount}</Text>
      </View>
    );

    // return (
    //   <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <Button title="Increment" onPress={() => {counterStoreForInject.increment()}} />
    //       <Button title="Decrement" onPress={() => {counterStoreForInject.decrement()}} />
    //       <Text>当前232计数：{counterStoreForInject.count}</Text>
    //      </View>
    //   );
  }

}

export default CounterComponent;