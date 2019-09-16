import { Store } from './store';
import { useContext, useState } from 'react';
import React from 'react';
import { SendAction } from './Actions';
import Display from './display';
import { withRouter } from 'react-router';

const ViewComp = () => {
  const { state, dispatch } = useContext(Store);
  const [flag, setFlag] = useState(true);
  const [FirstName, setFirstName] = useState('');
  return <div>
    <h1>FirstName:<input type='text' value={FirstName} onChange={(e) => {
      setFirstName(FirstName = e.target.value);
    }} /></h1>
    <lable>CheckBox</lable>
    <input type='checkbox'/>
    <button onClick={() => SendAction(dispatch, FirstName)}>Send Details</button>

    <button onClick={() => {
      dispatch({ type: "DAMMUNTE_UPDATE_CHEY", firstname: Math.floor(Math.random() * 100), name: ["rebba", "veera"] })
    }}>Random Number</button>
    <Display />
  </div>;

}
export default withRouter(ViewComp);