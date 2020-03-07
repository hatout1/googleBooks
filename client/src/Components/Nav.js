import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light text-white">
        <h1 className="navTitle">Google Books</h1>
        <ul className="nav">
          <li className="nav-item">
            <a className="navBtns">
              <Link to="/">Search</Link>
            </a>
          </li>
          <li className="nav-item">
            <a type="button" className="navBtns">
              <Link to="/Saved">Saved</Link>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
