import { global } from './globalState';

const componentReducer = (state = global.SecondState, action) => {
  switch (action.type) {
    // case "SET_COMPONENT_ITEM":
    //   return state;

    // case 'SET_COMPONENT_DETAILS':
    //   return state;
    default:
      return state;
  }

}
export { componentReducer };