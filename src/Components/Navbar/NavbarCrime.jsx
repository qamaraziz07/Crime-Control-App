import React from "react";
import { Link } from "react-router-dom";


const NavbarCrime = () => {

  return (
    <>
    <div className="navCrime">
    <div className="logo">
      Crime Reports
    </div>
    <nav className="item">
      <ul className="ul">
      <li>
        <Link to="/missing">REPORT CRIME</Link>
      </li>
      <li>
        <Link to="/missing">VIEW CRIME</Link>
      </li>
      
      </ul>
    </nav>
    </div>
    </>

  );
};

export default NavbarCrime;
