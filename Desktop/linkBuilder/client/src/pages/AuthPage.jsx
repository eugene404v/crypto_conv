import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

function AuthPage() {
  const auth = React.useContext(AuthContext)
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = React.useState({ email: "", password: "" });

  const message = useMessage();

  React.useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message)
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Link Builder</h1>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
          </div>
          <div>
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action btns-wrapper">
            <button className="btn yellow darken-4" onClick={loginHandler}
              disabled={loading}>Log in</button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
