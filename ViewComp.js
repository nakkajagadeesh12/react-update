import { Store } from './store';
import { useContext } from 'react';
import React from 'react'


const ViewComp = () => {
  const { state, dispatch } = useContext(Store);

  return <div>
    <h1>Hello View</h1>
    <h2>{state.login.username}</h2>
    <button onClick={() => dispatch({ type: 'SET_ITEM', value: "Hello" })}>Update</button>
    <button onClick={() => dispatch({ type: 'RESET_ITEM', value: '' })}>Reset</button>
    <button onClick={() => {
      dispatch({ type: "SET_DETAILS", firstname: "Bhaskar" })
    }}>Send Details</button>
  </div>;

}
export { ViewComp };