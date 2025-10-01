import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/Home/HomePage/HomePage";
import { PATH } from "./path";
import { useRoutes, Navigate } from "react-router-dom";

export default function useRouterElement() {
  const element = useRoutes([
    {
      path: PATH.HOME,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },

    {
      path: PATH.ERROR,
      element: <Navigate to={PATH.HOME} replace />,
    },
  ]);
  return element;
}
