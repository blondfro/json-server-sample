import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const activeStyle = { color: "blue" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {"|"}
      <NavLink to="/users" activeStyle={activeStyle}>
        Users
      </NavLink>
      {"|"}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {"|"}
    </nav>
  );
}

export default Navigation;
