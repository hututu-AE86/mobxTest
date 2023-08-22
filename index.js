/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'mobx-react'; // 注意这里的导入
import CounterStore from './stores/CounterStore';
import TestProvide from './TestProvide2'; // 假设你的根组件为 TestProvide.tsx

const Root = () => (
    <Provider counterStore={CounterStore}>
      <TestProvide />
    </Provider>
  );

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Root);
