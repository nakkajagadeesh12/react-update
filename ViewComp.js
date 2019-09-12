import { Store } from './store';
import { useContext, useState } from 'react';
import React from 'react';
import { SendAction } from './Actions';


const ViewComp = () => {
  const { state, dispatch } = useContext(Store);
  const [flag, setFlag] = useState(true);
  const [FirstName,setFirstName]=useState('');
  const { details: { firstname } } = state.FirstState;
  
  const {login:{username}}=state.FirstState.login;

  return <div>
    <h1> Your Store Updated with Value:{firstname}-{username}</h1>
    <h1>FirstName:<input type='text' value={FirstName}  onChange={(e)=>{
      setFirstName(FirstName=e.target.value);
    }}/></h1>
    <button onClick={() => SendAction(dispatch,FirstName)}>Send Details</button>
    
    <button onClick={() => {
      dispatch({ type: "SET_DETAILS", firstname: Math.floor(Math.random() * 100) })
    }}>Random Number</button>
  </div>;

}
export { ViewComp };