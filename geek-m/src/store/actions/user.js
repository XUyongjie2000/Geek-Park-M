import { http } from "../../utils/http";
import { setToken } from "../../utils/auth";
// import axios from "axios"
export const login = (value) => {
  return async (dispatch) => {
    const res = await http.post("authorizations", {
      mobile: value.mobile,
      code: value.code,
    });
    const { token } = res.data.data;
    setToken(token);
    dispatch({ type: "login/setToken", payload: token });
  };
};

export const getUserInfo = () => {
  console.log(123213);
  return async (dispatch, getState) => {
    const { data } = await http.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${getState().userReducer.token}`,
      },
    });
    console.log(data);
    dispatch({ type: "user/getUserInfo", payload: data.data });
  };
};
