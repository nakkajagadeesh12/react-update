import { sendDataReducer } from './reducer';
import { componentReducer } from './componentReducer';

const rootReducer = (state, action) => {
  return {
    FirstState: sendDataReducer(state.FirstState, action),
    SecondState: componentReducer(state.SecondState, action),
  }
}

export { rootReducer };