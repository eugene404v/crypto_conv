import React from "react";
import { useHistory } from "react-router-dom";

function PageTitle(props) {
  let history = useHistory();
  const homeClickHandler = () => {
    history.push("/");
  };
  const backClickHandler = () => {
    history.goBack();
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
    </div>
  );
}

export default PageTitle;
