let initialState = [];
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "home/setToken":
      return {
        ...state,
        value: action.payload,
      };
    case "home/getUserInfo":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
