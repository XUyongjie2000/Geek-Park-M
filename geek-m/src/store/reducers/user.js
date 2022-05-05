import { getToken } from "../../utils/auth";

const initialState = {
  token: getToken(),
  name: null,
  isshowTab: false,
  birthday: null,
  gender: null,
  mobile: null,
  photo: null,
  id: null,
};
const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "login/setToken":
      return {
        ...state,
        token: action.payload,
      };
    case "user/getUserInfo":
      return {
        ...state,
        name: action.payload.name,
        birthday: action.payload.birthday,
        id: action.payload.id,
        mobile: action.payload.mobile,
        photo: action.payload.photo,
        gender: action.payload.gender,
      };
    case "clearUserInfo":
      return {
        ...state,
        name: null,
        isshowTab: false,
        birthday: null,
        gender: null,
        mobile: null,
        photo: null,
        id: null,
        token: null,
      };
    case "login/back":
      return {
        ...state,
        isshowTab: false,
      };
    case "login/put":
      return {
        ...state,
        isshowTab: true,
      };
    default:
      return state;
  }
};
export default userReducer;
