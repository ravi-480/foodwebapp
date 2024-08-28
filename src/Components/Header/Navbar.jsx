import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo2.png" alt="" />
        </Link>
      </div>
      <div className="pages">
        <Link to="/">Home </Link>
        <Link to="/recipe">Recipes</Link>
        <Link to="/contact">Contact </Link>
        <Link to="/favourite">Favourite </Link>
      </div>
      <div>
        <button>Account</button>
      </div>
    </nav>
  );
};

export default Navbar;
