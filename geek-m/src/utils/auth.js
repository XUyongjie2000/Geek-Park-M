const TOKEN_KEY = "itcast_geek_pc";

// 获取token
const getToken = () => sessionStorage.getItem(TOKEN_KEY);
// 存储token
const setToken = (token) => sessionStorage.setItem(TOKEN_KEY, token);
// 清除token
const clearToken = () => sessionStorage.removeItem(TOKEN_KEY);

export { getToken, setToken, clearToken };
