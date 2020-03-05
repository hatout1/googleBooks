import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light text-white fixed-top bg-success">
        <h1>Google Books</h1>
        <button>
          <Link to="/">Search</Link>
        </button>
        <button>
          <Link to="/Saved">Saved</Link>
        </button>
      </nav>
    );
  }
}

export default Nav;
