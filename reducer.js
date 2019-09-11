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
    // return Object.assign({},state,[state.login.username]:[action.value])
    case 'RESET_ITEM':

    default:
      return state;
  }

}
export { reducer };