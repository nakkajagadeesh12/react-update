import { sendDataReducer } from './reducer';
import { componentReducer } from './componentReducer';
import { combineReducers } from 'redux';

// Combinereducers
const rootReducer = combineReducers({
  FirstState: sendDataReducer,
  SecondState: componentReducer
});


//without combinereducers
// const rootReducer = (state, action) => {
//   return {
//     FirstState: sendDataReducer(state.FirstState, action),
//     SecondState: componentReducer(state.SecondState, action),
//   }
// }

export { rootReducer };