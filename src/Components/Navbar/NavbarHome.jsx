import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <>
    <div className="nav">
    <div className="logo">
       Crimes Report App
    </div>
    <nav className="item">
      <ul className="ul">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/missingdetails">MISSING PERSONS</Link>
      </li>
      <li>
        <Link to="/crimedetails">CRIMES</Link>
      </li>
      <li>
        <Link to="/login">LOGIN </Link>
      </li>
       <li>
        <Link to="/signup"> SIGNUP</Link>
      </li>
      </ul>
    </nav>
    </div>
    </>

  );
};

export default Navbar;
