import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAllDays,
  fetchDates,
  sendDate,
  setActiveDay,
  setActiveEvts,
  asyncRemoveDate,
} from "redux/reducers/dates.reducer";

function Shedule() {
  const dispatch = useDispatch();
  const {
    currentDay,
    activeDay,
    activeEvents,
    events,
    activeFormatedDay,
  } = useSelector((state) => state.datesReducer);
  const { userId } = useSelector((state) => state.authReducer);

  React.useEffect(() => {
    dispatch(fetchDates());
  }, [dispatch]);
  React.useEffect(() => {
    activeDay && dispatch(setActiveEvts(activeDay));
  }, [activeDay, events, dispatch]);
  const calendarHandler = (value) => {
    dispatch(setActiveDay(value));
  };
  const clickHandler = () => {
    dispatch(sendDate(activeDay, "rrrr"));
  };
  const deleteAllHandler = () => {
    dispatch(clearAllDays(userId));
  };
  const deleteHandler = (id) => {
    dispatch(asyncRemoveDate(id));
  };
  const eventsList = activeEvents.map((el) => {
    return (
      <div key={el.dayId} data-id={el.dayId}>
        <p>Дата: {el.day} </p>
        <p>Описание: {el.title}</p> 
        <button onClick={() => deleteHandler(el.dayId)}>delete</button>
      </div>
    );
  });

  return (
    <div>
      <Calendar locale="RU-ru" onClickDay={calendarHandler} />

      <div class="hr"></div>

      <h3>
        События на{" "}
        <span class="today-label">
          {currentDay !== activeDay ? activeFormatedDay : "сегодня"}
        </span>
        :
      </h3>
      <div class="events-wrapper">
        <div class="no-events">
          {activeEvents.length > 0 ? eventsList : "Событий нет"}
        </div>
      </div>

      <div class="centered">
        <button class="btn" onClick={clickHandler}>
          <i class="far fa-plus-circle"></i>
          Новое событие
        </button>
      </div>
      <button onClick={deleteAllHandler}>delete all events</button>
    </div>
  );
}

export default Shedule;
