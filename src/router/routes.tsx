import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { Home } from "../pages/home/home";

const Router: FC = () => {
  const dataRoute = [
    { path: "/", element: <LoginPage /> },
    { path: "/beranda", element: <Home /> },
  ];
  return (
    <Routes>
      {dataRoute?.map(({ path, element }) => (
        <Route path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
