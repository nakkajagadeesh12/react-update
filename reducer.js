const sendDataReducer = (state, action) => {
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
        ...state.TestLoop,
        TestLoop1: {
          ...state.TestLoop1.TestLoop2,
          TestLoop2: {
            ...state.TestLoop1.TestLoop2.TestLoop3, TestLoop3: {
              ...state.TestLoop1.TestLoop2.TestLoop3.TestLoop4, TestLoop4: {
                DammunteUpdateChey: "Chesa ra chdu"
              }
            }
          }
        }
      }
    default:
      return state;
  }

}
export { sendDataReducer };