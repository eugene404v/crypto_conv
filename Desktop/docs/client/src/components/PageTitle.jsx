import axios from "axios";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { asyncRemoveFav, sendFav } from "redux/reducers/favs.reducer";

function PageTitle(props) {
  const dispatch = useDispatch()
  let history = useHistory();
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("userData")).token;
  const homeClickHandler = () => {
    history.push("/");
  };
  const backClickHandler = () => {
    history.goBack();
  };
  const addClickHandler = () => {
    dispatch(sendFav(location.pathname, props.title))
  };
  const allClickHandler = () => {
    axios
      .get("/api/favs", { headers: { Authorization: `Bearer ${token}` } })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const removeClickHandler = () => {
    dispatch(asyncRemoveFav(location.pathname))
  };
  return (
    <div className="tc-header">
      <div className="btn-couple">
        <button className="btn goHome" onClick={homeClickHandler}>
          <i className="fa fa-home-lg-alt"></i>
        </button>
        <button className="btn goPrev" onClick={backClickHandler}>
          <i className="fa fa-arrow-alt-left"></i>
        </button>
      </div>
      <h2>{props.title}</h2>
      <a href="#" className="tc-fav ">
        <i className="far fa-star"></i>
      </a>
      <div className="tc-right ml-a"></div>
      <button onClick={addClickHandler}>add</button>
      <button onClick={removeClickHandler}>remove</button>
      <button onClick={allClickHandler}>all</button>
    </div>
  );
}

export default PageTitle;
