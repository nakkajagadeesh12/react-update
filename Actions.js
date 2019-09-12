const SendAction = (dispatch,FirstName) => {
  dispatch({ type: 'SET_DETAILS', firstname: FirstName });
}
const getAction = (dispatch) => {
  dispatch({ type: "GET" })
}
export { SendAction, getAction };
