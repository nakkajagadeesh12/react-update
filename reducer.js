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
      console.log("enter");
      return {
        ...state,
        id: "123",
        details: { ...state.details, firstname: action.firstname }
      }
    }
    default:
      return state;
  }

}
export { sendDataReducer };