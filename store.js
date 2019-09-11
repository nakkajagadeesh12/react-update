import React, { createContext, useReducer } from 'react';
import { globalState } from './globalState';
import { reducer } from './reducer';

const Store = createContext();
const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  console.log(state,"state");
  return (<Store.Provider value={{ state, dispatch }}> {props.children}</Store.Provider >)
}
export { Store, StoreProvider };