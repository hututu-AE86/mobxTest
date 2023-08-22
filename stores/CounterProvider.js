import React, { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import CounterStore from './CounterStore';

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const store = useLocalObservable(() => CounterStore);

  return (
    <CounterContext.Provider value={store}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterStore = () => {
  const store = useContext(CounterContext);
  if (!store) {
    throw new Error('useCounterStore must be used within a CounterProvider');
  }
  return store;
};
