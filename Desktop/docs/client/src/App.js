import React from "react";
import "materialize-css";
import "./App.css";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { initAuth } from "./redux/reducers/auth.reducer";
import LeftBar from "components/LeftBar";
import RightBar from "components/rightBar/RightBar";

function App() {
  const [ready, setReady] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (ready === false) {
      dispatch(initAuth());
      setReady(true);
    }
  });

  const { token } = useSelector((state) => state.authReducer);
  const isAuth = !!token;

  return (
    <BrowserRouter>
      {isAuth && <Navbar />}
      <main>
        {isAuth && <LeftBar />}
        {useRoutes(isAuth)}
        {isAuth && <RightBar />}
      </main>
    </BrowserRouter>
  );
}

export default App;
