import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages/Home/Home";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { NotFound } from "../pages/NotFound/NotFound";
import { ROUTES } from "./routes";
import { Trands } from "../pages/Trands/Trands";
import { Favorites } from "../pages/Favorites/Favorites";
import { Settings } from "../pages/Settings/Settings";
import { Search } from "../pages/Search/Search";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { UserInfo } from "../pages/UserInfo/UserInfo";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.TRANDS} element={<Trands />} />
        <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      <Route path={ROUTES.USER_INFO} element={<UserInfo />} />
    </Routes>
  );
};
