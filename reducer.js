import {global} from './globalState';

const sendDataReducer = (state = global.FirstState, action) => {
  switch (action.type) {
    case "SET_ITEM": {
      return {
        ...state,
        login: {
          ...state.login,
          username: action.value
        }
      }
    }
    case 'SET_DETAILS': {
      return {
        ...state,
        id: "123",
        details: { ...state.details, firstname: action.firstname }
      }
    }
    case 'DAMMUNTE_UPDATE_CHEY':
      return {
        ...state,
        TestLoop: {
          ...state.TestLoop,
          TestLoop1: {
            ...state.TestLoop1,
            Test: `${Math.floor(Math.random() * 100)}`,
          }
        },
        // ...state.TestLoop,
        // TestLoop1: {
        //   ...state.TestLoop1.TestLoop2, TestLoop2: {
        //     baba: "Hihihihihh"
        //   }
        // }
      }
    default:
      return state;
  }

}
export { sendDataReducer };