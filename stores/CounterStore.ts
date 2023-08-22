// import { makeAutoObservable } from 'mobx';

// class CounterStore {
//   count = 0;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   increment() {
//     this.count++;
//   }

//   decrement() {
//     this.count--;
//   }
// }
// const counterStore = new CounterStore();
// export default counterStore;

// 第二个案例
// import { observable, action } from 'mobx';

// class CounterStore {
//   @observable count = 0;

//   @action increment() {
//     this.count += 1;
//   }

//   @action decrement() {
//     this.count -= 1;
//   }
// }

// export default new CounterStore();

// stores/CounterStore.ts

// 第三个案例 创建的方式符合TS规范 比JS语法严格
import { makeObservable, observable, action } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
    });
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

export default new CounterStore();
