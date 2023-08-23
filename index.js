/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'mobx-react'; // 注意这里的导入
// import CounterStore from './stores/CounterStore';
// import TestProvide2 from './TestProvide2'; // 假设你的根组件为 TestProvide2.tsx
import counterStoreForInject from './stores/CounterStoreForInject';
import TestProvide from './TestProvide'; // 假设你的根组件为 TestProvide.tsx

const Root = () => (
    <Provider store={counterStoreForInject}>
      <TestProvide />
    </Provider>
  );

//   const Root2 = () => (
//     <Provider counterStore={CounterStore}>
//       <TestProvide2 />
//     </Provider>
//   );

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Root2);
AppRegistry.registerComponent(appName, () => Root);
