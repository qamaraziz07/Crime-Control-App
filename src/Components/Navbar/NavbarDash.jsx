import React from "react";
import { Link } from "react-router-dom";


const NavbarDash = () => {

  return (
    <>
    <div className="nav">
    <div className="logo">
      Reporting App
    </div>
    <nav className="item">
      <ul className="ul">
      <li>
        <Link to="/crimereport">CRIMES</Link>
      </li>
      <li>
        <Link to="/missingreport">MISSING PERSONS</Link>
      </li>
      <li>
        <Link to="/complaint">COMPLAINT </Link>
      </li>
       <li>
        <Link to="/">LOGOUT</Link>
      </li>
      </ul>
    </nav>
    </div>
    </>

  );
};

export default NavbarDash;
