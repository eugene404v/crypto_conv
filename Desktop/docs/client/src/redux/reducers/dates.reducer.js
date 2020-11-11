import axios from "axios";


const initialState = {
  links: [
    
  ],
};

const token = JSON.parse(localStorage.getItem("userData")).token;

const datesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_DATES":
        return {
          ...state,
          dates: action.dates,
        };
      /*case "REMOVE_FAV":
        const stateCopy = { ...state };
        stateCopy.delete([action.link]);
        return { ...stateCopy };*/
  
      default:
        return state;
    }
  };
  
  export const updateDates = (dates) => {
    return {
      type: "UPDATE_DATES",
      dates,
    };
  };
  
  export const sendDate = (link, title) => (dispatch) => {
    axios
      .post(
        "/api/dates",
        { title, date },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(({ data }) => dispatch(updateDates(data)))
      .catch((err) => console.log(err));
  };
  
  /*export const asyncRemoveFav = (link) => (dispatch) => {
    axios
      .post(
        "/api/favs/remove",
        { link },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(({ data }) => dispatch(updateFavs(data)))
      .catch((err) => console.log(err));
  };
  
  export const removeFav = (link) => {
    return {
      type: "REMOVE_FAV",
      link,
    };
  };*/
  
  export const fetchDates = () => (dispatch) => {
    axios
      .get("/api/dates", { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => dispatch(updateDates(data)))
      .catch((err) => console.log(err));
  };
  
  export default datesReducer;