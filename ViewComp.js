import { Store } from './store';
import { useContext } from 'react';
import React from 'react'


const ViewComp = () => {
  const { state, dispatch } = useContext(Store);

  return <div>
     <h1>Hello View</h1>
    <button onClick={() => dispatch({ type: 'SET_ITEM', value:"Hello" })}>Update</button>
    <button onClick={() => dispatch({ type: 'RESET_ITEM', value: '' })}>Reset</button>
  </div>;

}
export { ViewComp };