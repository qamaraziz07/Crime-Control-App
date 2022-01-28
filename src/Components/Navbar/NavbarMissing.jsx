import React from "react";
import { Link } from "react-router-dom";


const NavbarMissing = () => {

  return (
    <>
    <div className="navMis">
    <div className="logo">
      Missing Persons
    </div>
    <nav className="item">
      <ul className="ul">
      <li>
        <Link to="/missing">REPORT MISSING</Link>
      </li>
      <li>
        <Link to="/missing">VIEW MISSING</Link>
      </li>
      
      </ul>
    </nav>
    </div>
    </>

  );
};

export default NavbarMissing;
