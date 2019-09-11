import { globalState } from './globalState';
const reducer = (state = globalState, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return {
        ...state,
        login: {
          ...state.login,
          username: action.value
        }
      }
    case 'SET_DETAILS':
    return {
       ...state,
       version:"89",
       details:{
         ...state.details,
         firstname:action.firstname
       }
        
    }

    default:
      return state;
  }

}
export { reducer };