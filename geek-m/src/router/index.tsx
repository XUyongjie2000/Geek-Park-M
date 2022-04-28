import { useRoutes } from "react-router";
import Layout from "../pages/Layout";
import Login from "../pages/Login";

const routes = [
  {
    path: "/home",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
export default function AppRoute() {
  return useRoutes(routes);
}
