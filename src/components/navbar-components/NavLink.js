import React from "react";
import { Link } from "react-router-dom";
export default function NavLink(props) {
  return (
    <Link to={props.link} className="navlink">
      <span className="button">{props.title}</span>
    </Link>
  );
}
