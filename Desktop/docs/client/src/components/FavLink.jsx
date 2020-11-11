import React from "react";
import { Link } from "react-router-dom";

function FavLink(props) {
  return (
    <li key={props.link}>
      <Link to={props.link}>
        <div className="icon">
          <i className="fa fa-file-alt"></i>
        </div>
        <span>{props.title}</span>
      </Link>
    </li>
  );
}

export default FavLink;
