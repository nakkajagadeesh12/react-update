import { Store } from './store';
import { useContext, useState } from 'react';
import React from 'react';
import { SendAction } from './Actions';


const ViewComp = () => {
  const { state, dispatch } = useContext(Store);
  const [flag, setFlag] = useState(true);
  const [FirstName,setFirstName]=useState('');
  const { details: { firstname } } = state.FirstState;
  
  

  return <div>
    <h1> Your Store Updated with Value:{firstname}</h1>
    <h1>FirstName:<input type='text' value={FirstName}  onChange={(e)=>{
      setFirstName(FirstName=e.target.value);
    }}/></h1>
    <button onClick={() => SendAction(dispatch,FirstName)}>Send Details</button>
    
    <button onClick={() => {
      dispatch({ type: "DAMMUNTE_UPDATE_CHEY", firstname: Math.floor(Math.random() * 100) })
    }}>Random Number</button>
  </div>;

}
export { ViewComp };