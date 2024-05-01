import "./Nav.css";
import logo from "../../../public/images/logo 1.svg";
import menuBt from "../../../public/images/menu.svg";

import { useState } from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="brandlogo" />
      <div className="nav_group">
        <img src={menuBt} />
        <button className="addListing">+ Post Listing</button>
      </div>
    </nav>
  );
};

export default Nav;
