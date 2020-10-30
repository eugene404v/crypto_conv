import React from "react";
import "materialize-css";
import "./App.css";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuth = !!token;
  const routes = useRoutes(isAuth);
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuth }}>
      <BrowserRouter>
        <div className="container">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
