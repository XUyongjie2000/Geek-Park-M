import { configureStore } from "@reduxjs/toolkit";
// 导入 counterReducer 函数, 用于配置 store 对
import homeReducer from "./reducers/home";
import userReducer from "./reducers/user";
export default configureStore({
  reducer: {
    homeReducer,
    userReducer,
  },
});
