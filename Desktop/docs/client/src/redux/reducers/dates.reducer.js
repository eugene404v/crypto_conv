import axios from "axios";

const simpleDate = (day) => {
return `${day.getFullYear()}.${day.getMonth()}.${day.getDate()}`
}
const formatedDate = (day) => {
  return `${day.getFullYear()}.${day.getMonth()+1}.${day.getDate()}`
  }

const initialState = {
  currentDay: simpleDate(new Date()),
  activeDay: simpleDate(new Date()),
  activeFormatedDay: formatedDate((new Date())),
  events: [],
  activeEvents: []
  
};

const token = JSON.parse(localStorage.getItem("userData")).token;

const datesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_DATES":
        return {
          ...state,
          events: action.dates,
        };
      /*case "REMOVE_FAV":
        const stateCopy = { ...state };
        stateCopy.delete([action.link]);
        return { ...stateCopy };*/
        case "SET_ACTIVE_DAY":
          return {
            ...state,
            activeDay: action.day,
            activeFormatedDay: action.formatedDay
          }
          case "SET_ACTIVE_EVTS": 
          return {
            ...state,
            activeEvents: state.events.filter(el => el.daySec&&el.daySec === action.day)
          }
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
  
  export const sendDate = (day, title) => (dispatch) => {
    axios
      .post(
        "/api/dates",
        { title, day },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(({ data }) => dispatch(updateDates(data)))
      .catch((err) => console.log(err));
  };
  
  export const asyncRemoveDate = (dayId) => (dispatch) => {
    axios
      .post(
        "/api/dates/remove",
        { dayId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(({ data }) => dispatch(updateDates(data)))
      .catch((err) => console.log(err));
  };
  
  /*export const removeDate = (link) => {
    return {
      type: "REMOVE_DATE",
      link,
    };
  };*/
  
  export const fetchDates = () => (dispatch) => {
    axios
      .get("/api/dates", { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => dispatch(updateDates(data)))
      .catch((err) => console.log(err));
  };

  export const setActiveDay = (day) => {
    return {
      type: 'SET_ACTIVE_DAY',
      day: simpleDate(day),
      formatedDay: formatedDate(day)
    }
  }

  export const setActiveEvts = (day) => {
    const activeDay = Date.parse(day)
    return {
      type: 'SET_ACTIVE_EVTS',
      day: activeDay
    }
  }

  export const clearAllDays = (userId) => (dispatch) => {
    axios
      .post(
        "/api/dates/removeall",
        { userId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(({ data }) => dispatch(updateDates(data)))
      .catch((err) => console.log(err));
  }
  
  export default datesReducer;