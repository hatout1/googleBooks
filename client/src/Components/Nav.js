import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light text-white fixed-top bg-success">
        <h1>Google Books</h1>

        <Link to="/">Search</Link>
        <Link to="/Saved">Saved</Link>
      </nav>
    );
  }
}

export default Nav;
