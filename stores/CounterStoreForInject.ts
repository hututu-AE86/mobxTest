import { observable, action } from 'mobx';

class CounterStoreForInject {
  @observable count:number = 0;

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
}

const counterStoreForInject = new CounterStoreForInject();
export default counterStoreForInject;
