import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  //const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="header-nav">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/books" activeClassName="active">
        Book Library
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
};
