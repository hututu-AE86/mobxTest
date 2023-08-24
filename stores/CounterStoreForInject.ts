import { observable, action } from 'mobx';

class CounterStoreForInject {
  @observable count:number = 0;

  @action increment() {
    this.count += 1;
  }

  @action decrement() {
    this.count -= 1;
  }
}

const counterStoreForInject = new CounterStoreForInject();
export default counterStoreForInject;
