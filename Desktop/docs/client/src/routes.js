import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LinksPage from "./pages/LinksPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "pages/ProfilePage";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
    </Switch>
  );
};
