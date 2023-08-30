import { observable, action, makeObservable, computed } from 'mobx';

class CounterStoreForInject {
  @observable count:number = 0;

  constructor(){
    makeObservable(this);
    this.count=10;
  }

  @action.bound
  incrementA=()=> {
    this.count += 1;
  }

  @action.bound
  decrementA=()=> {
    this.count -= 1;
  }
  
  @action.bound
  increment(){
    this.count += 1;
  }
  @action.bound
  decrement() {
    this.count -= 1;
  }

  @computed
  get getCount(){
    return this.count;
  }
}

const counterStoreForInject = new CounterStoreForInject();
export default counterStoreForInject;
