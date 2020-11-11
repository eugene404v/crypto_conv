import axios from "axios";


const initialState = {
  links: [
    
  ],
};

const token = JSON.parse(localStorage.getItem("userData")).token;

const favsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FAVS":
      return {
          ...state,
        links: action.links
      };
    case "REMOVE_FAV":
      const stateCopy = { ...state };
      stateCopy.delete([action.link]);
      return { ...stateCopy };

    default:
      return state;
  }
};

export const updateFavs = (links) => {
  return {
    type: "UPDATE_FAVS",
    links
  };
};

export const sendFav = (link, title) => (dispatch) => {
  axios
    .post(
      "/api/favs",
      { title, link },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(({ data }) => dispatch(updateFavs(data)))
    .catch((err) => console.log(err));
};

export const asyncRemoveFav = (link) => (dispatch) => {
  axios
    .post(
      "/api/favs/remove",
      { link },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(({data}) => dispatch(updateFavs(data)))
    .catch((err) => console.log(err));
};

export const removeFav = (link) => {
  return {
    type: "REMOVE_FAV",
    link,
  };
};

export default favsReducer;
