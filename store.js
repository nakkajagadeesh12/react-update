import React, { createContext, useReducer, useMemo } from 'react';
import { global } from './globalState';
import { rootReducer } from './rootReducer';
// import { sendDataReducer } from './reducer';

const Store = createContext();


const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(rootReducer, global);
  console.log(global,"global");
  const value = useMemo(() => {
    return { state, dispatch };
  }, [state]);
  console.log("State-->", state);
  return (<Store.Provider value={value}> {props.children}</Store.Provider >)
}
export { Store, StoreProvider };