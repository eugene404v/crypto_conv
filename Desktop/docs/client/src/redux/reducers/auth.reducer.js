import axios from "axios";

const storageName = "userData";

const initialState = {
  userId: null,
  login: null,
  email: 'anton@anton.ru',
  name: 'anton',
  isFetching: false,
  token: null,
  photo: "1.png",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data,
      };
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        email: null,
        name: null,
        isFetching: false,
        token: null,
      };
    case "INIT_AUTH":
      let token, userId;
      if (JSON.parse(localStorage.getItem("userData"))) {
        token = JSON.parse(localStorage.getItem("userData")).token;
        userId = JSON.parse(localStorage.getItem("userData")).userId;// fetch name email photo => state
      } else {
        token = null;
        userId = null;
      }

      return {
        ...state,
        token: token,
        userId: userId,
      };
    default:
      return state;
  }
};

export const fetchUserData = (form) => (dispatch) => {
  dispatch({
    type: "FETCH_USER_DATA",
    data: null,
  });

  axios
    .post("/api/auth/login", { ...form })
    .then(function ({ data }) {
      dispatch(setUserData(data.token, data.userId));// fetch name email photo => state
      localStorage.setItem(
        storageName,
        JSON.stringify({ userId: data.userId, token: data.token })// fetch name email photo => state
      );
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const setUserData = (token, userId) => ({
  type: "SET_USER_DATA",
  data: {
    token,
    userId,
  },
});

export const logout = () => {
  localStorage.removeItem(storageName);
  return {
    type: "LOGOUT",
  };
};

export const initAuth = () => {
  return {
    type: "INIT_AUTH",
  };
};
export default authReducer;
