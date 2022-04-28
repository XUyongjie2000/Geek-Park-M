import { ThunkAction } from 'redux-thunk';
import store from '../store';
import { Token } from './data';
// Redux 应用的状态
export type RootState = ReturnType<typeof store.getState>;

// 使用 thunk 中间件后的 Redux dispatch 类型
// ReturnType：thunk action 的返回类型
// State: Redux 的状态  RootState
// ExtraThunkArg: 额外的参数，没有用到，可以指定为 unknown
// BasicAction: 非 thunk action，即对象形式的 action
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>;

// 将登录 action 添加到该类型中
type RootAction = LoginAction;

// -------------------- Redux 对象形式的 action 的类型 ---------------------------

// 登录 action 类型
export type LoginAction = {
    type: 'login/token';
    payload: Token;
};