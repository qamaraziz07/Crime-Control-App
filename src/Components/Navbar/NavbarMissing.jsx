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
        <Link to="/missingreport">REPORT MISSING</Link>
      </li>
      <li>
        <Link to="/missingpersonlist">VIEW MISSING</Link>
      </li>
      
      </ul>
    </nav>
    </div>
    </>

  );
};

export default NavbarMissing;
