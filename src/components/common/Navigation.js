import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const activeStyle = {
    backgroundColor: "#2168A3",
  };

  const inActiveStyle = {
    font: "22px Arial",
    textDecoration: "none",
    backgroundColor: "#2791B4",
    color: "white",
    padding: "2px 6px 2px 6px",
    width: "100px",
    height: "80px",
    borderTop: "1px solid #CCCCCC",
    borderRight: "1px solid #333333",
    borderBottom: "1px solid #333333",
    borderLeft: "1px solid #CCCCCC",
    borderRadius: "5px",
  };

  return (
    <nav>
      <NavLink to="/" style={inActiveStyle} activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {"|"}
      <NavLink to="/users" style={inActiveStyle} activeStyle={activeStyle}>
        Users
      </NavLink>
      {"|"}
      <NavLink to="/about" style={inActiveStyle} activeStyle={activeStyle}>
        About
      </NavLink>
      {"|"}
    </nav>
  );
}

export default Navigation;
