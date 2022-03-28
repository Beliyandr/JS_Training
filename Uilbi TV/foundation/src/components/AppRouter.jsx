import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/context";

import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { routes } from "../router/routes";
import Loader from "./UI/Loader/Loader";

console.log(routes);
const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostIdPage />}></Route>
      {/* redirect */}
      <Route path="*" element={<Error />}></Route>
    </Routes>
  ) : (
    <Routes>
      {/* redirect */}
      <Route path="*" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRouter;
