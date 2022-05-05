import { useNavigate, useRoutes, Navigate } from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/Login";
import My from "../view/my";
import Particulars from "../view/particulars";
import Todo from "../view/Todo";
import UserInfo from "../view/userInfo";
import Video from "../view/Video";

function AppRouter() {
  const element = useRoutes([
    {
      path: "/",
      element: <Navigate to="/home"></Navigate>,
    },
    {
      path: "/home",
      element: <Home></Home>,
    },
    {
      path: "/todo",
      element: <Todo></Todo>,
    },
    {
      path: "/video",
      element: <Video></Video>,
    },
    {
      path: "/my",
      element: <My></My>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/userInfo",
      element: <UserInfo></UserInfo>,
    },
    {
      path: "/particulars/:id",
      element: <Particulars></Particulars>,
    },
  ]);
  return element;
}
export default AppRouter;
